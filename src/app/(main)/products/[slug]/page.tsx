import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import Title from "@/components/modules/main/Title";
import ProductDetails from "@/components/templates/Product/ProductDetails";
import ProductSlider from "@/components/templates/Product/ProductSlider";
import ProductTabs from "@/components/templates/Product/ProductTabs";
import SellersBox from "@/components/templates/products/SellersBox";
import { IPage } from "@/libs/types";
import { getProduct } from "@/services/products.service";

async function page({ params }: IPage) {
  const { slug } = await params;

  const product = await getProduct(slug);

  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/products", name: "محصولات" },
          { id: 3, href: "/products/1", name: "جزییات محصول دریل" },
        ]}
      />
      <div className="grid grid-cols-12 bg-white p-4 rounded-2xl">
        <ProductSlider images={product.images} />
        <ProductDetails {...product} />
      </div>
      <SellersBox sellers={product.sellers} />
      <ProductTabs />
      <div className="mt-16 mb-10 bg-[#eab308] rounded-2xl p-8 shadow">
        <Title title="محصولات مرتبط" />
        {/* <SameProductSlider /> */}
      </div>
    </Container>
  );
}

export default page;
