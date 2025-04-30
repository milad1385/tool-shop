import FavoriteList from "@/components/templates/p-user/FavoriteList";
import Title from "@/components/templates/p-user/Title";
import React from "react";

function page() {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-4">
      <Title content="لیست علاقه مندی ها" />
      <FavoriteList/>
    </div>
  );
}

export default page;
