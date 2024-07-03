import { motion } from "framer-motion";

const Languages = () => {
  return (
    <div className="border-b border-neutral-800 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-neutral-0"
      >
        Languages
      </motion.h1>
      <ul className="max-w-md mx-auto grid gap-4">
        <li className="flex items-center space-x-2 text-lg text-neutral-100">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center"
          >
            <span className="text-3xl font-bold">हिं</span>
          </motion.div>
          <motion.span
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="font-semibold"
          >
            Hindi:
          </motion.span>{" "}
          <motion.span
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-neutral-400"
          >
            Native
          </motion.span>
        </li>
        <li className="flex items-center space-x-2 text-lg text-neutral-100">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center"
          >
            <span className="text-3xl font-bold">E</span>
          </motion.div>
          <motion.span
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="font-semibold"
          >
            English:
          </motion.span>{" "}
          <motion.span
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-neutral-400"
          >
            Fluent
          </motion.span>
        </li>
        <li className="flex items-center space-x-2 text-lg text-neutral-100">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center"
          >
            <span className="text-3xl font-bold">D</span>
          </motion.div>
          <motion.span
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="font-semibold"
          >
            German:
          </motion.span>{" "}
          <motion.span
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-neutral-400"
          >
            Intermediate
          </motion.span>
        </li>
        <li className="flex items-center space-x-2 text-lg text-neutral-100">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center"
          >
            <span className="text-3xl font-bold">ਪੰ</span>
          </motion.div>
          <motion.span
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="font-semibold"
          >
            Punjabi:
          </motion.span>{" "}
          <motion.span
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-neutral-400"
          >
            Speaking
          </motion.span>
        </li>
      </ul>
    </div>
  );
};

export default Languages;
