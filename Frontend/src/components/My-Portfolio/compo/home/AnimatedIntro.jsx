import React, { useEffect, useState } from "react";

const AnimatedIntro = () => {
  const phrases = ["Alish Shakya", "Enthusiastic Learner"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex <= currentPhrase.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setText(currentPhrase.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    }

    // When typing finishes, pause and start deleting
    if (!isDeleting && charIndex === currentPhrase.length + 1) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    }

    // When deleting finishes, move to next phrase and start typing
    if (isDeleting && charIndex === -1) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  const colorClass = phraseIndex === 1 ? "text-green-400" : "text-amber-400";

  return (
    <section>
      <p className=" text-xl md:text-5xl font-extrabold leading-tight mb-6">
        I'm <br />
        <span className={`${colorClass} min-h-[1em] inline-block`}>
          {text}
          <span className="border-r-2 border-current animate-blink ml-1">
            &nbsp;
          </span>
        </span>
      </p>

      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
      `}</style>
    </section>
  );
};

export default AnimatedIntro;
