import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useDebouncedCallback } from "use-debounce";
import ArticleSearch from "./ArticleSearch";
import ProductSearch from "./ProductSearch";
import { SearchItem } from "@/libs/types";

const mockArticles: SearchItem[] = [
  {
    id: "a1",
    title: "راهنمای خرید لپ‌تاپ",
    type: "article",
    image: "/images/product-3.jpg",
    slug: "laptop-buying-guide",
    excerpt: "همه چیز درباره خرید لپ‌تاپ مناسب",
  },
  {
    id: "a2",
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
  const [productResults, setProductResults] = useState<SearchItem[]>([]);
  const [articleResults, setArticleResults] = useState<SearchItem[]>([]);
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

  useEffect(() => {
    setIsOpen(false);
    setSearch("");
  }, [pathname]);

  const handleSearch = useDebouncedCallback(async (value: string) => {
    const trimmedValue = value.trim();

    const params = new URLSearchParams(searchParams);
    if (trimmedValue) {
      params.set("q", trimmedValue);
    } else {
      params.delete("q");
    }
    router.push(`${pathname}?${params}`, { scroll: false });

    if (!trimmedValue) {
      setProductResults([]);
      setArticleResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);

    const filteredArticles = mockArticles.filter((item) =>
      item.title.toLowerCase().includes(trimmedValue.toLowerCase())
    );
    setArticleResults(filteredArticles);

    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(trimmedValue)}`
      );
      const json = await res.json();

      if (json.success) {
        const mappedProducts: SearchItem[] = json.data.map((p: any) => ({
          id: p._id,
          title: p.name,
          type: "product",
          image: p.images?.[0] ?? "/images/placeholder.jpg",
          price: p.sellers?.[0]?.price ?? 0,
          slug: p.slug,
        }));

        setProductResults(mappedProducts);
      } else {
        setProductResults([]);
      }
    } catch (err) {
      setProductResults([]);
    } finally {
      setIsLoading(false);
      setIsOpen(true);
    }
  }, 300);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search?q=${encodeURIComponent(search.trim())}`);
    setIsOpen(false);
  };

  const renderResults = () => {
    if (isLoading) {
      return (
        <div className="p-4 text-center text-gray-500">در حال جستجو...</div>
      );
    }

    const totalResults = productResults.length + articleResults.length;

    if (totalResults === 0 && search.trim()) {
      return (
        <div className="p-4 text-center text-gray-500">نتیجه‌ای یافت نشد</div>
      );
    }

    return (
      <div className="p-2">
        {productResults.length > 0 && (
          <ProductSearch
            products={productResults}
            setIsOpen={setIsOpen}
            onSearch={setSearch}
          />
        )}
        {articleResults.length > 0 && (
          <ArticleSearch
            articles={articleResults}
            setIsOpen={setIsOpen}
            onSearch={setSearch}
          />
        )}
      </div>
    );
  };

  const totalResults = productResults.length + articleResults.length;

  return (
    <div ref={searchRef} className="relative w-[65%] hidden md:block">
      <form
        onSubmit={handleSubmit}
        className="h-[48px] border border-gray-300 rounded-md overflow-hidden flex items-center bg-white"
      >
        <input
          ref={inputRef}
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            handleSearch(value);
            if (!value.trim()) setIsOpen(false);
          }}
          onFocus={() => {
            if (search.trim() && totalResults > 0) setIsOpen(true);
          }}
          type="text"
          placeholder="جستجو کنید در ترازو ..."
          className="outline-none h-full w-full px-4 text-right"
        />
        <button
          type="submit"
          className="bg-gray-100 hover:bg-gray-200 transition-all h-full px-4 flex-shrink-0"
        >
          <HiOutlineMagnifyingGlass className="text-[24px]" />
        </button>
      </form>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-50">
          {renderResults()}
          {totalResults > 0 && (
            <div className="border-t border-gray-100 p-2">
              <Link
                href={`/search?q=${encodeURIComponent(search)}`}
                onClick={() => setIsOpen(false)}
                className="block text-center text-sm text-yellow-600 py-1"
              >
                مشاهده همه نتایج ({totalResults})
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;