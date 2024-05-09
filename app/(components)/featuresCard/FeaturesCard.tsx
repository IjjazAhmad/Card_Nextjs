import { Illistration, QR, cardBg1 } from "@/public/assets/images";
import Image from "next/image";
import FeathCardText from "../CardText/FeathCardText";
export default function FeaturesCard() {
  return (
    <>
      <div
        className=" max-w-screen flex justify-center items-center h-[386px] md:h-[500px] xl:h-[680px] p-4"
        style={{ backgroundImage: `url(${cardBg1.src})` }}
      >
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 md:gap-[25px]">
          <div className="w-[150px] md:w-[250px] lg:[450px] xl:w-[443px]">
            <Image src={QR} alt="QR" className="" />
          </div>
          <div className="bg-white w-auto xl:w-[960px]  rounded-[25px] p-5 lg:pt-[52px]  flex justify-center items-center relative">
            <div className="w-[343.03px] h-[440px] hidden xl:block ">
              <Image
                src={Illistration}
                alt="..."
                className="w-[343px] h-[440px] absolute left-[-90px]"
              />
            </div>
            <FeathCardText
              textBold="Sign up today"
              text="and
                manage your portfolio like a pro with personalized assistant and
                access to a trusted tech community of 1,200 members who
                connected $150M+ of total assets."
            />
          </div>
        </div>
      </div>
    </>
  );
}
