import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateQuestion from "@/components/templates/p-admin/CreateQuestion";
import QuestionList from "@/components/templates/p-admin/QuestionList";
import { questionFilterOptions } from "@/constants/data";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد سوال جدید" />
      <CreateQuestion />
      <TableOperation pageTitle="لیست سوالات" options={questionFilterOptions} />
      <QuestionList />
    </Container>
  );
}

export default page;
