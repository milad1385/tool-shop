import SearchArticleSlider from "./SearchArticleSlider";
import SearchProductSlider from "./SearchProductSlider";

function SearchDetails({ data }) {
  return (
    <div className="my-5">
      <SearchProductSlider data={data.products} />
      <SearchArticleSlider />
    </div>
  );
}

export default SearchDetails;
