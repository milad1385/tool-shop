import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import UserList from "@/components/templates/p-admin/UserList";
import { userStatusFilterOptions } from "@/constants/data";

function page() {
  return (
    <Container>
      <TableOperation
        pageTitle="لیست کاربران"
        options={userStatusFilterOptions}
      />
      <UserList />
    </Container>
  );
}

export default page;
