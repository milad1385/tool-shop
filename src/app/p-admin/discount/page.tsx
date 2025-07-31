import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOpration from "@/components/modules/p-admin/TableOpration";
import CreateDiscount from "@/components/templates/p-admin/CreateDiscount";
import DiscountList from "@/components/templates/p-admin/DiscountList";
import { DiscountFilterOptions } from "@/constants/data";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد کد تخفیف" />
      <CreateDiscount />
      <TableOpration pageTitle="لیست کد های تخفیف" options={DiscountFilterOptions}/>
      <DiscountList />
    </Container>
  );
}

export default page;
