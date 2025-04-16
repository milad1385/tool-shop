import React from "react";

function ArticleComments() {
  return (
    <div>
      <h3 className="font-Lalezar text-2xl">نظرات</h3>
      <p className="text-sm text-zinc-700 mt-1">
        شما با نام میلاد سلامیان وارد شده اید!!
      </p>
      <form action="#">
        <textarea
          id="content"
          name="content"
          placeholder="نظر خود را بنویسید ..."
          className="input h-28  p-2 border border-gray-300 rounded-2xl text-sm w-full mt-5"
        />
        <button className="p-2 text-sm md:text-base md:p-2 rounded-md bg-stone-800 hover:bg-stone-900 text-white w-[90px] my-4">
          ارسال
        </button>
      </form>
    </div>
  );
}

export default ArticleComments;
