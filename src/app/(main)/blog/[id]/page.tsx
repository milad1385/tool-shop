import Breadcrumb from "@/components/modules/main/Breadcrumb";
import Container from "@/components/modules/main/Container";
import ArticleCategories from "@/components/templates/articles/ArticleCategories";
import ArticleComments from "@/components/templates/articles/ArticleComments";
import ArticleDeatils from "@/components/templates/articles/ArticleDeatils";
import ArticleTitle from "@/components/templates/articles/ArticleTitle";
import RecentArticles from "@/components/templates/articles/RecentArticles";
import { IPage } from "@/libs/types";
import { Suspense } from "react";

async function page({ params }: IPage) {
  const { id } = await params;
  console.log(id);
  return (
    <Container>
      <Breadcrumb
        links={[
          { id: 1, href: "/", name: "خانه" },
          { id: 2, href: "/blog", name: "مقاله ها" },
          { id: 3, href: "/blog/1", name: "مقاله راجع فلان" },
        ]}
      />
      <Suspense fallback={<div>Loading ...</div>}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-9  bg-white p-6 rounded-3xl leading-8">
            <ArticleTitle />
            <ArticleDeatils />
            <ArticleComments />
          </div>
          <div className="col-span-12 md:col-span-3">
            <RecentArticles />
            <ArticleCategories />
          </div>
        </div>
      </Suspense>
    </Container>
  );
}

export default page;
