import { useState } from "react";

import Logo from "/Logo.png";

import { motion } from "framer-motion";

import AnimatedList from "@Animations/AnimatedList";

import SlideAndFadeIn from "@Animations/SlideAndFadeIn";
import FooterItem from "../Items/FooterItem";

export default function Footer() {
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="w-full lg:h-[40rem] h-[70rem] md:h-[60rem] relative overflow-hidden">
      {/* Gold accent bar */}
      <div className="w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-t-xl" />
      {/* Subtle food-themed background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[url('/public/cloche.png')] bg-no-repeat bg-right-bottom bg-contain" />
      <motion.footer
        initial="hidden"
        animate={isInView ? "visible" : "outOfView"}
        whileInView={() => setIsInView(true)}
        onViewportLeave={() => setIsInView(false)}
        variants={{
          hidden: { opacity: 0, y: 300 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              stiffness: 100,
            },
          },
          outOfView: { opacity: 0, y: 300 },
        }}
        className="w-full h-full bg-gradient-to-br from-[#181512] via-[#1a1816] to-[#23201c] flex flex-col items-center rounded-t-2xl shadow-2xl border-t-4 border-yellow-400 relative z-10"
      >
        <AnimatedList className="w-full flex h-[13rem]">
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://img.freepik.com/premium-photo/highquality-food-photography-grilled-meat-vegetables-dark-background-4k-resolution_561855-2896.jpg"
              loading="lazy"
              width="160"
              height="80"
              alt="Grilled meat and vegetables"
            />
          </FooterItem>
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://c4.wallpaperflare.com/wallpaper/1016/938/374/food-high-resolution-desktop-backgrounds-wallpaper-preview.jpg"
              loading="lazy"
              width="160"
              height="80"
              alt="Food wallpaper preview"
            />
          </FooterItem>
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://s.yimg.com/ny/api/res/1.2/rNXnLchmc4VHCIH02hfd8w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM1OA--/https://media.zenfs.com/en/insidermonkey.com/64a63f085247830169a35b5b3d279198"
              loading="lazy"
              width="160"
              height="80"
              alt="Food photography"
            />
          </FooterItem>
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://e0.pxfuel.com/wallpapers/240/265/desktop-wallpaper-delicious-food-high-quality-resolution-japanese-cute-foods.jpg"
              loading="lazy"
              width="160"
              height="80"
              alt="Japanese cute foods"
            />
          </FooterItem>
          <FooterItem>
            <img
              className="object-cover w-full h-[5rem] lg:h-full"
              src="https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/famous-food-photographers-1.jpg"
              loading="lazy"
              width="160"
              height="80"
              alt="Famous food photographers"
            />
          </FooterItem>
        </AnimatedList>
        <div className="w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 md:gap-x-20 xl:gap-x-36 xl:gap-y-0 pt-14 px-2 sm:px-8 text-white justify-items-center divide-y-0 md:divide-y-0 xl:divide-y-0 xl:divide-x xl:divide-gray-900">
          {/* Logo & Info */}
          <div className="flex flex-col items-start text-left w-full gap-8">
            <SlideAndFadeIn
              starting="-150"
              end="0"
              className="flex flex-col w-full"
            >
              <div className="flex text-yellow-400 items-center mb-4">
                <img
                  className="h-20 drop-shadow-lg"
                  src={Logo}
                  alt="DineDash Logo"
                  loading="lazy"
                  width="80"
                  height="80"
                />
                <p className="use-pacifico text-yellow-400 text-3xl ml-2 drop-shadow">
                  DineDash
                </p>
              </div>
              <p className="use-poppins text-gray-300 mb-4 text-base font-bold">
                Your gateway to a culinary odyssey that celebrates the rich and
                diverse flavors from around the world.
              </p>
              <AnimatedList className="flex flex-col text-gray-400 use-poppins font-bold gap-8 items-start">
                <FooterItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    className="text-yellow-400"
                  >
                    <g fill="currentColor">
                      <path d="M22 12A10.002 10.002 0 0 0 12 2v2a8.003 8.003 0 0 1 7.391 4.938A8 8 0 0 1 20 12zM2 10V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a8 8 0 0 0 8 8v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5C7.373 22 2 16.627 2 10" />
                      <path d="M17.543 9.704A5.99 5.99 0 0 1 18 12h-1.8A4.199 4.199 0 0 0 12 7.8V6a6 6 0 0 1 5.543 3.704" />
                    </g>
                  </svg>
                  <p>+91 98765 43210</p>
                </FooterItem>
                <FooterItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 36 36"
                    className="text-yellow-400"
                  >
                    <path
                      fill="currentColor"
                      d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z"
                    />
                    <path
                      fill="currentColor"
                      d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                  <p>raj@rajbhaskar.xyz</p>
                </FooterItem>
                <FooterItem>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 20 20"
                    className="text-yellow-400"
                  >
                    <path
                      fill="currentColor"
                      d="M19.367 18.102L18 14h-1.5l.833 4H2.667l.833-4H2L.632 18.102C.285 19.146.9 20 2 20h16c1.1 0 1.715-.854 1.367-1.898M15 5A5 5 0 1 0 5 5c0 4.775 5 10 5 10s5-5.225 5-10m-7.7.06A2.699 2.699 0 0 1 10 2.361a2.699 2.699 0 1 1 0 5.399a2.7 2.7 0 0 1-2.7-2.7"
                    />
                  </svg>
                  <p>Altamount Road, Mumbai, Maharashtra 400026</p>
                </FooterItem>
              </AnimatedList>
            </SlideAndFadeIn>
          </div>
          {/* Opening Hours */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:px-8">
            <h1 className="use-playfair text-lg mb-8 font-bold text-yellow-400 tracking-wide">
              Opening Hours
            </h1>
            <AnimatedList className="flex flex-col gap-4 items-center xl:items-start">
              <div className="flex flex-col gap-1 mb-2">
                <FooterItem extraClasses="use-poppins font-bold h-4">
                  Sunday to Friday
                </FooterItem>
                <FooterItem extraClasses="use-poppins">
                  9:30 AM to 12:00PM
                </FooterItem>
              </div>
              <div className="flex flex-col gap-1">
                <FooterItem extraClasses="use-poppins font-bold h-4">
                  Saturday
                </FooterItem>
                <FooterItem extraClasses="use-poppins">
                  12:30PM to 6:00PM
                </FooterItem>
              </div>
            </AnimatedList>
          </div>
          {/* Newsletter Subscribe */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:px-8">
            <h1 className="use-playfair text-lg mb-8 text-yellow-400 tracking-wide">
              Newsletter Subscribe
            </h1>
            <p className="use-poppins font-bold text-xs xl:text-sm mb-4 text-gray-400 max-w-[14rem] xl:max-w-[18rem]">
              Get the latest recipes and food stories delivered to your inbox.
              Join our newsletter!
            </p>
            <div className="relative w-[16rem] xl:w-[20rem] mb-4">
              <motion.input
                whileHover={{ scale: 1.05, backgroundColor: "#ffffdd" }}
                type="email"
                placeholder="Your email..."
                className="w-full h-12 pr-14 pl-4 outline-none text-black text-base rounded"
              />
              <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-yellow-400 outline-none px-4 h-9 rounded hover:bg-yellow-300 flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1792 1792"
                >
                  <path
                    fill="currentColor"
                    d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"
                  />
                </svg>
              </button>
            </div>
            <AnimatedList className="flex gap-4 justify-center xl:justify-start">
              <a
                href="https://x.com/RAJ_BHASKAR_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-all duration-300 cursor-pointer w-12 h-12 rounded-2xl border-2 border-gray-400 grid place-items-center hover:shadow-lg hover:scale-110 hover:border-yellow-400 backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/QuantumByteMaster?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-all duration-300 cursor-pointer w-12 h-12 rounded-2xl border-2 border-gray-400 grid place-items-center hover:shadow-lg hover:scale-110 hover:border-yellow-400 backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 0 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
                  />
                </svg>
              </a>
            </AnimatedList>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
