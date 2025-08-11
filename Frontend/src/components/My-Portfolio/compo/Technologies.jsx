// import { RiReactjsLine } from "react-icons/ri";
// import {
//   SiMongodb,
//   SiExpress,
//   SiPostman,
//   SiCisco,
//   SiTailwindcss,
// } from "react-icons/si";
// import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
// import GithubIcon from "./ui/icons/GithubIcon";

// const Technologies = () => {
//   return (
//     <>
//       <div className="pb-1"></div>
//       <h2 className="my-8 mx-8 text-2xl md:text-4xl md:text-center text-amber-400">
//         Tools & Technologies
//       </h2>

//       {/* upper tech  */}
//       <div className="flex md:flex-wrap items-center justify-center gap-5 md:gap-30  text-2xl md:text-4xl">
//         <div>
//           <FaHtml5 className=" text-orange-500" />
//         </div>

//         <div>
//           <FaCss3Alt className=" text-blue-500" />
//         </div>

//         <div>
//           <FaJs className=" text-yellow-400" />
//         </div>

//         <div>
//           <RiReactjsLine className=" text-cyan-400" />
//         </div>

//         <div>
//           <FaNodeJs className=" text-green-600" />
//         </div>

//         <div>
//           <SiMongodb className=" text-green-400" />
//         </div>
//       </div>

//       {/* lower tech  */}
//       <div className=" md:ml-20 flex md:flex-wrap items-center justify-center gap-5 md:gap-30 p-10 text-2xl md:text-4xl">
//         <div>
//           <SiTailwindcss className=" text-sky-400" />
//         </div>

//         <div>
//           <GithubIcon />
//         </div>

//         <div>
//           <FaGitAlt className=" text-red-500" />
//         </div>

//         <div>
//           <SiExpress className=" text-gray-300" />
//         </div>

//         <div>
//           <SiPostman className=" text-orange-600" />
//         </div>

//         <div>
//           <SiCisco className=" text-blue-600" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Technologies;

import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiCisco,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const upperIcons = [
  <FaHtml5 className="text-orange-500" />,
  <FaCss3Alt className="text-blue-500" />,
  <FaJs className="text-yellow-400" />,
  <RiReactjsLine className="text-cyan-400" />,
  <FaNodeJs className="text-green-600" />,
  <SiMongodb className="text-green-400" />,
];

const lowerIcons = [
  <SiTailwindcss className="text-sky-400" />,
  <FaGithub className="text-white" />,
  <FaGitAlt className="text-red-500" />,
  <SiExpress className="text-gray-300" />,
  <SiPostman className="text-orange-600" />,
  <SiCisco className="text-blue-600" />,
];

const Technologies = () => {
  const slideDuration = 20; // seconds

  return (
    <div className="overflow-hidden py-10">
      <h2 className="my-8 text-2xl md:text-4xl text-center text-amber-400">
        Tools & Technologies
      </h2>

      {/* Upper row - slides left */}
      <div className="overflow-hidden w-full whitespace-nowrap">
        <motion.div
          className="flex gap-10 text-4xl"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: slideDuration,
            ease: "linear",
          }}
        >
          {[...upperIcons, ...upperIcons].map((icon, index) => (
            <div key={`up-${index}`}>{icon}</div>
          ))}
        </motion.div>
      </div>

      {/* Lower row - slides right */}
      <div className="overflow-hidden w-full whitespace-nowrap mt-10">
        <motion.div
          className="flex gap-10 text-4xl"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: slideDuration,
            ease: "linear",
          }}
        >
          {[...lowerIcons, ...lowerIcons].map((icon, index) => (
            <div key={`low-${index}`}>{icon}</div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
