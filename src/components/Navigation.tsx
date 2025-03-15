"use client";
import { ChevronDown, X } from "lucide-react";
import { NAVIGATION } from "@/data/navigation";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export default function Navigation({ isOpen, setIsOpen }: Props) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex text-sm capitalize items-center space-x-6">
          {NAVIGATION?.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`flex items-center space-x-2 ${
                  item.current
                    ? "font-bold after:content-[''] after:w-1 after:h-1 after:bg-[#5cecbe] after:block after:absolute after:rounded-full after:-bottom-2 relative after:left-1/2 after:-translate-x-1/2"
                    : ""
                }`}
              >
                {item.name}
                {item.children && <ChevronDown size={14} />}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 z-50 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        <ul className="flex flex-col text-sm capitalize items-start mt-16  px-6">
          {NAVIGATION?.map((item) => (
            <li className="w-full" key={item.id}>
              <a
                href={item.href}
                className="block border-b border-gray-200 py-4 w-full text-black"
                // onClick={handleItemClick}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay khi mở menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/35 z-0 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
