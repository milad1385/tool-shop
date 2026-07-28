import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useDebouncedCallback } from "use-debounce";
import ProductSearch from "./ProductSearch";
import ArticleSearch from "./ArticleSearch";

type SearchItem = {
  id: string;
  title: string;
  type: "product" | "article" | "category";
  image?: string;
  price?: number;
  slug: string;
  excerpt?: string;
};

const mockSearchData: SearchItem[] = [
  {
    id: "1",
    title: "لپ‌تاپ ایسوس ROG Zephyrus",
    type: "product",
    image: "/images/product-1.jpg",
    price: 45000000,
    slug: "asus-rog-zephyrus",
  },
  {
    id: "2",
    title: "گوشی شیائومی ۱۳ پرو",
    type: "product",
    image: "/images/product-2.jpg",
    price: 38000000,
    slug: "xiaomi-13-pro",
  },
  {
    id: "3",
    title: "راهنمای خرید لپ‌تاپ",
    type: "article",
    image: "/images/product-3.jpg",
    slug: "laptop-buying-guide",
    excerpt: "همه چیز درباره خرید لپ‌تاپ مناسب",
  },
  {
    id: "4",
    title: "مقایسه آیفون و اندروید",
    type: "article",
    image: "/images/product-4.jpg",
    slug: "iphone-vs-android",
    excerpt: "کدام گوشی برای شما مناسب‌تر است؟",
  },
];

function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [search, setSearch] = useState(query);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = useDebouncedCallback((value: string) => {
    const trimmedValue = value.trim();

    const params = new URLSearchParams(searchParams);
    if (trimmedValue) {
      params.set("q", trimmedValue);
    } else {
      params.delete("q");
    }
    router.push(`${pathname}?${params}`, { scroll: false });

    if (trimmedValue) {
      setIsLoading(true);

      setTimeout(() => {
        const filtered = mockSearchData.filter((item) =>
          item.title.toLowerCase().includes(trimmedValue.toLowerCase()),
        );
        setResults(filtered);
        setIsLoading(false);
        setIsOpen(true);
      }, 300);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, 300);

  const renderResults = () => {
    if (isLoading) {
      return (
        <div className="p-4 text-center text-gray-500">در حال جستجو...</div>
      );
    }

    if (results.length === 0 && search.trim()) {
      return (
        <div className="p-4 text-center text-gray-500">نتیجه‌ای یافت نشد</div>
      );
    }

    const products = results.filter((item) => item.type === "product");
    const articles = results.filter((item) => item.type === "article");

    return (
      <div className="p-2">
        {/* محصولات */}
        {products.length > 0 && (
          <ProductSearch products={products} setIsOpen={setSearch} />
        )}

        {/* مقالات */}
        {articles.length > 0 && (
          <ArticleSearch articles={articles} setIsOpen={setIsOpen} />
        )}
      </div>
    );
  };

  return (
    <div ref={searchRef} className="relative w-[65%] hidden md:block">
      <div className="h-[48px] border border-gray-300 rounded-md overflow-hidden flex items-center bg-white">
        <input
          ref={inputRef}
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            handleSearch(value);
            if (!value.trim()) {
              setIsOpen(false);
            }
          }}
          onFocus={() => {
            if (search.trim() && results.length > 0) {
              setIsOpen(true);
            }
          }}
          type="text"
          placeholder="جستجو کنید در ترازو ..."
          className="outline-none h-full w-full px-4 text-right"
        />
        <button className="bg-gray-100 hover:bg-gray-200 transition-all h-full px-4 flex-shrink-0">
          <HiOutlineMagnifyingGlass className="text-[24px]" />
        </button>
      </div>

      {/* باکس نتایج */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50">
          {renderResults()}

          {/* دکمه مشاهده همه نتایج */}
          {results.length > 0 && (
            <div className="border-t border-gray-100 p-2">
              <Link
                href={`/search?q=${encodeURIComponent(search)}`}
                onClick={() => setIsOpen(false)}
                className="block text-center text-sm text-yellow-600 hover:text-yellow-800 py-1"
              >
                مشاهده همه نتایج ({results.length})
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
