import React from "react";
import AnimatedIntro from "./AnimatedIntro";

const Home = () => {
  return (
    <div className="md:flex md:justify-between md:px-20 p-6 md:py-6 items-start text-white">
      {/* Left side: */}
      <div className="md:w-1/2 mb-12 md:mb-15 text-left">
        <h1 className="text-xs sm:text-sm text-amber-400 uppercase tracking-widest font-semibold mb-2">
          Full Stack Developer
        </h1>

        <AnimatedIntro />

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          I create clean, efficient, and user-friendly web applications using
          modern technologies like React and Node.js. Passionate about turning
          ideas into seamless digital experiences. Let’s build something great
          together!
        </p>
        <div className="hidden md:flex justify-center md:justify-start gap-6">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300"
          >
            Hire Me
          </a>
          <a
            href="/path-to-your-cv.pdf"
            download
            className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right side: Code block */}
      <div className="relative md:w-1/2 rounded-2xl p-[2px] overflow-hidden group">
        <div className="absolute inset-0 animate-gradient-border bg-[conic-gradient(from_0deg,_#facc15,_#22c55e,_#f43f5e,_#facc15)] blur-sm" />
        <div className="relative z-10 bg-[#0f172a] text-sm rounded-2xl p-6 font-mono border border-transparent transition-all duration-300">
          <pre className="text-green-300 transform transition-transform duration-300 group-hover:translate-y-[-4px] group-hover:scale-105">
            {`const alish = {
  name: "Alish Shakya",
  stack: ["React","Node.js",
          "Express","MongoDB"],
  traits: {
    hardWorker: true,
    quickLearner: true,
    problemSolver: true
  },
  hireable: function () {
    return (
      this.traits.hardWorker &&
      this.traits.problemSolver &&
      this.stack.length >= 3
    );
  }
};

if (alish.hireable()) {
  console.log("You should definitely hire Alish!");
}`}
          </pre>
        </div>
      </div>

      <div className="flex justify-start gap-4 m-4 md:hidden">
        <a
          href="#contact"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md"
        >
          Hire Me
        </a>
        <a
          href="/path-to-your-cv.pdf"
          download
          className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-lg shadow-md"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
