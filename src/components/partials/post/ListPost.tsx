import ArticleCard from "@/components/ArticleCard";
import { POST_DATA } from "@/data/PostData";
import React from "react";

export default function ListPost() {
  const data = POST_DATA.slice(0, 3);
  return (
    <div>
      <h2 className="text-2xl font-bold text-black capitalize mb-5 mt-10">
        Bài viết liên quan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {data.map((post, index) => (
          <ArticleCard key={index} data={post} />
        ))}
      </div>
    </div>
  );
}
