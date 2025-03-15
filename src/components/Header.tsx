"use client";
import { Container, LanguageSelector, Navigation } from "@/components";
import { ArrowUpRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Container>
      <header className="bg-white z-50 fixed top-2 md:top-5 py-4 w-full max-w-7xl mx-auto px-4 rounded-full shadow-md">
        <div className="flex items-center justify-around w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={"/logo/FOSO_LOGO.jpg"}
                width={300}
                height={100}
                alt={"logo"}
                className="w-32 h-auto"
              />
            </Link>
          </div>

          <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button className="md:flex cursor-pointer hidden gap-3 items-center text-sm font-bold text-black bg-[#1AD598] px-4 py-2 rounded-full">
              Trở thành khách hàng
              <span className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-black">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>

          {/* Menu icon cho mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>
    </Container>
  );
}
