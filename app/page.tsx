import { cardBg2, cardBg3, cardBg4, cardBg5 } from "@/public/assets/images";
import CardFiveImg from "./(components)/cardImages/CardFiveImg";
import CardFourImg from "./(components)/cardImages/CardFourImg";
import CardSecImg from "./(components)/cardImages/CardSecImg";
import CardThirdImg from "./(components)/cardImages/CardThirdImg";
import CardSec from "./(components)/featuresCard/CardSec";
import FeaturesCard from "./(components)/featuresCard/FeaturesCard";

export default function Home() {
  return (
    <>
      <main className="">
        <FeaturesCard />
        <CardSec
          imageFirst={false}
          CardImg={CardSecImg}
          cardBg={cardBg2.src}
          wrap="flex-wrap-reverse"
          bg="bg-blueBg"
          textBold="Connect your brokerage accounts"
          text="and get access to trading ideas, aggregated stats and discussions in your tech investing community right away."
        />
        <CardSec
          imageFirst={true}
          CardImg={CardThirdImg}
          cardBg={cardBg3.src}
          wrap="flex-wrap"
          bg="bg-greenBg"
          textBold="Track your net worth automatically"
          text="and spend less time managing your personal finances. No need to update spreadsheets manually anymore."
        />
        <CardSec
          imageFirst={false}
          CardImg={CardFourImg}
          cardBg={cardBg4.src}
          wrap="flex-wrap-reverse"
          bg="bg-yellowBg"
          textBold="Automate monitoring of your trading"
          text="accounts 24/7. Control your risks and manage your portfolio like a PRO."
        />
        <CardSec
          imageFirst={true}
          CardImg={CardFiveImg}
          cardBg={cardBg5.src}
          wrap="flex-wrap"
          bg="bg-yellowBg"
          textBold="Receive personalized investor reports"
          text="and understand how your trading activities contribute to your overall wealth."
        />
      </main>
    </>
  );
}
