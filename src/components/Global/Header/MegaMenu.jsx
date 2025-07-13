import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MegaMenu({ isOpen, onClose }) {
  const menuItems = [
    {
      title: "Our Menu",
      description: "Explore our diverse culinary offerings",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop",
      links: [
        { name: "Appetizers", href: "#appetizers" },
        { name: "Main Courses", href: "#main-courses" },
        { name: "Desserts", href: "#desserts" },
        { name: "Beverages", href: "#beverages" },
      ],
    },
    {
      title: "Dining Experience",
      description: "Discover our unique dining atmosphere",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
      links: [
        { name: "Reservations", href: "#reservations" },
        { name: "Private Events", href: "#events" },
        { name: "Catering", href: "#catering" },
        { name: "Gift Cards", href: "#gift-cards" },
      ],
    },
    {
      title: "About DineDash",
      description: "Learn about our story and values",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=300&h=200&fit=crop",
      links: [
        { name: "Our Story", href: "#story" },
        { name: "Chef's Team", href: "#chefs" },
        { name: "Awards", href: "#awards" },
        { name: "Press", href: "#press" },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50"
          onMouseLeave={onClose}
        >
          <div className="w-[95%] md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      width="300"
                      height="128"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {item.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        whileHover={{ x: 5 }}
                        className="text-gray-700 hover:text-yellow-500 transition-colors duration-200"
                      >
                        <a href={link.href} className="block py-1">
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
