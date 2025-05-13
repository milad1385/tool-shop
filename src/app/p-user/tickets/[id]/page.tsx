import Container from "@/components/modules/p-user/Container";
import Title from "@/components/modules/p-user/Title";
import AnswerList from "@/components/templates/p-user/tickets/AnswerList";
import React from "react";

function page() {
  return (
    <Container>
      <Title content={`درخواست سرمایه گذاری در سایت`} />
      <AnswerList/>
    </Container>
  );
}

export default page;
