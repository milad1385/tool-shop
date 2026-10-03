import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { UserRoleEnums } from "@/libs/types";
import { hasPermission } from "@/utils/auth";
import SellerItem from "./SellerItem";
import { sellersTableHeader } from "@/constants/data";
import EmptyError from "@/components/modules/p-admin/EmptyError";

async function SellerList({ data, pagination }) {
  const hasUserPermission = await hasPermission({
    roles: [UserRoleEnums.SUPER_ADMIN],
  });
  return (
    <div className="md:section-box">
      <div className="admin-table discount mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {sellersTableHeader.map((header, index) => {
              if (header === "تغییر وضعیت" && !hasUserPermission) {
                return null;
              } else {
                return <th key={index + 1}>{header}</th>;
              }
            })}
          </Table.Header>

          <Table.Body>
            {data.map((seller, index) => (
              <SellerItem
                index={index + 1}
                key={seller._id}
                hasPermission={hasUserPermission}
                {...seller}
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

export default SellerList;
