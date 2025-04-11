import Breadcrumb from "@/components/modules/Breadcrumb";
import ArticleCategories from "@/components/templates/articles/ArticleCategories";
import ArticleComments from "@/components/templates/articles/ArticleComments";
import ArticleDeatils from "@/components/templates/articles/ArticleDeatils";
import ArticleTitle from "@/components/templates/articles/ArticleTitle";
import RecentArticles from "@/components/templates/articles/RecentArticles";

function page() {
  return (
    <div className="container mt-24 md:mt-48">
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/blog", name: "مقاله ها" },
          { id: 3, href: "/blog/1", name: "مقاله راجع فلان" },
        ]}
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9 bg-white p-4 rounded-3xl leading-8">
          <ArticleTitle />
          <ArticleDeatils />
          <ArticleComments />
        </div>
        <div className="col-span-3">
          <RecentArticles />
          <ArticleCategories/>
        </div>
      </div>
    </div>
  );
}

export default page;
