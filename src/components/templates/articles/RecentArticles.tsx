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
      <div className="border-r-4 bg-slate-100 border-yellow-400 mb-4 rounded-xl p-4">
        <h3 className="font-Lalezar text-xl text-slate-800 ">
          پربازدیدترین ها
        </h3>
      </div>

      <ul className="space-y-4">
        {recentArticles.map((recentArticle) => (
          <RecentArticleBox key={recentArticle.id} {...recentArticle} />
        ))}
      </ul>
    </div>
  );
}

export default RecentArticles;
