import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import Pagination from "@/components/modules/main/Pagination";
import Articles from "@/components/templates/articles/Articles";
import { Suspense } from "react";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/articles", name: "مقاله ها" },
        ]}
      />
      <Suspense fallback={<div>Loading ....</div>}>
        <Articles />
      </Suspense>
      <Pagination count={3} />
    </Container>
  );
}

export default page;
