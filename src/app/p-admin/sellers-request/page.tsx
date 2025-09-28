import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import SellerRequestList from "@/components/templates/p-admin/SellerRequestList";
import { statusFilterOptions } from "@/constants/data";

function page() {
  return (
    <Container>
      <TableOperation
        options={statusFilterOptions}
        pageTitle="لیست درخواست فروشندگان"
      />
      <SellerRequestList />
    </Container>
  );
}

export default page;
