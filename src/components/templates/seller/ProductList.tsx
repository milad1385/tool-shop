import Products from "@/components/templates/products/Products";
import { IProductListSeller } from "@/libs/types";
import FilterSide from "../products/FilterSide";
import { getAllFilters } from "@/services/products.service";

async function ProductList({ sellerId, searchParams }: IProductListSeller) {
  const filters = await getAllFilters();
  return (
    <div className="grid grid-cols-12 gap-x-5 mt-6">
      <FilterSide filters={filters} />
      <Products sellerId={sellerId} searchParams={searchParams} />
    </div>
  );
}

export default ProductList;
