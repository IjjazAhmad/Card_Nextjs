import { amazonians, googlers, stockClubs } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

export default function CardSecImg() {
  return (
    <div className="relative w-[233px] lg:w-[442.56px] h-[174px] lg:h-[380px]">
      <Image
        src={amazonians}
        alt="Amazonians"
        className="rotate-2 sm:rotate-12  hover:scale-105 hover:-rotate-6 transition duration-300 ease-in-out"
      />
      <div className=" absolute bottom-0 right-0 rotate-6  ">
        <Image
          src={googlers}
          alt="Googlers"
          className="rotate-6 hover:scale-105 hover:rotate-12 transition duration-300 ease-in-out"
        />
      </div>
      <div className=" absolute bottom-0 sm:bottom-[-80px] right-0">
        <Image
          src={stockClubs}
          alt="Stock Clubs"
          className="-rotate-12 hover:scale-105 hover:rotate-6 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
