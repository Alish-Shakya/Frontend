import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    const totalTypingTime = fullText.length * 100 + 600;
    const timeout = setTimeout(() => {
      onComplete();
    }, totalTypingTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
        <div className="mb-4 text-1xl font-mono font-bold md:text-4xl">
          {text}
          <span className="animate-blink ml-1"> </span>
        </div>

        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-amber-400 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
