"use client";
import { useState, useEffect } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const targetDate = new Date("2025-07-25T00:00:00-04:00");

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return undefined;
  }

  return (
    <div className="text-center text-4xl flex items-center justify-center fixed bottom-0 left-0 right-0 top-0 bg-turquoise p-4 z-0">
      <img id="chanteuse" src="/imgs/chanteuse.png" alt="Une chanteuse!" />
      {timeLeft.days} jours <br />
      {timeLeft.hours} heures <br />
      {timeLeft.minutes} minutes
      <br />
      {timeLeft.seconds} secondes
      <br />
    </div>
  );
}
