import React from "react";
import FavoriteBox from "./FavoriteBox";

function FavoriteList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <FavoriteBox />
      <FavoriteBox />
      <FavoriteBox />
      <FavoriteBox />
      <FavoriteBox />
      <FavoriteBox />
    </div>
  );
}

export default FavoriteList;
