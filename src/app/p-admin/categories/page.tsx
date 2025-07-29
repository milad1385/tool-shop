import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import CategoryList from "@/components/templates/p-admin/CategoryList";
import CreateCategory from "@/components/templates/p-admin/CreateCategory";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد دسته بندی" />
      <CreateCategory/>
      <PageTitle content="لیست دسته بندی ها" />
      <CategoryList/>
    </Container>
  );
}

export default page;
