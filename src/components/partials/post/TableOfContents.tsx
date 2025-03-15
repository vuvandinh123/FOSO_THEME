"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MENU_BLOG } from "@/data/NavBlog";

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <aside className="p-4 rounded-lg  w-full max-w-lg">
      <div
        className="flex justify-between mb-3 border-b border-gray-100 pb-4 items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold">📌 Nội Dung Bài Viết</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      <div
        className={`transition-all duration-100 overflow-hidden ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <ul className="text-gray-700 space-y-2 mt-2">
          {MENU_BLOG.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                item.isBold ? "text-green-600  font-semibold" : ""
              }`}
            >
              {index + 1}. {item.title}
              {item.children && (
                <ul className="pl-6 leading-9 text-gray-600">
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      {index + 1}.{subIndex + 1} {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
