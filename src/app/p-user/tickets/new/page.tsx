import React from "react";
import Container from "@/components/modules/p-user/Container";
import Title from "@/components/modules/p-user/Title";
import SendTicketForm from "@/components/templates/p-user/tickets/SendTicketForm";

function page() {
  return (
    <Container>
      <Title content="ارسال تیکت جدید" />
      <SendTicketForm/>
    </Container>
  );
}

export default page;
