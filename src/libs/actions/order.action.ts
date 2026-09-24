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
import { revalidatePath } from "next/cache";

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

    order.trackingCode = data.trackId;
    await order.save();

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

export async function verifyPayment(trackId: number): Promise<IActionState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        message: "لطفاً وارد شوید",
      };
    }

    if (!trackId) {
      return {
        success: false,
        message: "شناسه پرداخت معتبر نیست",
      };
    }

    await connectDB();

    const order = await Order.findOne({
      trackingCode: trackId.toString(),
      user: session.user.id,
    });

    if (!order) {
      return {
        success: false,
        message: "سفارش یافت نشد",
      };
    }

    if (order.paymentStatus === "paid") {
      revalidatePath("/p-user/orders");
      revalidatePath(`/p-user/orders/${order._id}`);

      return {
        success: true,
        message: "این سفارش قبلاً پرداخت شده است",
        data: {
          orderId: order._id.toString(),
          orderNumber: order.orderNumber,
          alreadyPaid: true,
        },
      };
    }

    const res = await fetch(`${process.env.ZIBAL_BASE_URL}/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        merchant: process.env.ZIBAL_MERCHANT_ID,
        trackId: trackId,
      }),
    });

    const data = await res.json();

    if (data.result !== 100) {
      await Order.findByIdAndUpdate(order._id, {
        paymentStatus: "failed",
        notes: `خطا در تایید پرداخت: ${data.result || "نامشخص"}`,
      });

      revalidatePath("/p-user/orders");
      revalidatePath(`/p-user/orders/${order._id}`);

      return {
        success: false,
        message: "پرداخت ناموفق بود. لطفاً دوباره تلاش کنید",
        data: {
          orderId: order._id.toString(),
          orderNumber: order.orderNumber,
          failed: true,
        },
      };
    }

    const reservedSlot = await DeliverySlot.findOneAndUpdate(
      {
        _id: order.deliverySlot.slot,
        isActive: true,
        $expr: { $lt: ["$usedCapacity", "$maxCapacity"] },
      },
      { $inc: { usedCapacity: 1 } },
      { new: true },
    );

    if (!reservedSlot) {
      await Order.findByIdAndUpdate(order._id, {
        paymentStatus: "paid",
        status: "pending",
        notes: "پرداخت موفق اما اسلات پر شده - نیاز به پیگیری",
      });

      revalidatePath("/p-user/orders");
      revalidatePath(`/p-user/orders/${order._id}`);

      return {
        success: false,
        message:
          "پرداخت موفق بود اما متأسفانه این بازه زمانی پر شده است. لطفاً با پشتیبانی تماس بگیرید",
        data: {
          orderId: order._id.toString(),
          orderNumber: order.orderNumber,
          slotFull: true,
        },
      };
    }

    let stockError: string | null = null;

    for (const item of order.items) {
      try {
        const product = await Product.findById(item.product);
        if (!product) continue;

        const sellerItem = product.sellers.find(
          (s: any) => s.seller.toString() === item.seller.toString(),
        );

        if (!sellerItem) {
          stockError = `فروشنده محصول "${product.name}" یافت نشد`;
          break;
        }

        if (sellerItem.stock < item.quantity) {
          stockError = `موجودی محصول "${product.name}" کافی نیست. موجودی فعلی: ${sellerItem.stock} عدد`;
          break;
        }

        sellerItem.stock -= item.quantity;
        await product.save();
      } catch (error: any) {
        stockError = error.message;
        break;
      }
    }

    if (stockError) {
      await DeliverySlot.findByIdAndUpdate(order.deliverySlot.slot, {
        $inc: { usedCapacity: -1 },
      });

      await Order.findByIdAndUpdate(order._id, {
        paymentStatus: "paid",
        status: "pending",
        notes: `خطا در تکمیل سفارش: ${stockError}`,
      });

      revalidatePath("/p-user/orders");
      revalidatePath(`/p-user/orders/${order._id}`);

      return {
        success: false,
        message:
          "پرداخت موفق بود اما خطایی در تکمیل سفارش رخ داد. لطفاً با پشتیبانی تماس بگیرید",
        data: {
          orderId: order._id.toString(),
          orderNumber: order.orderNumber,
          error: true,
        },
      };
    }

    order.status = "paid";
    order.paymentStatus = "paid";
    await order.save();

    await Cart.findOneAndDelete({ user: session.user.id });

    revalidatePath("/cart");
    revalidatePath("/");
    revalidatePath("/p-user/orders");
    revalidatePath(`/p-user/orders/${order._id}`);

    return {
      success: true,
      message: `پرداخت با موفقیت انجام شد. سفارش شما با شماره ${order.orderNumber} تایید شد`,
      data: {
        orderId: order._id.toString(),
        orderNumber: order.orderNumber,
        trackingCode: data.trackId || trackId,
        refId: data.refId,
        cardPan: data.cardPan,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "خطا در تایید پرداخت، لطفاً دوباره تلاش کنید",
    };
  }
}

export async function continuePayment(orderId: string): Promise<IActionState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return {
        success: false,
        message: "لطفاً وارد شوید",
      };
    }

    await connectDB();

    const order = await Order.findById(orderId);
    if (!order) {
      return {
        success: false,
        message: "سفارش یافت نشد",
      };
    }

    if (order.user.toString() !== session.user.id) {
      return {
        success: false,
        message: "دسترسی غیرمجاز",
      };
    }

    if (order.paymentStatus === "paid") {
      return {
        success: false,
        message: "این سفارش قبلاً پرداخت شده است",
      };
    }

    if (order.status === "cancelled") {
      return {
        success: false,
        message: "این سفارش لغو شده است",
      };
    }

    const data = await createPayment({
      finalPrice: order.finalPrice,
      orderNumber: order.orderNumber,
    });

    if (!data?.trackId) {
      return {
        success: false,
        message: "خطا در ایجاد تراکنش جدید",
      };
    }

    order.trackingCode = data.trackId;
    await order.save();

    return {
      success: true,
      message: "در حال انتقال به درگاه پرداخت...",
      data: {
        trackId: data.trackId,
        paymentUrl: `${process.env.ZIBAL_URL}/start/${data.trackId}`,
      },
    };
  } catch (error: any) {
    console.error("خطا در ادامه پرداخت:", error);
    return {
      success: false,
      message: error.message || "خطا در ادامه پرداخت، لطفاً دوباره تلاش کنید",
    };
  }
}
