import { useState, useEffect } from "react";

import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import Recipes from "./Recipes";
import SkeletonLoader from "@GlobalComponents/Items/SkeletonLoader";

import { RightArrowIcon } from "@Icons/Icons";

export default function PreviewRecipesSection() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async (limit, skip) => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setRecipes(data.recipes);
        console.log(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes(0, 20);
  }, []);

  return (
    <div className="w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl py-8 md:py-16 flex flex-col px-2 sm:px-4">
      <section className="w-full xl:h-48 flex justify-between flex-col xl:flex-row">
        <div className="w-full xl:w-[60%] text-center xl:text-start">
          <TitleText extraClasses="text-[2rem] lg:text-[3rem]">
            Handpicked Culinary <br /> <SpecialText>Masterpieces</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1rem] lg:text-[1.rem]">
            Discover our handpicked culinary masterpieces, each meticulously
            crafted to perfection. These dishes represent the pinnacle of our
            culinary expertise.
          </ParagraphText>
        </div>
        <div className="w-full xl:w-[40%] flex justify-center xl:justify-end items-end">
          <YellowButton
            width="[15rem]"
            text="View More"
            icon={<RightArrowIcon width="2em" height="2em" />}
          />
        </div>
      </section>
      {loading ? (
        <SkeletonLoader type="section" count={1} />
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-colors"
          >
            Retry
          </button>
        </div>
      ) : (
        <Recipes recipes={recipes} />
      )}
    </div>
  );
}
