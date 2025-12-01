import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import SellerList from "@/components/templates/seller/SellerList";
import SellersTopBar from "@/components/templates/seller/SellersTopBar";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/seller", name: "لیست فروشگاه ها" },
        ]}
      />
      <SellersTopBar/>
      <SellerList/>
    </Container>
  );
}

export default page;
