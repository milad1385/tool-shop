import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import ContactList from "@/components/templates/p-admin/contacts/ContactList";
import { contactFilterOptions } from "@/constants/data";
import { IPage } from "@/libs/types";
import { getContacts } from "@/services/contactus.service";

async function page({ searchParams }: IPage) {
  const { page, limit, status, q } = await searchParams;
  const contacts = await getContacts({
    page: +page || 1,
    limit: +limit || 10,
    search: q,
    status,
  });

  return (
    <Container>
      <TableOperation
        pageTitle="لیست ارتباط با ما"
        options={contactFilterOptions}
      />
      <ContactList data={contacts.data} pagination={contacts.pagination} />
    </Container>
  );
}

export default page;
