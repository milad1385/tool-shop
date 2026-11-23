import { ISellersBox } from "@/libs/types";
import { findCheapestPriceBTWSellers } from "@/utils/helper";
import MobileSellerBox from "./MobileSellerBox";
import OtherSellers from "./OtherSellers";
import SellerBox from "./SellerBox";

async function SellersBox({ sellers, productId, slug }: ISellersBox) {
  const cheapestSeller = findCheapestPriceBTWSellers(sellers);
  return (
    <div className="bg-white rounded-2xl px-5 py-4 lg:pt-7 mt-8">
      <h3 className="font-Lalezar text-xl lg:text-2xl hidden lg:block">
        فروشندگان این کالا
      </h3>
      {/* desktop seller box */}
      <div className="divide-y-2 divide-gray-100 hidden lg:block">
        {sellers.map((seller, index) => (
          <SellerBox {...seller} key={index + 1} />
        ))}
      </div>

      <div className="flex md:hidden items-center justify-between">
        <h3 className="font-Lalezar text-lg lg:text-2xl text-zinc-700">
          {sellers.length === 1 ? "فروشنده" : "فروشندگان"} این کالا
        </h3>
        <OtherSellers productId={productId} slug={slug} sellers={sellers} />
      </div>
      {/* mobile seller box */}

      <div className="block lg:hidden pt-4">
        <MobileSellerBox sellerName={cheapestSeller.seller.name} />
      </div>
    </div>
  );
}

export default SellersBox;
