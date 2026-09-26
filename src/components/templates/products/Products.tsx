import Pagination from "@/components/modules/main/Pagination";
import PaginationFallback from "@/components/modules/main/PaginationFallback";
import ProductBox from "@/components/modules/main/ProductBox";
import { getProductsWithFilter } from "@/services/products.service";
import { Suspense } from "react";
import MobileFilter from "./MobileFilter";
import MobileSearch from "./MobileSearch";
import SortProduct from "./SortProduct";
import EmptyState from "@/components/modules/main/EmptyState";

async function Products({ searchParams }) {
  const { page, category, min, max, brand, q } = await searchParams;

  const { data, pagination } = await getProductsWithFilter({
    page: +page,
    categorySlugs: category,
    brandSlugs: brand,
    search: q,
    min: min,
    max: max,
  });

  return (
    <div className="col-span-12 md:col-span-9">
      <MobileSearch />
      <MobileFilter />
      <SortProduct />
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((product) => (
            <ProductBox {...product} key={product._id} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="محصولی یافت نشد"
          description="با این فیلتر محصولی یافت نشد"
        />
      )}
      <Suspense fallback={<PaginationFallback />}>
        <div className="w-full">
          <Pagination count={pagination.totalPages} />
        </div>
      </Suspense>
    </div>
  );
}

export default Products;
