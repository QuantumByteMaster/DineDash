import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import { RightArrowIcon } from "@Icons/Icons";

const features = [
  {
    icon: "🍲",
    title: "Warm & Enjoy",
    desc: "Warm & enjoy delicious comfort food that soothes the soul and delights the taste buds. Indulge in hearty soups, savory stews, and decadent desserts.",
  },
  {
    icon: "🍽️",
    title: "Savour & Replay",
    desc: "Experience comforting dishes like hearty soups, savory stews, and decadent desserts, each bite offering a nostalgic embrace of comfort and joy.",
  },
  {
    icon: "🚚",
    title: "Delivery Services",
    desc: "Take a look & experience seamless delivery with our dedicated team ensuring your food arrives fresh, tasty and on time, every single time.",
  },
  {
    icon: "🥗",
    title: "Organic Food",
    desc: "Explore our selection of wholesome, amazing, good, farm-to-table goodness, delivering quality organic ingredients directly to your kitchen.",
  },
];

export default function ChoiceOfCustomers() {
  return (
    <div className="w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl flex flex-col lg:flex-row items-stretch py-8 md:py-16 justify-center gap-8 md:gap-12 px-1 sm:px-4 min-h-[350px]">
      {/* Feature cards grid */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 place-items-center lg:place-items-start">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-start min-h-[170px] w-full max-w-[350px]"
          >
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-bold text-lg mb-1">{f.title}</div>
            <div className="text-gray-600 text-sm">{f.desc}</div>
          </div>
        ))}
      </div>
      {/* Text card */}
      <div className="flex flex-col gap-4 py-6 px-4 md:px-8 w-full lg:w-1/2 bg-[#fde7cb] rounded-xl shadow-md justify-center items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          The Choice of <br />
          <span className="text-green-400">Customers</span>
        </h2>
        <p className="text-base md:text-lg text-gray-800">
          Our best selling items are the choice of customers who seek
          exceptional flavors and impeccable quality. Each dish is crafted with
          precision, using the finest ingredients to ensure a memorable dining
          experience.
        </p>
        <YellowButton
          width="40"
          text="View More"
          icon={<RightArrowIcon width="2em" height="2em" />}
          buttonClasses="mt-2"
        />
      </div>
    </div>
  );
}
