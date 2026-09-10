"use client";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import { IProductList } from "@/libs/types";
import ProductItemRow from "./ProductItemRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import { productTableHeader } from "@/constants/data";

function ProductList({ data, pagination }: IProductList) {
  console.log(data);

  return (
    <div className="md:section-box">
      <div className="admin-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {productTableHeader.map((header, index) => (
              <th key={index + 1}>{header}</th>
            ))}
          </Table.Header>
          <Table.Body>
            {data.map((product, index) => (
              <ProductItemRow
                {...product}
                index={index + 1}
                key={product._id}
              />
            ))}
          </Table.Body>
        </Table>
        {!data.length && <EmptyError />}
        {data.length > 0 && <Pagination count={pagination.totalItems} />}
      </div>
    </div>
  );
}

export default ProductList;
