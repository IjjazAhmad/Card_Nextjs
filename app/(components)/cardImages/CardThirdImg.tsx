import {
  arotfolioBroker,
  protfolioAccountType,
  protfolioAccounts,
} from "@/public/assets/images";
import Image from "next/image";
import React from "react";

export default function CardThirdImg() {
  return (
    <div>
      <div className="relative h-[174px] md:h-[400px] lg:h-[350px] xl:h-[425px]">
        <Image
          src={arotfolioBroker}
          alt="Amazonians"
          className="-rotate-2 lg:rotate-2 over:rotate-3 hover:scale-105 hover:rotate-6 transition duration-300 ease-in-out"
        />
        <div className=" absolute bottom-[10px] md:bottom-[15px] right-0 -rotate-3 hover:scale-105 hover:rotate-3 hover:h-[400px] transition duration-300 ease-in-out">
          <Image src={protfolioAccounts} alt="Googlers" className="rotate-6" />
        </div>
        <div className=" absolute bottom-[-10px] sm:bottom-[-50px] right-0 hover:scale-105 hover:rotate-3 transition duration-300 ease-in-out">
          <Image
            src={protfolioAccountType}
            alt="Stock Clubs"
            className="rotate-6"
          />
        </div>
      </div>
    </div>
  );
}
