import Container from "@/components/modules/p-user/Container";
import DownloadList from "@/components/templates/p-user/downloads/DownloadList";
import Title from "@/components/modules/p-user/Title";
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
