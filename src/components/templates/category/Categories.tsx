import { getAllCategories } from "@/services/categories.service";
import CategoriesSlider from "../Home/CategoriesSlider";
import NewestProduct from "../Home/NewestProduct";
import SuggestedProduct from "../Home/SuggestedProduct";

async function Categories() {
  const categories = await getAllCategories();
  return (
    <div>
      <CategoriesSlider categories={categories} />
      <div className="bg-yellow-500 px-8 py-1 md:py-2 rounded-3xl mt-10 mb-16">
        <NewestProduct />
      </div>

      <div className="bg-yellow-500 px-8 py-1 md:py-2 rounded-3xl">
        <SuggestedProduct />
      </div>
    </div>
  );
}

export default Categories;
