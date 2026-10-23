import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateQuestion from "@/components/templates/p-admin/questions/CreateQuestion";
import QuestionList from "@/components/templates/p-admin/questions/QuestionList";
import { questionFilterOptions } from "@/constants/data";
import { IPage } from "@/libs/types";
import { getQuestions } from "@/services/question.service";

async function page({ searchParams }: IPage) {
  const { page, limit, q, status } = await searchParams;

  const { data, pagination } = await getQuestions({
    page: +page || 1,
    limit: +limit || 10,
    search: q || "",
    status,
  });
  return (
    <Container>
      <PageTitle content="ایجاد سوال جدید" />
      <CreateQuestion />
      <TableOperation pageTitle="لیست سوالات" options={questionFilterOptions} />
      <QuestionList data={data} pagination={pagination} />
    </Container>
  );
}

export default page;
