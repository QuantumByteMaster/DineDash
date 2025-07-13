import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function OptimizedImage({
  src,
  alt,
  className = "",
  fallbackSrc = "/placeholder-food.jpg",
  onLoad,
  onError,
  ...props
}) {
  const [imageSrc, setImageSrc] = useState(fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && src) {
      const img = new Image();

      img.onload = () => {
        setImageSrc(src);
        setIsLoading(false);
        setHasError(false);
        onLoad?.();
      };

      img.onerror = () => {
        setImageSrc(fallbackSrc);
        setIsLoading(false);
        setHasError(true);
        onError?.();
      };

      img.src = src;
    }
  }, [isInView, src, fallbackSrc, onLoad, onError]);

  return (
    <motion.div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0.7 : 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-yellow-500 rounded-full animate-spin"></div>
        </div>
      )}

      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageSrc(fallbackSrc);
          setIsLoading(false);
          setHasError(true);
        }}
      />

      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-yellow-500 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-xs font-medium">Loading...</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
