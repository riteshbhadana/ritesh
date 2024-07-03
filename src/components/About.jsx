import riteshabout from "../assets/riteshabout.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity: 1, x: 0 }}
        initial ={{opacity:0, x: -100}}
        transition={{duration: 0.5}}        
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={riteshabout}
              alt="about"
              className="w-[65%] h-auto rounded-xl shadow-md"
            />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 mb-3">
              Hello! I am currently pursuing a Bachelor of Technology (BTech) in
              <span className="font-medium"> Computer Science</span> with a
              specialization in
              <span className="font-medium"> Artificial Intelligence</span> from
              <span className="font-bold"> GURUGRAM UNIVERSITY, Gurugram</span>.
              Coding is my passion, and I thrive on the challenges that come
              with solving new problems. I enjoy taking on new coding challenges
              and continuously pushing my boundaries.
              <br />I primarily code in <span className="font-bold">
                C++
              </span>{" "}
              and <span className="font-bold">Python</span>. I use{" "}
              <span className="font-medium">C++</span> for solving
              <span className="font-bold ">
                {" "}
                Data Structures and Algorithms (DSA)
              </span>{" "}
              problems on platforms like{" "}
              <a
                href="https://leetcode.com/u/riteshbhadana"
                target="_blank"
                className="underline text-blue-500"
              >
                LeetCode
              </a>
              . <span className="font-bold">Python</span>, on the other hand, is
              my preferred language for{" "}
              <span className="font-bold">
                Machine Learning and Deep Learning projects
              </span>
              . I leverage Python for all subsets of{" "}
              <span className="font-serif font-extrabold underline">AI</span>,
              constantly exploring new technologies and tools in the field. I am
              always eager to learn and stay updated with the latest
              advancements in technology. Currently, I am actively seeking
              internship opportunities as a
              <span className="font-medium">
                {" "}
                Backend Developer and AI & ML Engineer
              </span>
              , where I can apply my skills and contribute to innovative
              projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
