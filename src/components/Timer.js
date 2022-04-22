import { useEffect, useState } from "react";

export default function Timer({ questionNumber, setStop }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const intervel = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervel);
  }, [setStop, timer]);
  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}
