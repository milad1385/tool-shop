import ArticleSectionTitle from "./ArticleSectionTitle";
import RecentArticleBox from "./RecentArticleBox";

function RecentArticles() {
  const recentArticles = [
    {
      id: 1,
      title: "جذاب ترین ایده دکوراسیون",
      description: "لورم ایپسوم متن ساختگی",
      image: "blog-1.jpg",
    },
    {
      id: 2,
      title: "جذاب ترین ایده دکوراسیون",
      description: "لورم ایپسوم متن ساختگی",
      image: "blog-1.jpg",
    },
    {
      id: 3,
      title: "جذاب ترین ایده دکوراسیون",
      description: "لورم ایپسوم متن ساختگی",
      image: "blog-1.jpg",
    },
    {
      id: 4,
      title: "جذاب ترین ایده دکوراسیون",
      description: "لورم ایپسوم متن ساختگی",
      image: "blog-1.jpg",
    },
  ];
  return (
    <div className="bg-white p-4 rounded-3xl mb-4 leading-8">
      <ArticleSectionTitle title="پر بازدید ها" />

      <ul className="space-y-4">
        {recentArticles.map((recentArticle) => (
          <RecentArticleBox key={recentArticle.id} {...recentArticle} />
        ))}
      </ul>
    </div>
  );
}

export default RecentArticles;
