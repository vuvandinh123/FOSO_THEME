import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HeaderPost() {
  return (
    <header className="my-6">
      <span className="bg-[#e2effe] w-max p-2 text-[#0e509f] rounded-[8px] text-sm font-semibold">
        Quản Lý Sản Xuất
      </span>
      <h1 className="text-3xl font-bold mt-5">
        Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết
      </h1>
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center space-x-4 text-gray-600 text-sm mt-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/uploads/img6.jpg"
            alt="Tác giả"
            width={40}
            height={40}
            unoptimized={true}
            className="rounded-full object-contain border border-gray-300"
          />
          <div>
            <p className="text-sm text-gray-500">Tác giả</p>
            <p className="font-bold text-md">FOSO Creator</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="border-r flex items-center gap-2 border-gray-300 pr-4">
            <Calendar size={14}></Calendar> Cập nhật vào: 16/03/2025
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14}></Clock> 10 phút đọc
          </span>
        </div>
      </div>
    </header>
  );
}
