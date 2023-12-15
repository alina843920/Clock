import { useState, useEffect } from "react";
import "./Clock.scss";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(undefined);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
      console.log("tick");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentDate = new Date(currentTime);
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  return (
    <div className="clock">
      <span>{`${hours} : ${minutes} : ${seconds}`}</span>
    </div>
  );
};

export default Clock;
