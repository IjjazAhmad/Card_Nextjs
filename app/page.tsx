import FeaturesCard from "./(components)/featuresCard/FeaturesCard";
import { FeatCardObj } from "@/constants/featCardObj";
import { CardSecProps } from "@/constants/types";
import CardSec from "./(components)/featuresCard/CardSec";

export default function Home() {
  return (
    <>
      <main>
        <FeaturesCard />
        {FeatCardObj.map((value: CardSecProps, i) => {
          return (
            <CardSec
              key={i}
              imageFirst={value.imageFirst}
              CardImg={value.CardImg}
              cardBg={value.cardBg}
              wrap={value.wrap}
              textBold={value.textBold}
              text={value.text}
            />
          );
        })}
      </main>
    </>
  );
}
