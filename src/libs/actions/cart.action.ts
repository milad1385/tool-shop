"use server";

import { auth } from "@/auth";
import connectDB from "@/configs/db";
import Cart from "@/models/Cart";
import Product from "@/models/Product";
import { normalizeData } from "@/utils/helper";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { CartState } from "../types";



export async function addToCart(
  productId: string,
  sellerId: string,
  quantity: number = 1,
): Promise<CartState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, message: "لطفاً وارد شوید" };
    }

    await connectDB();

    const product = await Product.findById(productId);
    if (!product) {
      return { success: false, message: "محصول یافت نشد" };
    }

    const sellerItem = product.sellers.find(
      (s: any) => s.seller.toString() === sellerId,
    );

    if (!sellerItem) {
      return { success: false, message: "فروشنده برای این محصول یافت نشد" };
    }

    let cart = await Cart.findOne({ user: session.user.id });
    if (!cart) {
      cart = new Cart({ user: session.user.id, items: [] });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId &&
        item.seller.toString() === sellerId,
    );

    const currentQuantity =
      existingItemIndex > -1 ? cart.items[existingItemIndex].quantity : 0;

    const newQuantity = currentQuantity + quantity;

    if (newQuantity > sellerItem.stock) {
      return {
        success: false,
        message: `موجودی محصول کافی نیست`,
      };
    }

    const finalPrice =
      sellerItem.price - (sellerItem.price * sellerItem.discount) / 100;

    let successMessage = "";

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity = newQuantity;
      cart.items[existingItemIndex].finalPrice = finalPrice;

      successMessage = `تعداد محصول به ${newQuantity} عدد افزایش یافت`;
    } else {
      cart.items.push({
        product: new mongoose.Types.ObjectId(productId),
        seller: new mongoose.Types.ObjectId(sellerId),
        quantity,
        price: sellerItem.price,
        discount: sellerItem.discount,
        finalPrice,
        addedAt: new Date(),
      });

      successMessage = "محصول به سبد خرید اضافه شد";
    }

    await cart.save();

    revalidatePath("/cart");
    revalidatePath("/");
    revalidatePath(`/products/${product.slug}`);

    return {
      success: true,
      message: successMessage,
      cart: normalizeData(cart),
    };
  } catch (error: any) {
    return { success: false, message: "خطا در اضافه کردن به سبد" };
  }
}

export async function decreaseQuantity(itemId: string): Promise<CartState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, message: "لطفاً وارد شوید" };
    }

    await connectDB();

    const cart = await Cart.findOne({ user: session.user.id });
    if (!cart) {
      return { success: false, message: "سبد خرید یافت نشد" };
    }

    const item = cart.items.find((i) => i._id.toString() === itemId);
    if (!item) {
      return { success: false, message: "آیتم یافت نشد" };
    }

    // ✅ اگه تعداد ۱ بود، کلاً حذف کن
    if (item.quantity <= 1) {
      cart.items = cart.items.filter((i) => i._id.toString() !== itemId);
    } else {
      // ✅ وگرنه یکی کم کن
      item.quantity -= 1;
    }

    await cart.save();

    revalidatePath("/cart");
    revalidatePath("/");

    return {
      success: true,
      message: "تعداد به‌روزرسانی شد",
      cart: JSON.parse(JSON.stringify(cart)),
    };
  } catch (error: any) {
    console.error("خطا در کم کردن تعداد:", error);
    return { success: false, message: "خطا در کم کردن تعداد" };
  }
}

export async function increaseQuantity(itemId: string): Promise<CartState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, message: "لطفاً وارد شوید" };
    }

    await connectDB();

    const cart = await Cart.findOne({ user: session.user.id });
    if (!cart) {
      return { success: false, message: "سبد خرید یافت نشد" };
    }

    const item = cart.items.find((i) => i._id.toString() === itemId);
    if (!item) {
      return { success: false, message: "آیتم یافت نشد" };
    }

    // ✅ گرفتن محصول برای چک کردن موجودی
    const product = await Product.findById(item.product);
    if (!product) {
      return { success: false, message: "محصول یافت نشد" };
    }

    const sellerItem = product.sellers.find(
      (s: any) => s.seller.toString() === item.seller.toString(),
    );

    if (!sellerItem) {
      return { success: false, message: "فروشنده یافت نشد" };
    }

    // ✅ چک کردن موجودی
    if (item.quantity + 1 > sellerItem.stock) {
      return {
        success: false,
        message: `موجودی کافی نیست. حداکثر ${sellerItem.stock} عدد`,
      };
    }

    item.quantity += 1;
    await cart.save();

    revalidatePath("/cart");
    revalidatePath("/");

    return {
      success: true,
      message: "تعداد به‌روزرسانی شد",
      cart: JSON.parse(JSON.stringify(cart)),
    };
  } catch (error: any) {
    console.error("خطا در اضافه کردن تعداد:", error);
    return { success: false, message: "خطا در اضافه کردن تعداد" };
  }
}

export async function removeFromCart(itemId: string): Promise<CartState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, message: "لطفاً وارد شوید" };
    }

    await connectDB();

    const cart = await Cart.findOne({ user: session.user.id });
    if (!cart) {
      return { success: false, message: "سبد خرید یافت نشد" };
    }

    cart.items = cart.items.filter((i) => i._id.toString() !== itemId);
    await cart.save();

    revalidatePath("/cart");
    revalidatePath("/");

    return {
      success: true,
      message: "محصول از سبد حذف شد",
      cart: normalizeData(cart),
    };
  } catch (error: any) {
    console.error("خطا در حذف از سبد:", error);
    return { success: false, message: "خطا در حذف از سبد" };
  }
}

export async function clearCart(): Promise<CartState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, message: "لطفاً وارد شوید" };
    }

    await connectDB();

    await Cart.findOneAndUpdate(
      { user: session.user.id },
      {
        items: [],
        totalItems: 0,
        totalPrice: 0,
        totalDiscount: 0,
        finalPrice: 0,
      },
    );

    revalidatePath("/cart");
    revalidatePath("/");

    return {
      success: true,
      message: "سبد خرید خالی شد",
    };
  } catch (error: any) {
    console.error("خطا در خالی کردن سبد:", error);
    return { success: false, message: "خطا در خالی کردن سبد" };
  }
}

export async function getUserCart(): Promise<CartState> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { success: false, message: "لطفاً وارد شوید" };
    }

    await connectDB();

    const cart = await Cart.findOne({ user: session.user.id })
      .populate({
        path: "items.product",
        select: "name slug images",
      })
      .populate({
        path: "items.seller",
        select: "name city",
      })
      .lean();

    if (!cart) {
      return {
        success: true,
        message: "سبد خرید خالی است",
        cart: {
          items: [],
          totalItems: 0,
          totalPrice: 0,
          totalDiscount: 0,
          finalPrice: 0,
        },
      };
    }

    return {
      success: true,
      message: "سبد خرید دریافت شد",
      cart: normalizeData(cart),
    };
  } catch (error) {
    return { success: false, message: "خطا در گرفتن سبد" };
  }
}

export async function checkProductInCart(
  productId: string,
  sellerId: string,
): Promise<{ inCart: boolean; quantity: number; itemId?: string }> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return { inCart: false, quantity: 0 };
    }

    await connectDB();

    const cart = await Cart.findOne({ user: session.user.id }).lean();
    if (!cart) {
      return { inCart: false, quantity: 0 };
    }

    const item = cart.items.find(
      (i: any) =>
        i.product.toString() === productId && i.seller.toString() === sellerId,
    );

    if (!item) {
      return { inCart: false, quantity: 0 };
    }

    return {
      inCart: true,
      quantity: item.quantity,
      itemId: item._id?.toString(),
    };
  } catch (error) {
    console.error("خطا در چک کردن سبد:", error);
    return { inCart: false, quantity: 0 };
  }
}
