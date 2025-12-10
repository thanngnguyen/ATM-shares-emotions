"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  bgColor: string;
  borderColor: string;
  onClick: () => void;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  bgColor,
  borderColor,
  onClick,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.03,
        y: -8,
        rotateX: -3,
        rotateY: 3,
        z: 20,
      }}
      whileTap={{ scale: 0.97, y: 0 }}
      className={`${bgColor} ${borderColor} border-2 rounded-[2rem] px-12 py-10 cursor-pointer card-3d`}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        margin: "1rem",
        padding: "5px",
      }}
    >
      <div className="flex items-start gap-8">
        {/* Icon */}
        <motion.div
          className="w-20 h-20 flex items-center justify-center shrink-0 mt-1"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-5xl">{icon}</span>
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-[#8B4D5C] tracking-wide uppercase mb-4">
            {title}
          </h3>
          <p className="text-base text-[#6B4C4C] leading-relaxed mb-5">
            {description}
          </p>
          <motion.span
            whileHover={{ x: 5 }}
            className="text-sm font-bold text-[#8B4D5C] hover:text-[#6B3C4C] tracking-widest inline-block pt-2"
          >
            {buttonText} →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
