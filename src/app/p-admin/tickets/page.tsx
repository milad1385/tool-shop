import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import TicketList from "@/components/templates/p-admin/tickets/TicketList";
import { ticketStatusFilter } from "@/constants/data";

function page() {
  return (
    <Container>
      <TableOperation
        pageTitle="لیست تیکت ها"
        options={ticketStatusFilter}
      />
      <TicketList/>
    </Container>
  );
}

export default page;
