import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import { cn } from "@/utils";

const Typewriter = ({
  words,
}: {
  words: { text: string; className?: string }[];
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      { display: "inline-block", opacity: 1 },
      { duration: 0.3, delay: stagger(0.1), ease: "easeInOut" },
    );
  }, []);

  const wordsArray = words.map((word) => {
    return { ...word, text: word.text.split("") };
  });

  return (
    <div className="text-center text-5xl font-bold">
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, i) => {
          return (
            <div key={`${i}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  key={`char-${index}`}
                  className={cn("text-whiteopacity-0 hidden", word.className)}
                >
                  {char === " " ? <>&nbsp;</> : char}
                </motion.span>
              ))}
            </div>
          );
        })}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block h-10 w-1 rounded-sm bg-blue-500"
      ></motion.span>
    </div>
  );
};

export default Typewriter;
