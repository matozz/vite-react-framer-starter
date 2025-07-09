import { FC, PropsWithChildren, useState } from "react";
import { motion } from "framer-motion";

const Pin: FC<PropsWithChildren<{ text: string }>> = ({ children, text }) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)",
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className="group/pin relative z-50 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute top-1/2 left-1/2 mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform: transform }}
          className="absolute top-1/2 left-1/2 flex items-start justify-center overflow-hidden rounded-2xl p-4 transition duration-700 group-hover/pin:border-white/20"
        >
          <div className="relative z-50">{children}</div>
        </div>
      </div>
      <motion.div className="pointer-events-none z-60 flex h-72 w-72 items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100">
        <div className="inset-0 h-full w-full flex-none">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            {text}
          </div>
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-x-1/2 translate-y-3.5 bg-linear-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-32" />
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-x-1/2 translate-y-3.5 bg-linear-to-b from-transparent to-cyan-500 group-hover/pin:h-32" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 size-1 translate-x-1/2 translate-y-4 rounded-full bg-cyan-600 blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 size-0.5 translate-x-1/2 translate-y-4 rounded-full bg-cyan-300" />
        </div>
      </motion.div>
    </div>
  );
};

export default Pin;
