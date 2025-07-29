import React, { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
};

const Table = ({ children }: TableProps) => {
  return (
    <div className="table-container text-sm md:text-base bg-secondary-100 font-Dana  text-center text-black">
      <table>{children}</table>
    </div>
  );
};

export default Table;

const TableHeader = ({ children }: TableProps) => {
  return (
    <thead>
      <tr className="bg-[#363636] border-b border-zinc-400 text-white">{children}</tr>
    </thead>
  );
};

const TableBody = ({ children }: TableProps) => {
  return <tbody>{children}</tbody>;
};

const TableRow = ({ children }: TableProps) => {
  return <tr className="border-b border-zinc-300 last:border-0">{children}</tr>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
