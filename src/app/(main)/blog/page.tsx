// app/(main)/blog/page.js (اصلاح نهایی)

import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import Pagination from "@/components/modules/main/Pagination";
import PaginationFallback from "@/components/modules/main/PaginationFallback";
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

      {/* 1. Suspense برای کامپوننت Articles */}
      <Suspense fallback={<div>در حال بارگیری مقالات....</div>}>
        <Articles />
      </Suspense>

      {/* 2. Suspense مجزا برای کامپوننت Pagination که از useSearchParams استفاده می‌کند */}
      <Suspense fallback={<PaginationFallback />}>
        <Pagination count={3} />
      </Suspense>
    </Container>
  );
}

export default page;
