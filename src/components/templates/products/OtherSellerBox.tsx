import { ISellerBox } from "@/libs/types";
import MobileSellerBox from "./MobileSellerBox";
import { formattedPrice } from "@/utils/helper";
import { useEffect, useState } from "react";
import { checkProductInCart } from "@/libs/actions/cart.action";
import AddToCart from "../Product/AddToCart";

function OtherSellerBox({
  isMain,
  seller,
  discount,
  price,
  productId,
  slug,
}: ISellerBox) {
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [itemId, setItemId] = useState(null);
  const finalPrice = price - (price * discount) / 100;

  useEffect(() => {
    const getBasketInfo = async () => {
      const { inCart, quantity, itemId } = await checkProductInCart(
        productId,
        seller._id,
      );

      setInCart(inCart);
      setQuantity(quantity);
      setItemId(itemId);
    };

    getBasketInfo();
  }, []);
  return (
    <div className="border border-gray-300 rounded-xl">
      <div className="px-5 py-4 space-y-2">
        <h3 className="font-bold text-zinc-700">فروشنده</h3>
        {isMain && (
          <h4 className="text-xs text-gray-500">
            شما در حال خرید از این فروشنده هستید
          </h4>
        )}
        <MobileSellerBox sellerName={seller.name} />
      </div>
      <div className="border-t-[1.5px] border-t-gray-300 px-5 py-6 flex items-center justify-between">
        <AddToCart
          productId={productId}
          sellerId={seller._id}
          initialInCart={inCart}
          initialQuantity={quantity}
          initialItemId={itemId}
          slug={slug}
          isNormal
        />
        <div className="flex flex-col items-center gap-y-2">
          <div className="flex items-center gap-x-2">
            <span className="font-bold text-base md:text-lg">
              {formattedPrice(finalPrice)}
              <span className="text-xs tracking-tighter mr-1">تومان</span>
            </span>
            {discount > 0 && (
              <div className="bg-yellow-500 text-white rounded-xl px-2 py-0.5 flex-center text-xs">
                {formattedPrice(discount)}٪
              </div>
            )}
          </div>
          {discount > 0 && (
            <span className="line-through text-zinc-400 text-xs">
              {formattedPrice(price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtherSellerBox;
