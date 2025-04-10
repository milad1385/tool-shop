import Breadcrumb from "@/components/modules/Breadcrumb";
import Pagination from "@/components/modules/Pagination";
import Articles from "@/components/templates/articles/Articles";


function page() {
  return (
    <div className="container mt-24 md:mt-48">
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/articles", name: "مقاله ها" },
        ]}
      />
      <Articles />
      <Pagination count={3}/>
    </div>
  );
}

export default page;
