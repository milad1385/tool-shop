import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import Pagination from "@/components/modules/main/Pagination";
import ComparisonBox from "@/components/templates/comparison/ComparisonBox";
import React from "react";

function page() {
  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/comparison", name: "مقایسه محصول" },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white rounded-3xl p-4">
        {products.map((product) => (
          <ComparisonBox key={product.id} />
        ))}
      </div>

      <Pagination count={3} />
    </Container>
  );
}

export default page;
