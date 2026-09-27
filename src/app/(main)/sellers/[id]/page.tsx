import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import ProductList from "@/components/templates/seller/ProductList";
import SellerInfo from "@/components/templates/seller/SellerInfo";
import { IPage } from "@/libs/types";
import { getSeller } from "@/services/sellers.service";
import { notFound } from "next/navigation";

async function page({ params, searchParams }: IPage) {
  const { id } = await params;
  const seller = await getSeller({ id });
  if (!seller) {
    notFound();
  }
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/sellers", name: "فروشگاه ها" },
          { id: 3, href: `/seller/${seller._id}`, name: seller.name },
        ]}
      />
      <SellerInfo seller={seller} />
      <ProductList sellerId={id} searchParams={searchParams} />
    </Container>
  );
}

export default page;
