import React, { useState, useEffect } from "react";
import { portfolioValue } from "../component_src/E_Portfolio";

const CountdownTimer = () => {
  const initialTime = {
    days: 224,
    hours: 24,
    minutes: 48,
    seconds: 0,
  };

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
      ) {
        clearInterval(interval);
        // Perform any action when the countdown reaches zero
        console.log("Countdown reached zero!");
      } else {
        const newTime = { ...time };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;

          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;

            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;

              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }

        setTime(newTime);
      }
    }, 1000); // Update every 1 second (1000 milliseconds)

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="w-[800px] max-w-[90%] md:px-10 px-0 py-5 gap-5 flex md:flex-row flex-col items-center md:justify-between justify-center rounded-2xl border mx-auto my-5">
      <div className="">{portfolioValue.content}</div>
      <div className="flex items-center md:gap-10 gap-5 flex-wrap sm:scale-100 scale-75 w-fit">
        <div className="flex items-center flex-col gap-3">
          <div className="font-[700] text-[30px] text-[#222222]">
            -{time.days}
          </div>
          <div className="font-[400] text-[14px] text-[#6f6f6f]">Days</div>
        </div>
        <div className="flex items-center flex-col gap-3">
          <div className="font-[700] text-[30px] text-[#222222]">
            -{time.hours}
          </div>
          <div className="font-[400] text-[14px] text-[#6f6f6f]">Hours</div>
        </div>
        <div className="flex items-center flex-col gap-3">
          <div className="font-[700] text-[30px] text-[#222222]">
            -{time.minutes}
          </div>
          <div className="font-[400] text-[14px] text-[#6f6f6f]">Minutes</div>
        </div>
        <div className="flex items-center flex-col gap-3">
          <div className="font-[700] text-[30px] text-[#222222]">
            -{time.seconds}
          </div>
          <div className="font-[400] text-[14px] text-[#6f6f6f]">Seconds</div>
        </div>
      </div>
      <div className="">
        <div className="">{portfolioValue.conetnt2.percentage}</div>
        <div className="">{portfolioValue.conetnt2.message}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
