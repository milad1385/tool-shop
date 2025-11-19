import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateNewProduct from "@/components/templates/p-admin/CreateNewProduct";
import ProductList from "@/components/templates/p-admin/ProductList";
import { productFilterOptions } from "@/constants/data";

function page() {
  return (
    <Container>
      <PageTitle content="ایجاد محصول جدید" />
      <CreateNewProduct/>
      <TableOperation pageTitle="لیست محصولات" options={productFilterOptions} />
      <ProductList/>
    </Container>
  );
}

export default page;
