"use client";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import QuestionRow from "./QuestionRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import { questionTableHeader } from "@/constants/data";
import { useOptimistic } from "react";

function QuestionList({ data, pagination }) {
  const [optimisticQuestions, deleteOptimistc] = useOptimistic(
    data,
    (allQuestions, id) => {
      return allQuestions.filter((question) => question._id !== id);
    },
  );
  return (
    <div className="md:section-box">
      <div className="admin-table qestion-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {questionTableHeader.map((header, index) => (
              <th key={index + 1}>{header}</th>
            ))}
          </Table.Header>
          <Table.Body>
            {optimisticQuestions.map((question, index) => (
              <QuestionRow
                {...question}
                key={question._id}
                index={index + 1}
                onDelete={deleteOptimistc}
              />
            ))}
          </Table.Body>
        </Table>
        {!data.length && <EmptyError />}
        {data.length > 0 && <Pagination count={pagination.totalPages} />}
      </div>
    </div>
  );
}

export default QuestionList;
