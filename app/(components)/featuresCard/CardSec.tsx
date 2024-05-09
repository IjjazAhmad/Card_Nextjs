import React from "react";
import FeathCardText from "../CardText/FeathCardText";
type CardSecProps = {
  text: string;
  textBold: string;
  wrap: string;
  bg: string;
  cardBg: string;
  imageFirst: boolean;
  CardImg: React.FC;
};
export default function CardSec({
  text,
  textBold,
  CardImg,
  wrap,
  bg,
  imageFirst,
  cardBg,
}: CardSecProps) {
  return (
    <div
    className=" max-w-screen flex justify-center items-center h-full  xl:h-[740px] p-4"
    style={{ backgroundImage: `url(${cardBg})` }}
    >
      <div
        className={`sm:h-[600px] sm:max-w-[1452px] w-screen mx-[20px] sm:mx-[30px] p-[15px] sm:p-[30px] my-[30px] sm:my-[70px] bg-white rounded-[25px] flex  ${wrap} lg:flex-nowrap justify-center md:justify-evenly items-center`}
      >
        {!imageFirst ? (
          <>
            <FeathCardText textBold={textBold} text={text} />
            <div>{<CardImg />}</div>
          </>
        ) : (
          <>
            <div>{<CardImg />}</div>
            <FeathCardText textBold={textBold} text={text} />
          </>
        )}
      </div>
    </div>
  );
}
