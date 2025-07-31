import React from "react";
import PageTitle from "./PageTitle";
import Search from "./Search";
import Filters from "./Filters";
import { ITableOperation } from "@/libs/types";

function TableOperation({ pageTitle, options }: ITableOperation) {
  return (
    <div className="flex items-center justify-between my-8">
      <PageTitle content={pageTitle} />
      <div className="flex items-center gap-x-4">
        {options?.length && <Filters filterField="status" options={options} />}
        <Search />
      </div>
    </div>
  );
}

export default TableOperation;
