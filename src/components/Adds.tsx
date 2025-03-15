import Button from "@/components/ui/Button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Adds() {
  return (
    <div>
      <div className="bg-blue-600 md:max-w-[300px] mt-10 relative flex flex-col gap-5 justify-end h-[500px] text-white rounded-2xl px-6 py-10">
        <div className="absolute right-0 top-10">
          <Image
            src="/images/sidebar.png"
            width={300}
            height={200}
            alt=""
          ></Image>
        </div>
        <div className="flex justify-between items-center gap-5">
          <Image
            src={"/images/robot.png"}
            alt=""
            width={100}
            height={100}
          ></Image>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[15px] font-semibold">Miễn phí dùng thử</h3>
            <Image
              src={"/images/mrp.png"}
              alt=""
              width={80}
              height={80}
            ></Image>
          </div>
        </div>
        <Button title="Trải nghiệm ngay"></Button>
      </div>
      <div className="bg-blue-600 md:max-w-[300px] mt-10 relative flex flex-col gap-5 justify-end h-[600px] text-white rounded-2xl px-6 py-10">
        <div className="absolute right-0 top-10">
          <Image src="/images/img2.png" width={300} height={200} alt=""></Image>
        </div>
        <p className="text-[18px] font-semibold">
          Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
        </p>
        <button className="mt-4 bg-transparent border-2 border-white text-white  font-semibold cursor-pointer px-4 py-2 flex justify-around items-center gap-6 rounded-full shadow">
          Trải nghiệm ngay <MoveUpRight size={16}></MoveUpRight>
        </button>
      </div>
    </div>
  );
}
