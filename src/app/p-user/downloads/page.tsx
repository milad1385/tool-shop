import Container from "@/components/templates/p-user/Container";
import DownloadList from "@/components/templates/p-user/DownloadList";
import Title from "@/components/templates/p-user/Title";
import React from "react";

function page() {
  return (
    <Container>
      <Title content="دانلود ها" />
      <DownloadList/>
    </Container>
  );
}

export default page;
