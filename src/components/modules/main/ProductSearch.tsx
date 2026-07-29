import ProductSearchBox from "./ProductSearchBox";

function ProductSearch({ products, setIsOpen, onSearch }) {
  return (
    <div className="mb-4">
      <div className="text-base text-gray-400 px-3 py-1">محصولات</div>
      {products.map((item) => (
        <ProductSearchBox
          item={item}
          setIsOpen={setIsOpen}
          onSearch={onSearch}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default ProductSearch;
