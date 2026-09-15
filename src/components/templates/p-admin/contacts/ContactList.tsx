"use client";
import Pagination from "@/components/modules/p-admin/Pagination";
import Table from "@/components/modules/p-admin/Table";
import ContactRow from "./ContactRow";
import EmptyError from "@/components/modules/p-admin/EmptyError";
import { conatctTableHeader } from "@/constants/data";
import { IContactList, IContactUs } from "@/libs/types";
import { useOptimistic } from "react";

function ContactList({ data, pagination }: IContactList) {
  const [optimisticContacts, deleteOptimistc] = useOptimistic(
    data,
    (allContacts, id) => {
      return allContacts.filter((cat: IContactUs) => cat._id !== id);
    },
  );
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
            {optimisticContacts.map((conatct, index) => (
              <ContactRow
                {...conatct}
                key={conatct._id}
                index={index + 1}
                onDelete={deleteOptimistc}
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

export default ContactList;
