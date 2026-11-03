import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import Pagination from "@/components/modules/main/Pagination";
import Articles from "@/components/templates/articles/Articles";
import { IPage } from "@/libs/types";
import { getAllArticles } from "@/services/article.service";

async function page({ searchParams }: IPage) {
  const { page, limit, q } = await searchParams;

  const { data, pagination } = await getAllArticles({
    page: +page || 1,
    limit: +limit || 10,
    status: "published",
    search: q || "",
  });
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/articles", name: "مقاله ها" },
        ]}
      />

      <Articles data={data} />

      <Pagination count={pagination.totalPages} />
    </Container>
  );
}

export default page;
