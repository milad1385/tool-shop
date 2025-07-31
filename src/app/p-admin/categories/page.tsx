import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CategoryList from "@/components/templates/p-admin/CategoryList";
import CreateCategory from "@/components/templates/p-admin/CreateCategory";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "دسته بندی"
};

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد دسته بندی" />
      <CreateCategory/>
      <TableOperation pageTitle="لیست دسته بندی ها" />
      <CategoryList/>
    </Container>
  );
}

export default page;
