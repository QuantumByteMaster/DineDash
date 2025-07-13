import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";
import UnderlinedButton from "@GlobalComponents/Buttons/UnderlinedButton";

import { RightArrowIcon } from "@Icons/Icons";

import JumpAndFadeIn from "@Animations/JumpAndFadeIn";
import Increase from "../../../Animations/Increase";

export default function FavoriteSection() {
  return (
    <div className="w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl flex flex-row items-stretch py-8 md:py-16 justify-center gap-4 md:gap-10 px-1 sm:px-4 min-h-[350px]">
      {/* Images on the left (always side by side) */}
      <div className="flex flex-col gap-4 md:gap-8 w-1/2 min-w-0 items-center justify-center">
        <JumpAndFadeIn className="w-full max-w-xs md:max-w-sm shadow-xl rounded-xl overflow-hidden mx-auto">
          <img
            className="w-full h-40 md:h-64 object-cover rounded-xl"
            src="https://img.freepik.com/premium-photo/burger-with-flying-ingredients-black-background-fast-food-concept_843762-1629.jpg?w=826"
            alt="Burger"
            loading="lazy"
            width="320"
            height="256"
          />
        </JumpAndFadeIn>
        <JumpAndFadeIn className="w-32 h-32 md:w-48 md:h-48 rounded-xl border-[0.4rem] border-[#fff5e9] shadow-xl overflow-hidden mx-auto">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg"
            alt="Pancakes"
            loading="lazy"
            width="192"
            height="192"
          />
        </JumpAndFadeIn>
      </div>
      {/* Text on the right */}
      <div className="flex flex-col gap-2 py-4 md:py-8 w-1/2 min-w-0 z-50 text-center md:text-start px-4 md:px-8 bg-[#fde7cb] rounded-xl shadow-md justify-center">
        <TitleText extraClasses="text-[1.2rem] md:text-[2rem]">
          Captivating Culinary Favourites
        </TitleText>
        <ParagraphText extraClasses="text-[0.95rem] md:text-[1.2rem]">
          Welcome to a culinary paradise, where every bite is an unforgettable
          journey. Discover captivating favourites, crafted with fresh
          ingredients and innovative flavours. Each dish is a feast for the eyes
          and palate, making every moment truly divine.
        </ParagraphText>
        <div className="flex flex-col md:flex-row gap-3 items-center mt-4 md:mt-8 justify-center md:justify-start">
          <YellowButton
            width="15"
            text="Order Now"
            icon={<RightArrowIcon width="2em" height="2em" />}
          />
          <UnderlinedButton text="Check your favourites" color="green" />
        </div>
      </div>
    </div>
  );
}
