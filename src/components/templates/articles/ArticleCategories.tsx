import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import ArticleSectionTitle from "./ArticleSectionTitle";

function ArticleCategories({ category }) {
  return (
    <div className="bg-white p-4 rounded-3xl mb-4 leading-8">
      <ArticleSectionTitle title="دسته بندی" />
      <div className="flex-center flex-col">
        <Image
          src={category.image}
          alt={category.name}
          width={1920}
          height={1080}
          className="w-24"
        />
        <Link
          href={`/blog/category/${category.href}`}
          className="font-bold my-2.5"
        >
          {category.name}
        </Link>

        <Link
          href={`/blog/category/${category.href} `}
          className="block w-full"
        >
          <Button>مشاهده سایر مقالات دسته بندی</Button>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCategories;
