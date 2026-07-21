import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import { ticketStatusFilter } from "@/constants/data";

function page() {
  return (
    <Container>
      <TableOperation
        pageTitle="لیست تیکت ها"
        options={ticketStatusFilter}
      />
    </Container>
  );
}

export default page;
