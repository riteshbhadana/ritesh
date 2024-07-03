import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/riteshbprofile.jpg";
import { motion } from "framer-motion";
import { HiDownload } from 'react-icons/hi';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const formatHeroContent = (content) => {
  const boldWords = [
    "Aspiring",
    "Developer",
    "AI",
    "ML",
    "Engineer",
    "Gurugram",
    "University",
    "Gurugram.",
    "C++",
    "Python",
  ];

  const underlinedWords = [
    "Artificial",
    "Intelligence",
    "(ML,",
    "DL,",
    "NLP,",
    "LLMs,",
    "GenAI)",
  ];

  const formattedContent = content.split(" ").map((word, index) => {
    const cleanedWord = word.replace(/[.,]/g, "");
    if (underlinedWords.includes(cleanedWord)) {
      return (
        <span key={index} className="font-semibold underline text-white">
          {word}{" "}
        </span>
      );
    }
    if (boldWords.includes(cleanedWord)) {
      return (
        <span key={index} className="font-bold text-white">
          {word}{" "}
        </span>
      );
    }
    return (
      <span key={index} className="text-white">
        {word}{" "}
      </span>
    );
  });

  return <>{formattedContent}</>;
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8 order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl lg:text-8xl font-thin tracking-tight text-white justify-center"
            >
              Ritesh Bhadana
            </motion.h1>
            
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl lg:text-3xl tracking-tight"
            >
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-extrabold">
                Aspiring Developer
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-extrabold">
                AI & ML Engineer
              </span>
            </motion.span>
            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight"
            >
              {formatHeroContent(HERO_CONTENT)}
            </motion.p>
            <div className="flex justify-center mt-8">
              <motion.a
                variants={container(0.9)}
                initial="hidden"
                animate="visible"
                className="group px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300 flex items-center focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer border-black dark:bg-white/10"
                href="/CV.pdf"
                download
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Download CV
                <HiDownload className="ml-2 opacity-60 transition group-hover:text-white" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 p-4 lg:p-8">
          <motion.img
            initial={{x: 100, opacity:0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 1, delay:1}}
            src={profilePic}
            alt="Ritesh Bhadana"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
