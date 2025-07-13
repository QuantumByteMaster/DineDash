import { motion } from "framer-motion";

export default function SpacingContainer({
  children,
  className = "",
  padding = "py-16",
  margin = "my-8",
  maxWidth = "max-w-7xl",
  center = true,
  animate = true,
  ...props
}) {
  const containerClasses = `
    ${maxWidth} ${padding} ${margin} ${className}
    ${center ? "mx-auto" : ""}
    px-4 sm:px-6 lg:px-8
  `;

  const MotionWrapper = animate ? motion.div : "div";
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <MotionWrapper className={containerClasses} {...motionProps} {...props}>
      {children}
    </MotionWrapper>
  );
}
