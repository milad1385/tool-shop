"use client";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { ICategory, ICategoryList } from "@/libs/types";
import CategoryRow from "./CategoryRow";
import { categoryTableHeader } from "@/constants/data";
import { useOptimistic } from "react";

function CategoryList({ data, pagination }: ICategoryList) {
  const [optimisticCategory, deleteOptimistc] = useOptimistic(
    data,
    (allCategories, id) => {
      return allCategories.filter((cat: ICategory) => cat._id !== id);
    },
  );
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
            {optimisticCategory.map((category, index) => (
              <CategoryRow
                key={category._id}
                {...category}
                index={index + 1}
                onDelete={deleteOptimistc}
              />
            ))}
          </Table.Body>
        </Table>
        <Pagination count={pagination.totalItems} />
      </div>
    </div>
  );
}

export default CategoryList;
