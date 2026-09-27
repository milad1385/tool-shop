import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import ProductList from "@/components/templates/seller/ProductList";
import SellerInfo from "@/components/templates/seller/SellerInfo";
import { IPage } from "@/libs/types";

async function page({ params, searchParams }: IPage) {
  const { id } = await params;
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/seller", name: "فروشگاه ها" },
          { id: 3, href: "/seller/1", name: "فروشگاه تستی" },
        ]}
      />
      <SellerInfo />
      <ProductList sellerId={id} searchParams={searchParams} />
    </Container>
  );
}

export default page;
