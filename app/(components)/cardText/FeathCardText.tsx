import { FeathCardTextProps } from "@/constants/types";
import React from "react";

export default function FeathCardText({ textBold, text }: FeathCardTextProps) {
  return (
    <div>
      <p className="w-auto text-center sm:text-justify  md:w-[522px] h-auto text-textColor font-medium text-[16px] lg:text-[30px]">
        <span className="font-bold text-[20px] lg:text-[33px]">{textBold}</span>{" "}
        {text}
      </p>
    </div>
  );
}
