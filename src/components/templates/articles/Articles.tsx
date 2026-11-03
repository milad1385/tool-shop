import ArticleBox from "@/components/modules/main/ArticleBox";

async function Articles({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((article) => (
        <ArticleBox {...article} key={article._id} />
      ))}
    </div>
  );
}

export default Articles;
