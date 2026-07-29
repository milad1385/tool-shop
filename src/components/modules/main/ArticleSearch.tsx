import ArticleSearchBox from "./ArticleSearchBox";

function ArticleSearch({ articles, setIsOpen }) {
  return (
    <div>
      <div className="text-base text-gray-400 px-3 py-1">مقالات</div>
      {articles.map((item) => (
        <ArticleSearchBox item={item} setIsOpen={setIsOpen} key={item.id} />
      ))}
    </div>
  );
}

export default ArticleSearch;
