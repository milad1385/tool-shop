import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import FilterSide from "@/components/templates/products/FilterSide";
import Products from "@/components/templates/products/Products";
import React from "react";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { name: "خانه", href: "/", id: 1 },
          { id: 2, name: "فروشگاه", href: "/products" },
        ]}
      />

      <div className="grid grid-cols-12">
        <FilterSide />
        <Products />
      </div>
    </Container>
  );
}

export default page;
