import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import CreateQuestion from "@/components/templates/p-admin/questions/CreateQuestion";
import UpdateQuestion from "@/components/templates/p-admin/questions/UpdateQuestion";
import { IPage } from "@/libs/types";
import { getQuestion } from "@/services/question.service";
import { notFound } from "next/navigation";

async function page({ params }: IPage) {
  const { id } = await params;
  const question = await getQuestion(id);

  if (!question) {
    notFound();
  }

  return (
    <Container>
      <PageTitle content="ویرایش سوال" />
      <UpdateQuestion question={question} />
    </Container>
  );
}

export default page;
