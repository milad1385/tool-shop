import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import FilterSide from "@/components/templates/products/FilterSide";
import Products from "@/components/templates/products/Products";
import { IPage } from "@/libs/types";
import { getAllFilters } from "@/services/products.service";

async function page({ searchParams }: IPage) {
  const filters = await getAllFilters();
  return (
    <Container>
      <Breadcrumb
        links={[
          { name: "خانه", href: "/", id: 1 },
          { id: 2, name: "فروشگاه", href: "/products" },
        ]}
      />

      <div className="grid grid-cols-12 gap-x-5">
        <FilterSide filters={filters} />

        <Products searchParams={searchParams} />
      </div>
    </Container>
  );
}

export default page;
