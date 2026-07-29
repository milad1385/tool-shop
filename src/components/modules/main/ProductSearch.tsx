import ProductSearchBox from "./ProductSearchBox";

function ProductSearch({ products, setIsOpen }) {
  return (
    <div className="mb-4">
      <div className="text-base text-gray-400 px-3 py-1">محصولات</div>
      {products.map((item) => (
        <ProductSearchBox item={item} setIsOpen={setIsOpen} key={item.id} />
      ))}
    </div>
  );
}

export default ProductSearch;
