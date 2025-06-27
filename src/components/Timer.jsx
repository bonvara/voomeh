import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ defaultTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(defaultTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) return prev - 1;
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  return <div className="timer">Time left: {timeLeft}s</div>;
};

export default Timer;
