import { Breadcrumb } from "@/components/ui";
import Image from "next/image";
import React from "react";

export default function Hero() {
  const breadcrumb = [
    { name: "Trang chủ", url: "/" },
    { name: "Tài nguyên", url: "/" },
    { name: "Blog", url: "/" },
  ];
  return (
    <div className="relative">
      <div className="absolute hidden md:block left-14 top-14">
        <Image
          src="/images/Saly-42.png"
          width={150}
          height={150}
          alt=""
        ></Image>
      </div>
      <Breadcrumb data={breadcrumb} />
      <h1 className="text-5xl text-center mt-10 leading-20">
        Blog <span className="text-gradient font-bold">FOSO</span> - <br /> Cập
        Nhật Tin Tức{" "}
        <span className="relative font-bold after:content-[''] after:bg-[#a3eed6] after:w-full after:h-5 after:block after:absolute after:bottom-1 after:left-0 after:right-0 after:rounded-2xl after:-z-10 after:-rotate-0 ">
          Mới Nhất
        </span>
      </h1>
      <p className="text-center mt-3 text-secondary">
        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
      </p>
      <div className="absolute hidden md:block right-14 top-14">
        <Image
          src="/images/Saly-25.png"
          width={150}
          height={150}
          alt=""
        ></Image>
      </div>
    </div>
  );
}
