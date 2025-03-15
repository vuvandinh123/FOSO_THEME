"use client";
import { ArticleCard } from "@/components";
import { Pagination } from "@/components/ui";
import { POST_DATA } from "@/data/PostData";
import React from "react";

export default function ListPosts() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {POST_DATA.map((post, index) => (
          <ArticleCard key={index} data={post} />
        ))}
       
      </div>
      <Pagination
        totalPages={20}
        currentPage={1}
        onPageChange={(page) => console.log("Chuyển đến trang:", page)}
      />
    </div>
  );
}
