import { people } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

export default function PeopleImg() {
  return (
    <>
      <div className="relative h-[50.74px] md:h-[92.74px]  lg:h-[122.74px] xl:h-[175.74px] 2xl:h-[251.74px] flex flex-col justify-center items-center">
        <div className=" max-w-[1512px] absolute bottom-[-50%] 2xl:bottom-[-35%]">
          <Image src={people} alt="..." className="" />
        </div>
      </div>
      <div className="bg-skyBlue w-screen min-h-[110.26px]"></div>
    </>
  );
}
