"use client";
import { useState } from "react";

const languages = [
  { code: "vi", name: "Vietnamese", flag: "🇻🇳" },
  { code: "en", name: "English", flag: "🇦🇺" },
];

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      {/* Nút chọn ngôn ngữ */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-[100px] items-center space-x-2 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
      >
        <span className="text-lg">{selectedLang.flag}</span>
        <span className="font-medium">{selectedLang.code.toUpperCase()}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-max bg-white border border-gray-300 rounded-lg shadow-md">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 w-full hover:bg-gray-100"
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="ml-2">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
