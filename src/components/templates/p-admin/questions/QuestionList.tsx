import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import QuestionRow from "./QuestionRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import { questionTableHeader } from "@/constants/data";

function QuestionList({ data, pagination }) {
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
            {data.map((question, index) => (
              <QuestionRow {...question} key={question._id} index={index + 1} />
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
