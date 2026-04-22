import Container from '@/components/modules/p-admin/Container';
import PageTitle from '@/components/modules/p-admin/PageTitle';
import TableOperation from '@/components/modules/p-admin/TableOpration';
import RequestNewProduct from '@/components/templates/p-seller/RequestNewProduct';
import { productFilterOptions } from '@/constants/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "محصولات"
};
 

function page() {
  return (
    <Container>
      <PageTitle content="درخواست محصول جدید" />
      <RequestNewProduct/>
      <TableOperation pageTitle="لیست محصولات" options={productFilterOptions} />
      
    </Container>
  )
}

export default page