import Container from "@/components/modules/p-admin/Container";
import PageTitle from "@/components/modules/p-admin/PageTitle";
import TableOperation from "@/components/modules/p-admin/TableOpration";
import CreateNewProduct from "@/components/templates/p-admin/products/CreateNewProduct";
import ProductList from "@/components/templates/p-admin/products/ProductList";
import { productFilterOptions } from "@/constants/data";
import { IPage } from "@/libs/types";
import { getAllCategories } from "@/services/categories.service";
import { getProducts } from "@/services/products.service";
import { getAllSellers } from "@/services/sellers.service";

async function page({ searchParams }: IPage) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const limit = Number(params.limit) || 10;
  const status = params.status;
  const search = params.q;
  const [categories, sellers, products] = await Promise.all([
    getAllCategories(),
    getAllSellers(),
    getProducts({ page, limit, search, status }),
  ]);
  return (
    <Container>
      <PageTitle content="ایجاد محصول جدید" />
      <CreateNewProduct sellers={sellers} categories={categories} />
      <TableOperation pageTitle="لیست محصولات" options={productFilterOptions} />
      <ProductList pagination={products.pagination} data={products.data} />
    </Container>
  );
}

export default page;
