import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CategoryList from "@/components/templates/p-admin/categories/CategoryList";
import CreateCategory from "@/components/templates/p-admin/categories/CreateCategory";
import { IPage } from "@/libs/types";
import {
  getAllCategories,
  getCategoriesWithPagination,
} from "@/services/categories.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "دسته بندی",
};

async function page({ searchParams }: IPage) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const limit = Number(params.limit) || 10;
  const search = params.q;
  const [allCategories, categories] = await Promise.all([
    getCategoriesWithPagination({
      page,
      limit,
      search,
    }),
    getAllCategories(),
  ]);

  return (
    <Container>
      <PageTitle content="ایجاد دسته بندی" />
      <CreateCategory categories={categories} />
      <TableOperation pageTitle="لیست دسته بندی ها" />
      <CategoryList
        data={allCategories.data}
        pagination={allCategories.pagination}
      />
    </Container>
  );
}

export default page;
