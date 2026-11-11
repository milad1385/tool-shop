import React from "react";
import ArticleCommentsList from "./ArticleCommentsList";
import { auth } from "@/auth";
import Link from "next/link";
import SendCommentForm from "./SendCommentForm";

async function ArticleComments({ link }: { link: string }) {
  const session = await auth();

  return (
    <div>
      {session?.user ? (
        <>
          <p className="text-sm text-zinc-700 mt-1 mb-4">
            شما با نام {session.user.name} وارد شده اید!!
          </p>
          <SendCommentForm link={link} />
        </>
      ) : (
        <div className="bg-black/20 text-black text-sm md:text-base flex-center flex-col space-y-4 rounded-md py-8 my-8">
          <p>برای ثبت کامنت ابتدا وارد شوید </p>

          <Link
            href={`/auth/login?redirectTo=/blog/${link}`}
            className="bg-black text-white px-4 py-2.5 rounded-md"
          >
            برای ورود اینجا کلیک کنید{" "}
          </Link>
        </div>
      )}

      <div className="mt-10">
        <ArticleCommentsList link={link} />
      </div>
    </div>
  );
}

export default ArticleComments;
