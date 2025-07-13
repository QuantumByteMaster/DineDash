import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import { RightArrowIcon } from "@Icons/Icons";
import TagList from "./TagList";
import HandImage from "./HandImage";

export default function LanderSection() {
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-transparent text-black">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full max-w-[95vw] mx-auto pt-32 lg:pt-40 px-4 relative">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 text-black">
          <TitleText extraClasses="text-[2.5rem] lg:text-[4rem] mb-2 lg:mb-6">
            Your Go-To Spot for <br /> Quick and{" "}
            <SpecialText>Tasty Eats!</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1.1rem] lg:text-[1.3rem] max-w-xl mb-4">
            Welcome to DineDash, where every bite is a journey to culinary
            heaven, and every meal is an unforgettable experience of gourmet
            bliss!
          </ParagraphText>
          <div className="mt-2 lg:mt-6">
            <YellowButton
              width="[15rem]"
              text="Order Now"
              icon={<RightArrowIcon width="2em" height="2em" />}
            />
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-end w-full h-full relative mt-8 lg:mt-0 text-black">
          <HandImage />
        </div>
      </div>
      <div className="w-full mt-8">
        <TagList />
      </div>
    </div>
  );
}
