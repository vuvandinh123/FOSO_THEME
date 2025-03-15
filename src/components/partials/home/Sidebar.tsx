import Adds from "@/components/Adds";
import { Search } from "lucide-react";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="lg:col-span-1 space-y-6">
      {/* Ô tìm kiếm */}
      <h3 className="text-lg font-semibold mb-2">Tìm Kiếm</h3>
      <div className="mt-5">
        <div className="relative">
          <input
            type="text"
            className="w-full shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.16)] rounded-lg p-4 pl-2 outline-none"
            placeholder="Tìm kiếm bài viết"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-lg">
            <Search></Search>
          </button>
        </div>
      </div>

      {/* Danh Mục */}
      <h3 className="text-lg font-semibold mb-2">Danh Mục</h3>
      <div className="mt-6">
        <ul className="space-y-2">
          {[
            { name: "Tất cả", count: 108 },
            { name: "Thiết Kế Website", count: 36 },
            { name: "Quản Lý Sản Xuất", count: 23 },
            { name: "Quản Lý Bán Hàng", count: 22 },
          ].map((item, index) => (
            <li
              key={index}
              className="flex border-b border-gray-200 py-3 justify-between"
            >
              <a href="#" className="hover:!text-[#1AD598] block w-full">
                {item.name}
              </a>
              <span className="text-gray-500">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Banner Quảng Cáo */}
      <Adds></Adds>
    </aside>
  );
}
