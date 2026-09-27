import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import SellerList from "@/components/templates/seller/SellerList";
import SellersTopBar from "@/components/templates/seller/SellersTopBar";
import { IPage } from "@/libs/types";
import { getSellers } from "@/services/sellers.service";

async function page({ searchParams }: IPage) {
  const { page, limit } = await searchParams;
  const { data, pagination } = await getSellers({
    page,
    limit,
    isVerified: true,
  });

  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/seller", name: "لیست فروشگاه ها" },
        ]}
      />
      <SellersTopBar />
      <SellerList data={data} pagination={pagination} />
    </Container>
  );
}

export default page;
