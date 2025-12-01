import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import SellersTopBar from "@/components/templates/seller/SellersTopBar";
import React from "react";

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
    </Container>
  );
}

export default page;
