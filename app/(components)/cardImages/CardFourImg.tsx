import { Input, Milestone, Stock, Trading } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

export default function CardFourImg() {
  return (
    <div className="w-[217px] sm:w-[270.27px] md:w-[270.27px] lg:sm-[300] xl:w-[470.27px]  flex flex-col justify-center items-center gap-[5px]  sm:gap-[7px]  bg-whitedark rounded-[25px] py-[10px] lg:py-[40px]">
      <p className="text-black font-bold text-[14px] md:text-[15px] lg:text-[18px] xl:text-[30px] px-1 py-5">
        Introducing Guardian Angel 😇
      </p>
      <Image
        src={Milestone}
        alt="..."
        className="  w-[233px] sm:w-[280.27px] md:w-[350.27px] lg:w-[504.27px] h-[57px] sm:h-[67px] md:h-[70px] lg:h-[80.27px] xl:h-[124.27px] hover:scale-105 transition duration-300 ease-in-out"
      />
      <Image
        src={Trading}
        alt="..."
        className="  w-[233px] sm:w-[280.27px] md:w-[350.27px] lg:w-[504.27px] h-[57px] sm:h-[67px] md:h-[70px] lg:h-[80.27px] xl:h-[124.27px] hover:scale-105 transition duration-300 ease-in-out"
      />
      <Image
        src={Stock}
        alt="..."
        className="  w-[233px] sm:w-[280.27px] md:w-[350.27px] lg:w-[504.27px] h-[57px] sm:h-[67px] md:h-[70px] lg:h-[80.27px] xl:h-[124.27px] hover:scale-105 transition duration-300 ease-in-out"
      />
      <Image
        src={Input}
        alt="..."
        className="w-[210px] sm:w-[260.27px] md:w-[320.27px] xl:w-[504.27px] h-[43px] sm:h-[50px] md:h-[55px] xl:h-[95.27px] mb"
      />
    </div>
  );
}
