import { useEffect } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { DiPython } from "react-icons/di";
import {
  SiFlask,
  SiMongodb,
  SiJavascript,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiScipy,
  SiNeo4J,
  SiCplusplus,
  SiDocker,
  SiApachekafka,
} from "react-icons/si";
import { BiBrain, BiStats } from "react-icons/bi";
import { AiOutlineRobot, AiOutlineBranches } from "react-icons/ai";
import { BsBarChartFill, BsGraphUp } from "react-icons/bs";
import { motion } from "framer-motion";


const Technologies = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".icon-container");

    let phase = 0;
    const animateIcons = () => {
      icons.forEach((icon, index) => {
        const delay = index * 0.1;
        const angle = phase + delay;
        const translateY = Math.sin(angle) * 5; // Adjust the amplitude (lower value for slower animation)

        icon.style.transform = `translateY(${translateY}px)`;
      });

      phase += 0.05; // Adjust the increment value (higher value for slower animation)
      requestAnimationFrame(animateIcons);
    };

    animateIcons();

    return () => {
      icons.forEach((icon) => {
        icon.style.transform = "";
      });
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-4xl text-cyan-400" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            React.js
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiPython className="text-4xl text-yellow-500" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            Python
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFlask className="text-4xl text-purple-500" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            Flask
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-4xl text-green-500" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            MongoDB
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-4xl text-yellow-400" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            JavaScript
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiBrain className="text-4xl text-purple-600" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            AI
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTensorflow className="text-4xl text-red-700" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            TensorFlow
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <AiOutlineRobot className="text-4xl text-blue-600" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            ML
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiStats className="text-4xl text-green-600" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            Statistics
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNumpy className="text-4xl text-blue-500" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            NumPy
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPandas className="text-4xl text-purple-400" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            Pandas
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BsBarChartFill className="text-4xl text-orange-500" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            Matplotlib
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BsGraphUp className="text-4xl text-orange-600" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            EDA
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiKeras className="text-4xl text-red-600" />
          </div>
          <span className="absolute bottom-1 left-0 right-0 text-xs text-center">
            Keras
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiScipy className="text-4xl text-blue-600" />
          </div>
          <span className="absolute bottom-1 left-0 right-0 text-xs text-center">
            SciPy
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiScikitlearn className="text-4xl text-orange-600" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            sk-learn
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNeo4J className="text-4xl text-teal-500" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            Neo4j
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus className="text-4xl text-blue-700" />
          </div>
          <span className="absolute bottom-1 left-0 right-0 text-xs text-center">
            C++
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <AiOutlineBranches className="text-4xl text-green-500" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            DSA
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDocker className="text-4xl text-blue-500" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            Docker
          </span>
        </div>

        <div className="relative icon-container">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiApachekafka className="text-4xl text-black" />
          </div>
          <span className="absolute bottom-2 left-0 right-0 text-xs text-center">
            Kafka
          </span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;