"use server";

import { auth } from "@/auth";
import connectDB from "@/configs/db";
import { POSTAL_SEND_PRICE } from "@/constants/data";
import { IActionState } from "@/libs/types";
import Cart from "@/models/Cart";
import DeliverySlot from "@/models/DeliverySlot";
import Order from "@/models/Order";
import Product from "@/models/Product";
import User from "@/models/User";
import { createPayment } from "@/utils/helper";

function generateOrderNumber(): string {
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `ORD-${timestamp}-${random}`;
}

export async function createOrder(formData: FormData): Promise<IActionState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        message: "برای ثبت سفارش لطفاً لاگین کنید",
      };
    }

    await connectDB();

    const cart = await Cart.findOne({ user: session.user.id });
    if (!cart || !cart.items || cart.items.length === 0) {
      return {
        success: false,
        message: "سبد خرید شما خالی است",
      };
    }

    const addressId = formData.get("addressId") as string;
    if (!addressId) {
      return {
        success: false,
        message: "لطفاً یک آدرس انتخاب کنید",
      };
    }

    const user = await User.findById(session.user.id);
    if (!user) {
      return {
        success: false,
        message: "کاربر یافت نشد",
      };
    }

    const selectedAddress = user.addresses.find(
      (addr: any) => addr._id.toString() === addressId,
    );

    if (!selectedAddress) {
      return {
        success: false,
        message: "آدرس انتخابی یافت نشد",
      };
    }

    const slotId = formData.get("slotId") as string;
    if (!slotId) {
      return {
        success: false,
        message: "لطفاً یک زمان ارسال انتخاب کنید",
      };
    }

    const deliverySlot = await DeliverySlot.findById(slotId);
    if (!deliverySlot) {
      return {
        success: false,
        message: "زمان ارسال انتخابی یافت نشد",
      };
    }

    if (!deliverySlot.isActive) {
      return {
        success: false,
        message: "این بازه زمانی غیرفعال است",
      };
    }

    if (deliverySlot.usedCapacity >= deliverySlot.maxCapacity) {
      return {
        success: false,
        message: "این بازه زمانی پر شده است. لطفاً زمان دیگری انتخاب کنید",
      };
    }

    for (const item of cart.items) {
      const product = await Product.findById(item.product);
      if (!product) {
        return {
          success: false,
          message: "محصول یافت نشد",
        };
      }

      const sellerItem = product.sellers.find(
        (s: any) => s.seller.toString() === item.seller.toString(),
      );

      if (!sellerItem) {
        return {
          success: false,
          message: "فروشنده یافت نشد",
        };
      }

      if (sellerItem.stock < item.quantity) {
        return {
          success: false,
          message: `موجودی محصول "${product.name}" کافی نیست. موجودی فعلی: ${sellerItem.stock} عدد`,
        };
      }
    }

    const orderItems = cart.items.map((item: any) => ({
      product: item.product,
      seller: item.seller,
      quantity: item.quantity,
      price: item.price,
      discount: item.discount,
      finalPrice: item.finalPrice,
    }));

    const order = await Order.create({
      user: session.user.id,
      items: orderItems,
      address: {
        name: selectedAddress.name,
        mobile: selectedAddress.mobile,
        postalCode: selectedAddress.postalCode,
        location: {
          lat: selectedAddress.location.lat,
          lan: selectedAddress.location.lan,
        },
        address: selectedAddress.address,
        houseNumber: selectedAddress.houseNumber,
        unit: selectedAddress.unit,
      },
      deliverySlot: {
        slot: deliverySlot._id,
        dayOfWeek: deliverySlot.dayOfWeek,
        startHour: deliverySlot.startHour,
        endHour: deliverySlot.endHour,
      },
      totalItems: cart.totalItems,
      totalPrice: cart.totalPrice,
      totalDiscount: cart.totalDiscount,
      finalPrice: cart.finalPrice + POSTAL_SEND_PRICE,
      status: "pending",
      paymentStatus: "unpaid",
      paymentMethod: "online",
      orderNumber: generateOrderNumber(),
    });

    const data = await createPayment({
      finalPrice: order.finalPrice,
      orderNumber: order.orderNumber,
    });

    return {
      success: true,
      message: `سفارش با موفقیت ساخته شد`,
      data: {
        trackId: data.trackId,
        paymentUrl: `${process.env.ZIBAL_URL}/start/${data.trackId}`,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "خطا در ثبت سفارش، لطفاً دوباره تلاش کنید",
    };
  }
}

// export async function verifyPayment(params: type) {}
