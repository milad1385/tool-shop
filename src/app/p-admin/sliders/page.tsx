import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateSlider from "@/components/templates/p-admin/CreateSlider";
import SliderList from "@/components/templates/p-admin/SliderList";
import { sliderFilterOptions } from "@/constants/data";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد اسلایدر" />
      <CreateSlider/>
      <TableOperation pageTitle="لیست اسلایدر ها" options={sliderFilterOptions}/>
      <SliderList/>
    </Container>
  );
}

export default page;
