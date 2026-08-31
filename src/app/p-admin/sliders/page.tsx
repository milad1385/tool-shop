import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateSlider from "@/components/templates/p-admin/sliders/CreateSlider";
import SliderList from "@/components/templates/p-admin/sliders/SliderList";
import { sliderFilterOptions } from "@/constants/data";
import { IPage } from "@/libs/types";
import { getSliders } from "@/services/sliders.service";

async function page({ searchParams }: IPage) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const limit = Number(params.limit) || 10;
  const search = params.q;
  const status = params.status;

  const sliders = await getSliders({ page, limit, search, status });
  return (
    <Container>
      <PageTitle content="ایجاد اسلایدر" />
      <CreateSlider />
      <TableOperation
        pageTitle="لیست اسلایدر ها"
        options={sliderFilterOptions}
      />
      <SliderList data={sliders.data} pagination={sliders.pagination} />
    </Container>
  );
}

export default page;
