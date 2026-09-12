import EmptyState from "@/components/modules/main/EmptyState";
import Pagination from "@/components/modules/main/Pagination";
import ProductBox from "@/components/modules/main/ProductBox";
import { getProductsByCategory } from "@/services/products.service";

async function Products({ slug, searchParams }) {
  const { page, limit } = await searchParams;

  const { data, pagination } = await getProductsByCategory({
    categorySlug: slug,
    page: +page || 1,
    limit: +limit || 8,
  });

  return data.length > 0 ? (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((product) => (
          <ProductBox {...product} key={product._id} />
        ))}
      </div>
      <Pagination count={pagination.totalPages} />
    </div>
  ) : (
    <EmptyState
      actionText="بازگشت به صفحه اصلی"
      actionLink="/"
      description={`محصولی در این دسته بندی برای نمایش وجود ندارد.`}
    />
  );
}

export default Products;
