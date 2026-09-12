import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import Products from "@/components/templates/category/Products";
import { IPage } from "@/libs/types";
import { getOneCategoryBySlug } from "@/services/categories.service";
import { notFound } from "next/navigation";

async function page({ params, searchParams }: IPage) {
  const { slug } = await params;

  const category = await getOneCategoryBySlug(slug);

  if (!category) {
    return notFound();
  }

  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/products", name: "محصولات" },
          {
            id: 3,
            href: `/category/${category?.href}`,
            name: `دسته بندی ${category?.name}`,
          },
        ]}
      />

      <Products searchParams={searchParams} slug={slug} />
    </Container>
  );
}

export default page;
