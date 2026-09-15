import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import ContactRow from "./ContactRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import { conatctTableHeader } from "@/constants/data";
import { IContactList } from "@/libs/types";

function ContactList({ data, pagination }: IContactList) {
  return (
    <div className="md:section-box">
      <div className="admin-table mt-5 overflow-hidden  rounded-md">
        <Table>
          <Table.Header>
            {conatctTableHeader.map((header, index) => (
              <th key={index + 1}>{header}</th>
            ))}
          </Table.Header>
          <Table.Body>
            {data.map((conatct, index) => (
              <ContactRow {...conatct} key={conatct._id} index={index + 1} />
            ))}
          </Table.Body>
        </Table>
        {!data.length && <EmptyError />}
        {data.length > 0 && <Pagination count={pagination.totalItems} />}
      </div>
    </div>
  );
}

export default ContactList;
