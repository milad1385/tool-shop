import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import Products from "@/components/templates/category/Products";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "صفحه اصلی" },
          { id: 2, href: "/products", name: "محصولات" },
          { id: 3, href: "/category/1", name: "دسته بندی تستی" },
        ]}
      />

      <Products />
    </Container>
  );
}

export default page;
