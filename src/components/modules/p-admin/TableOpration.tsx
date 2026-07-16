import { ITableOperation } from "@/libs/types";
import Filters from "./Filters";
import PageTitle from "./PageTitle";
import Search from "./Search";

function TableOperation({ pageTitle, options }: ITableOperation) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 mb-8">
      <PageTitle content={pageTitle} />
      <div className="flex flex-col md:flex-row space-y-6 items-center gap-x-4">
        {options?.length && <Filters filterField="status" options={options} />}
        <Search />
      </div>
    </div>
  );
}

export default TableOperation;
