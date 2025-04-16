import ArticleBox from "@/components/modules/ArticleBox";

function Articles() {
  const articles = [
    { id: 1, title: "راهنمای خرید انواع مته", link: "", image: "blog-1.jpg" },
    { id: 2, title: "تعمیر قلاب ماهیگیری", link: "", image: "blog-2.jpg" },
    { id: 3, title: "تمیز کردن لوازم کارگاهی", link: "", image: "blog-3.jpg" },
    { id: 4, title: "راهنمای خرید انواع مته", link: "", image: "blog-1.jpg" },
    { id: 5, title: "تعمیر قلاب ماهیگیری", link: "", image: "blog-2.jpg" },
    { id: 6, title: "راهنمای خرید انواع مته", link: "", image: "blog-1.jpg" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleBox {...article} key={article.id} />
      ))}
    </div>
  );
}

export default Articles;
