import React, { useEffect, useState } from "react";
import multitext from "../learninghubdev.json";

const AutoTypingAnimation = () => {
  let textArray = multitext.Section1.Position;

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
    <div className="text-container text-[36px] font-[900] text-[#f3274f]">
      {currentText}
    </div>
  );
};

export default AutoTypingAnimation;
