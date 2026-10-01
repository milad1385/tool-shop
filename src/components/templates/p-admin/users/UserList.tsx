import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import UserRow from "./UserRow";

function UserList({ data, pagination }) {
  
  return (
    <div className="md:section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            <th>شماره</th>
            <th>نام</th>
            <th>نام کاربری</th>
            <th>ایمیل</th>
            <th>شماره همراه</th>
            <th>نقش</th>
            <th>تاریخ عضویت</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Header>

          <Table.Body>
            {/* <Table.Row>
              <td>1</td>
              <td>میلاد سلامیان</td>
              <td>Milad1385</td>
              <td>Milad@gmail.com</td>
              <td>09336085012</td>
              <td>ادمین</td>
              <td>1404/04/12</td>

              <td>
                <div className="bg-green-500 text-white rounded-3xl py-2 px-4">
                  فعال
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 child:cursor-pointer">
                  <FaCheck className="text-green-500 text-base md:text-xl" />
                  <RiAdminFill className="text-blue-800 text-base md:text-2xl" />
                  <FaTrash className="text-red-600 text-base md:text-xl" />
                </div>
              </td>
            </Table.Row> */}
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
