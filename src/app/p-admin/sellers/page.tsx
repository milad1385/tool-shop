import Container from "@/components/modules/p-admin/Container";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import SellerList from "@/components/templates/p-admin/sellers/SellerList";
import { statusFilterOptions } from "@/constants/data";
import { IPage } from "@/libs/types";
import { findAllSellers } from "@/services/sellers.service";

async function page({ searchParams }: IPage) {
  const { page, status, limit, q } = await searchParams;
  const { data, pagination } = await findAllSellers({
    page: +page,
    limit: +limit,
    status: status || "all",
    search: q,
  });

  return (
    <Container>
      <TableOperation
        options={statusFilterOptions}
        pageTitle="لیست فروشندگان"
      />
      <SellerList data={data} pagination={pagination} />
    </Container>
  );
}

export default page;
