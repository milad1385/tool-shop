import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import UserList from "@/components/templates/p-admin/users/UserList";
import { userStatusFilterOptions } from "@/constants/data";
import { IPage } from "@/libs/types";
import { getUsers } from "@/services/users.service";

async function page({ searchParams }: IPage) {
  const { page, limit, status, q } = await searchParams;
  const { data, pagination } = await getUsers({
    page: +page || 1,
    limit: +limit || 10,
    search: q,
    status: status || "all",
  });

  return (
    <Container>
      <TableOperation
        pageTitle="لیست کاربران"
        options={userStatusFilterOptions}
      />
      <UserList data={data} pagination={pagination} />
    </Container>
  );
}

export default page;
