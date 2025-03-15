import { MoveUpRight } from "lucide-react";
import React from "react";
type ButtonProps = {
  title: string;
  className?: string;
};
export default function Button({ title, className }: ButtonProps) {
  return (
    <button
      className={`mt-4 bg-transparent border-2 border-white text-white  font-semibold cursor-pointer px-4 py-2 flex justify-around items-center gap-6 rounded-full shadow ${className}`}
    >
      {title} <MoveUpRight size={16}></MoveUpRight>
    </button>
  );
}
