import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateNewProduct from "@/components/templates/p-admin/products/CreateNewProduct";
import ProductList from "@/components/templates/p-admin/products/ProductList";
import { productFilterOptions } from "@/constants/data";
import { getAllCategories } from "@/services/categories.service";

async function page() {
  const categories = await getAllCategories();
  return (
    <Container>
      <PageTitle content="ایجاد محصول جدید" />
      <CreateNewProduct categories={categories} />
      <TableOperation pageTitle="لیست محصولات" options={productFilterOptions} />
      <ProductList />
    </Container>
  );
}

export default page;
