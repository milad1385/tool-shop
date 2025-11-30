import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import SellerInfo from "@/components/templates/seller/SellerInfo";
import React from "react";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/products", name: "محصولات" },
          { id: 3, href: "/seller/1", name: "فروشگاه تستی" },
        ]}
      />
      <SellerInfo />
    </Container>
  );
}

export default page;
