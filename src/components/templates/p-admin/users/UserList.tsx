import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { usersTableHeader } from "@/constants/data";
import UserRow from "./UserRow";

async function UserList({ data, pagination }) {
  return (
    <div className="md:section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {usersTableHeader.map((header, index) => (
              <th key={index + 1}>{header}</th>
            ))}
          </Table.Header>

          <Table.Body>
            {data.map((user, index) => (
              <UserRow key={user._id} index={index + 1} {...user} />
            ))}
          </Table.Body>
        </Table>
        <Pagination count={pagination.totalPages} />
      </div>
    </div>
  );
}

export default UserList;
