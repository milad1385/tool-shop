import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import Pagination from "@/components/modules/main/Pagination";
import Articles from "@/components/templates/articles/Articles";
import { IPage } from "@/libs/types";
import { getAllArticlesByCategory } from "@/services/article.service";
import { getOneCategoryBySlug } from "@/services/categories.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function page({ params, searchParams }: IPage) {
  const { href } = await params;
  const { page, limit } = await searchParams;
  const { data, pagination } = await getAllArticlesByCategory({
    page: +page || 1,
    limit: +limit || 10,
    href,
  });

  if (!data.length) {
    notFound();
  }

  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/blog", name: "مقاله ها" },
          {
            id: 3,
            href: `/blog/category/${data?.[0]?.category?.href}`,
            name: data?.[0]?.category?.name,
          },
        ]}
      />

      <Articles data={data} />

      <Pagination count={pagination.totalPages} />
    </Container>
  );
}

export default page;

export async function generateMetadata({ params }: IPage): Promise<Metadata> {
  const { href } = await params;
  const category = await getOneCategoryBySlug(href);

  return {
    title: `مقالات دسته  ${category.name}`,
    description: category.desc,
  };
}
