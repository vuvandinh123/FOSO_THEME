import { PostType } from "@/types/PostType";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  data: PostType;
};
export default function ArticleCard({ data }: ArticleCardProps) {
  return (
    <div className="rounded-xl hover:shadow-md transition-all cursor-pointer overflow-hidden">
      <Link href={data?.link ?? "#"}>
        <Image
          src={data?.image ?? "/uploads/img6.jpg"}
          width={300}
          height={200}
          alt="BOM LÀ GÌ?"
          className="w-full"
          unoptimized={true}
        />
      </Link>

      <div className="flex p-3 flex-col gap-2 pt-5">
        <span className="bg-[#e2effe] w-max px-3 py-1 text-[#0e509f] rounded-[8px] text-sm font-semibold">
          {data?.category ?? "N/A"}
        </span>
        <h3 className="text-lg font-bold ">
          <Link href={data?.link ?? "#"}>{data?.title ?? "N/A"}</Link>
        </h3>
        <p className="text-gray-500 text-sm flex gap-2 items-center">
          <span className="flex items-center gap-2 border-r border-gray-300 pr-4">
            <Calendar size={14}></Calendar> {data?.date ?? "N/A"}{" "}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14}></Clock> {data?.readingTime ?? "N/A"}
          </span>
        </p>
        <Link
          href={data?.link ?? "#"}
          className="text-gray-300 flex items-center gap-3 text-md mt-4 hover:underline"
        >
          Khám phá thêm <ArrowRight></ArrowRight>
        </Link>
      </div>
    </div>
  );
}
