import { IR1, IR2, IR3 } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

export default function CardFiveImg() {
  return (
    <div className="w-[218px]  sm:w-[230.27px] md:w-[300.27px] lg:w-[300px] xl:w-[405.54px] h-[233.39px] md:h-[363.39px] lg:h-[430px] xl:h-[630px]  bg-whitedark rounded-[25px] py-[10px] lg:py-[40px] mr-0 lg:mr-9">
      <p className="text-black text-center font-bold text-[10px] md:text-[15px] lg:text-[18px] xl:text-[30px] mb-8 ">
        Introducing Guardian Angel 😇
      </p>
      <div className="relative w-[245.5px] md:w-[348.78px] xl:w-[500.27px] h-[162.13px]   md:h-[242.13px] ">
        <Image
          src={IR3}
          alt="Amazonians"
          className="absolute right-0 bottom-0 xl:top-[-30px] w-[140.65px]  sm:w-[203.65px] xl:w-[300.93px]  hover:rotate-6 hover:scale-125 transition duration-300 ease-in-out"
        />
        <div className=" absolute bottom-0 md:top-[-10px] lg:top-[20px] xl:top-5  right-[20%] w-[140.65px]  sm:w-[203.65px] xl:w-[280.93px] ">
          <Image
            src={IR2}
            alt="Googlers"
            className="  hover:rotate-6 hover:scale-125 transition duration-300 ease-in-out"
          />
        </div>
        <div className=" absolute  left-0  md:left-[-40px] lg:left-[-40px] bottom-0 md:top-0 xl:bottom-[-70px] w-[150.65px]  sm:w-[223.65px] xl:w-[300.93px]">
          <Image
            src={IR1}
            alt="Stock Clubs"
            className=" rotate-12 xl:rotate-0  hover:rotate-6  hover:scale-125 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
