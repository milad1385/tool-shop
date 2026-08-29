import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { ICategoryList } from "@/libs/types";
import CategoryRow from "./CategoryRow";
import { categoryTableHeader } from "@/constants/data";

function CategoryList({ data, pagination }: ICategoryList) {
  return (
    <div className="md:section-box">
      <div className="admin-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {categoryTableHeader.map((header, index) => (
              <th key={index + 1}>{header}</th>
            ))}
          </Table.Header>
          <Table.Body>
            {data.map((category, index) => (
              <CategoryRow key={category._id} {...category} index={index + 1} />
            ))}
          </Table.Body>
        </Table>
        <Pagination count={pagination.totalItems} />
      </div>
    </div>
  );
}

export default CategoryList;
