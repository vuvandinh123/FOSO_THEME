"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: Props) {
  const pagesToShow = 2; // Số trang hiển thị trước và sau trang hiện tại
  const range = [];
  for (
    let i = Math.max(1, currentPage - pagesToShow);
    i <= Math.min(totalPages, currentPage + pagesToShow);
    i++
  ) {
    range.push(i);
  }
  const lastPages =
    totalPages > 3 ? [totalPages - 2, totalPages - 1, totalPages] : [];
  return (
    <div className="flex items-center justify-between space-x-2 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-gray-500 disabled:text-gray-300 flex items-center space-x-1"
      >
        <ArrowLeft size={16} />
        <span className="md:block hidden">Trang trước</span>
      </button>
      <div className="flex items-center justify-center space-x-2">
        {currentPage > pagesToShow + 1 && (
          <span className="text-gray-500">...</span>
        )}

        {range.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex cursor-pointer items-center justify-center border rounded-md text-sm font-bold ${
              page === currentPage
                ? "border-[#d1f7eb]  bg-[#97ffde] text-black"
                : "border-transparent text-gray-500"
            }`}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages - pagesToShow - 1 && (
          <>
            <span className="text-gray-500">...</span>
            {lastPages.map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`w-8 h-8 flex cursor-pointer items-center justify-center border rounded-md text-sm font-bold ${
                  page === currentPage
                    ? "border-[#d1f7eb] bg-[#97ffde] text-black"
                    : "border-transparent text-gray-500"
                }`}
              >
                {page}
              </button>
            ))}
          </>
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 cursor-pointer hover:text-black text-gray-500 disabled:text-gray-300 flex items-center space-x-1"
      >
        <span className="md:block hidden">Trang kế tiếp</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
