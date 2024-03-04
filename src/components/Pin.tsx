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
        className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform: transform }}
          className="shadow-[0_8px_16px_rgb(0_0_0/0.4)]border absolute left-1/2 top-1/2 flex items-start justify-center overflow-hidden rounded-2xl border-white/[0.1] p-4 transition duration-700 group-hover/pin:border-white/[0.2]"
        >
          <div className="relative z-50">{children}</div>
        </div>
      </div>
      <motion.div className="pointer-events-none z-[60] flex h-72 w-72 items-center justify-center opacity-0 transition duration-500 group-hover/pin:opacity-100">
        <div className=" inset-0 h-full w-full flex-none">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            {text}
          </div>
          <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-x-1/2 translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 blur-[2px] group-hover/pin:h-32" />
          <motion.div className="absolute bottom-1/2 right-1/2 h-20 w-px translate-x-1/2 translate-y-[14px] bg-gradient-to-b from-transparent to-cyan-500 group-hover/pin:h-32" />
          <motion.div className="absolute bottom-1/2 right-1/2 z-40 h-[4px] w-[4px] translate-x-1/2 translate-y-[16px] rounded-full bg-cyan-600 blur-[3px]" />
          <motion.div className="absolute bottom-1/2 right-1/2 z-40 h-[2px] w-[2px] translate-x-1/2 translate-y-[16px] rounded-full bg-cyan-300" />
        </div>
      </motion.div>
    </div>
  );
};

export default Pin;
