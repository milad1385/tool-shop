import EmptyError from "@/components/modules/p-admin/EmptyError";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { orderTableHeader } from "@/constants/data";
import { IIOrderList, UserRoleEnums } from "@/libs/types";
import OrderRow from "./OrderRow";
import { auth } from "@/auth";

async function OrderList({ data, pagination }: IIOrderList) {
  const { user } = await auth();

  return (
    <div className="md:md:section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {orderTableHeader.map((header, index) => {
              if (
                header === "تغییر وضعیت" &&
                !user.roles.includes(UserRoleEnums.SUPER_ADMIN)
              ) {
                return null;
              } else {
                return <th key={index + 1}>{header}</th>;
              }
            })}
          </Table.Header>

          <Table.Body>
            {data.map((order, index) => (
              <OrderRow
                key={order._id}
                index={index + 1}
                roles={user.roles}
                {...order}
              />
            ))}
          </Table.Body>
        </Table>
        {!data.length && <EmptyError />}
        {data.length && <Pagination count={pagination.totalPages} />}
      </div>
    </div>
  );
}

export default OrderList;
