import Title from "@/components/modules/main/Title";
import { getBestSellerProducts } from "@/services/products.service";
import BestSellerSlider from "./BestSellerSlider";

async function BestSeller() {
  const products = await getBestSellerProducts(10);

  return (
    <div>
      <Title title="پرفروش ترین کالاها" />
      <BestSellerSlider products={products} />
    </div>
  );
}

export default BestSeller;
