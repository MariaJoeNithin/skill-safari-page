import React, { useEffect, useState } from "react";
import { Autotype } from "../component_src/Autotype";
import "./AutoTypeContent.css"

const AutoTypingAnimation = () => {
  let textArray = Autotype.arrayContent;

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeText = () => {
      const currentText = textArray[textIndex];
      const speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex < currentText.length) {
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (isDeleting) {
          setTextIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    };

    const intervalId = setInterval(typeText, isDeleting ? 50 : 100);

    return () => clearInterval(intervalId);
  }, [charIndex, isDeleting, textIndex, textArray]);

  const currentText = textArray[textIndex].substring(0, charIndex);

  return (
    <div className="text-container sm:text-[36px] text-[22px] font-[700] text-[#f3274f]  mx-auto max-w-full text-wrap h-auto">
      {currentText}
    </div>
  );
};

export default AutoTypingAnimation;
