import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { portfolioValue } from "../component_src/E_Portfolio";

const CountdownTimer = () => {
  const getCurrentYearEnd = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const endDate = new Date(currentYear, 11, 31, 23, 59, 59, 999); // End of the current year
    const startDate = new Date(currentYear, 1, 1); // February 1st of the current year
    return { startDate, endDate };
  };

  const getRemainingTime = (endDate) => {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(getRemainingTime(getCurrentYearEnd().endDate));
  const [value, setValue] = useState(80); // You can change the percentage here

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getRemainingTime(getCurrentYearEnd().endDate));
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

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
        <div style={{ width: '50px', height: '50px', scale:'1.1' }}>
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            strokeWidth={12}
            styles={buildStyles({
              rotation: 0, 
              strokeLinecap: 'round', 
              textSize: '20px',
              pathColor: 'orange', 
              textColor: 'black',
              trailColor: '#BCE0FD', 
              backgroundColor: '#FFFFFF', 
            })}
          />
        </div>
        <div className="mt-2">{portfolioValue.conetnt2.message}</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
