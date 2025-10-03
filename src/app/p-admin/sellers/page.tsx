import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import SellerList from "@/components/templates/p-admin/SellerList";
import { statusFilterOptions } from "@/constants/data";

function page() {
  return (
    <Container>
       <TableOperation
        options={statusFilterOptions}
        pageTitle="لیست فروشندگان"
      />
      <SellerList/>
    </Container>
  );
}

export default page;
