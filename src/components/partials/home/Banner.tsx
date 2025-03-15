import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r h-[250px] relative from-[#0044ab] to-[#0358cb] text-white p-6 rounded-4xl overflow-hidden flex flex-col items-start">
      <div className="w-[60%] p-4">
        <h2 className="text-4xl font-bold">
          Gia nhập cộng đồng <br /> FMRP – Kết nối, chia <br /> sẻ, cùng phát
          triển!
        </h2>
        <Button title="Tham Gia Ngay"></Button>

      </div>
      <div className="absolute bottom-0 z-10 right-0 w-[350px] h-full bg-opacity-50 rounded-lg">
        <Image
          src="/images/banner.jpg"
          fill
          className="object-cover rounded-lg mix-blend-multiply"
          alt=""
        ></Image>
      </div>
    </div>
  );
}
