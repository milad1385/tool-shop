import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { IIOrderList } from "@/libs/types";
import OrderRow from "./OrderRow";
import { orderTableHeader } from "@/constants/data";

function OrderList({ data, pagination }: IIOrderList) {
  return (
    <div className="md:md:section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {orderTableHeader.map((header, index) => (
              <th key={index + 1}>{header}</th>
            ))}
          </Table.Header>

          <Table.Body>
            {data.map((order, index) => (
              <OrderRow key={order._id} index={index + 1} {...order} />
            ))}
          </Table.Body>
        </Table>
        <Pagination count={pagination.totalPages} />
      </div>
    </div>
  );
}

export default OrderList;
