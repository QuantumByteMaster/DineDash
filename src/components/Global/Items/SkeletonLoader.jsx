import { motion } from "framer-motion";

export default function SkeletonLoader({ type = "recipe", count = 1 }) {
  const RecipeSkeleton = () => (
    <div className="w-full animate-pulse">
      <div className="w-full h-[19rem] bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="w-4 h-4 bg-gray-300 rounded"></div>
        ))}
      </div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-8 bg-gray-300 rounded w-24"></div>
    </div>
  );

  const SectionSkeleton = () => (
    <div className="w-full animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <RecipeSkeleton key={item} />
        ))}
      </div>
    </div>
  );

  const HeroSkeleton = () => (
    <div className="w-full animate-pulse">
      <div className="h-96 bg-gray-300 rounded-lg mb-8"></div>
      <div className="h-12 bg-gray-300 rounded w-2/3 mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
    </div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case "recipe":
        return <RecipeSkeleton />;
      case "section":
        return <SectionSkeleton />;
      case "hero":
        return <HeroSkeleton />;
      default:
        return <RecipeSkeleton />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="mb-4">
          {renderSkeleton()}
        </div>
      ))}
    </motion.div>
  );
}
