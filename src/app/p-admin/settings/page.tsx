import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import AddNewInfo from "@/components/templates/p-admin/AddNewInfo";

function page() {
  return (
    <Container>
      <PageTitle content="تنظیمات سایت ترازو" />
      <AddNewInfo/>
    </Container>
  );
}

export default page;
