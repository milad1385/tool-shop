import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CommentList from "@/components/templates/p-admin/CommentList";
import { statusFilterOptions } from "@/constants/data";

function page() {
  return (
    <Container>
      <TableOperation options={statusFilterOptions} pageTitle="لیست کامنت ها" />
      <CommentList />
    </Container>
  );
}

export default page;
