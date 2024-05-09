import CardSecImg from "@/app/(components)/cardImages/CardSecImg";
import { cardBg2, cardBg3, cardBg4, cardBg5 } from "@/public/assets/images";
import { FeatCardObjProps } from "./types";
import CardThirdImg from "@/app/(components)/cardImages/CardThirdImg";
import CardFourImg from "@/app/(components)/cardImages/CardFourImg";
import CardFiveImg from "@/app/(components)/cardImages/CardFiveImg";

export const FeatCardObj: FeatCardObjProps = [
  {
    imageFirst: false,
    CardImg: CardSecImg,
    cardBg: cardBg2.src,
    wrap: "flex-wrap-reverse",
    textBold: "Connect your brokerage accounts",
    text: "and get access to trading ideas, aggregated stats and discussions in your tech investing community right away.",
  },
  {
    imageFirst: true,
    CardImg: CardThirdImg,
    cardBg: cardBg3.src,
    wrap: "flex-wrap",
    textBold: "Track your net worth automatically",
    text: "and spend less time managing your personal finances. No need to update spreadsheets manually anymore.",
  },
  {
    imageFirst: false,
    CardImg: CardFourImg,
    cardBg: cardBg4.src,
    wrap: "flex-wrap-reverse",
    textBold: "Automate monitoring of your trading",
    text: "accounts 24/7. Control your risks and manage your portfolio like a PRO.",
  },
  {
    imageFirst: true,
    CardImg: CardFiveImg,
    cardBg: cardBg5.src,
    wrap: "flex-wrap",
    textBold: "Receive personalized investor reports",
    text: "and understand how your trading activities contribute to your overall wealth.",
  },
];
