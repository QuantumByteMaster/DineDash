import { useRef, useState } from "react";

import TitleText from "@GlobalComponents/Texts/TitleText";
import SpecialText from "@GlobalComponents/Texts/SpecialText";
import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import ParagraphText from "@GlobalComponents/Texts/ParagraphText";

import ReservationForm from "./ReservationForm";

import { RightArrowIcon } from "@Icons/Icons";

const initialErrorState = {
  invalidName: false,
  invalidEmail: false,
  invalidNumber: false,
  invalidDate: false,
  invalidTime: false,
  invalidAmount: false,
};

export default function ReservationSection() {
  const [errors, setErrors] = useState(initialErrorState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const removeErrorsTimeout = useRef(null);

  const handleSetErrors = (identifier) =>
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        [identifier]: true,
      };
    });

  const handleCheckErrors = (data) => {
    if (!data.name) handleSetErrors("invalidName");
    if (!data.email) handleSetErrors("invalidEmail");
    if (!data.number) handleSetErrors("invalidNumber");
    if (!data.date) handleSetErrors("invalidDate");
    if (!data.time) handleSetErrors("invalidTime");
    if (!data.amount) handleSetErrors("invalidAmount");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (removeErrorsTimeout.current) clearTimeout(removeErrorsTimeout.current);

    const data = new FormData(event.target);

    const usableData = {
      name: data.get("name"),
      email: data.get("email"),
      number: data.get("number"),
      date: data.get("date"),
      time: data.get("time"),
      amount: data.get("amount"),
    };

    handleCheckErrors(usableData);

    removeErrorsTimeout.current = setTimeout(() => {
      setErrors(initialErrorState);
    }, 1500);

    if (
      !usableData.name ||
      !usableData.email ||
      !usableData.number ||
      !usableData.date ||
      !usableData.time ||
      !usableData.amount
    )
      return;

    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#141210] h-[95rem] sm:h-auto w-full py-16 use-poppins flex items-start justify-center gap-20">
      <div className="w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl flex flex-col xl:flex-row justify-between flex-col-reverse xl:flex-row gap-10 xl:gap-0 items-center xl:items-start px-2 sm:px-4">
        <ReservationForm
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
          handleSubmit={handleSubmit}
          errors={errors}
        />
        <div className="w-full xl:w-[40%] text-white mt-16 text-center xl:text-start xl:items-start flex flex-col items-center">
          <TitleText extraClasses="text-[2rem] text">
            Elevate Your Dining <br /> Experience with a Reserved
            <br /> Table at <SpecialText>DineDash</SpecialText>
          </TitleText>
          <ParagraphText extraClasses="text-[1rem]">
            Enjoy the perfect blend of convenience and quality, where each meal
            is prepared to delight your taste buds in a relaxed and welcoming
            atmosphere.
          </ParagraphText>
          <YellowButton
            width="[15rem]"
            text="Read More"
            icon={<RightArrowIcon width="2em" height="2em" />}
          />
        </div>
      </div>
    </div>
  );
}
