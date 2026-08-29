import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import UpdateCategory from "@/components/templates/p-admin/categories/UpdateCategory";
import { IPage } from "@/libs/types";
import {
  getAllCategories,
  getOneCategoryById,
} from "@/services/categories.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "ویرایش دسته بندی",
  description: "در این صفحه می توانید به ویرایش دسته بندی مورد نظر بپردازید",
};

async function page({ params }: IPage) {
  const { id } = await params;
  const [category, categories] = await Promise.all([
    getOneCategoryById(id),
    getAllCategories(),
  ]);
  if (!category) {
    return notFound();
  }
  return (
    <Container>
      <PageTitle content={`ویرایش ${category.name}`} />
      <UpdateCategory categories={categories} category={category} />
    </Container>
  );
}

export default page;
