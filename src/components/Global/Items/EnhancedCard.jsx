import { motion } from "framer-motion";

export default function EnhancedCard({
  children,
  className = "",
  hoverEffect = true,
  padding = "p-6",
  shadow = "shadow-lg",
  ...props
}) {
  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3 },
            }
          : {}
      }
      className={`
        bg-white rounded-xl ${shadow} border border-gray-100 
        ${padding} ${className}
        transition-all duration-300 ease-out
        hover:shadow-2xl hover:border-yellow-200
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
