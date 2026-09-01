import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import UpdateSlider from "@/components/templates/p-admin/sliders/UpdateSlider";
import { IPage } from "@/libs/types";
import { getOneSlider } from "@/services/sliders.service";
import React from "react";

async function page({ params }: IPage) {
  const { id } = await params;
  const slider = await getOneSlider(id);
  return (
    <Container>
      <PageTitle content={`ویرایش اسلایدر ${slider.title}`} />
      <UpdateSlider slider={slider} />
    </Container>
  );
}

export default page;
