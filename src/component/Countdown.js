import React, { useEffect } from "react";
import { useState } from "react";

function Countdown({ Duration }) {
  const [defaultTime, setDefaultTime] = useState(Duration);

  useEffect(() => {
    setTimeout(() => {
      setDefaultTime(defaultTime - 1000);
    }, 1000);
  }, [defaultTime]);

  return (
    <div className="w-[800px] max-w-[95%] p-5 mx-auto border rounded-2xl">
      {defaultTime}
    </div>
  );
}

export default Countdown;
