import Breadcrumb from "@/components/modules/Breadcrumb";
import Container from "@/components/modules/Container";
import Pagination from "@/components/modules/Pagination";
import Articles from "@/components/templates/articles/Articles";

function page() {
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/articles", name: "مقاله ها" },
        ]}
      />
      <Articles />
      <Pagination count={3} />
    </Container>
  );
}

export default page;
