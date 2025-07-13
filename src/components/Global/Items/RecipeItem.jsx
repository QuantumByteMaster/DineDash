import StarRating from "@GlobalComponents/StarRating";
import OptimizedImage from "@GlobalComponents/Items/OptimizedImage";
import EnhancedCard from "@GlobalComponents/Items/EnhancedCard";

import { toCurrency, calculatePrice } from "@Utility/transformData";

import { motion } from "framer-motion";

import { listItemVariant } from "../../../utils/animationVariants";

export default function RecipeItem({
  itemWidth,
  recipe,
  showOrderButton = true,
}) {
  return (
    <motion.li
      variants={listItemVariant}
      transition={{
        type: "spring",
      }}
      style={{
        minWidth: `${itemWidth}px`,
        width: `${itemWidth}px`,
      }}
      key={recipe.name}
      className="use-poppins"
    >
      <EnhancedCard
        className="h-full flex flex-col"
        padding="p-4"
        shadow="shadow-md"
      >
        <div className="w-full h-[19rem] bg-white grid place-items-center mb-4">
          <OptimizedImage
            className="w-[95%] h-[95%]"
            src={recipe.image}
            alt={recipe.name}
            fallbackSrc="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <p className="font-bold text-sm mb-2 w-full truncate">
            {recipe.name}
          </p>
          <StarRating rating={recipe.rating}></StarRating>
          <p className="tracking-[0.1rem] text-md my-2 text-yellow-600 font-semibold">
            {toCurrency(calculatePrice(recipe))}
          </p>
          {showOrderButton && (
            <button className="py-2 px-4 font-bold use-poppins border-2 border-yellow-500 rounded-full self-start hover:bg-yellow-500 hover:text-white transition-all mt-auto">
              Order Now
            </button>
          )}
        </div>
      </EnhancedCard>
    </motion.li>
  );
}
