"use client";

import React from "react";
import { motion } from "framer-motion";
import { Emotion } from "@/data/emotions";
import Image from "next/image";

interface EmotionButtonProps {
  emotion: Emotion;
  onClick: (emotion: Emotion) => void;
  delay?: number;
}

const EmotionButton: React.FC<EmotionButtonProps> = ({
  emotion,
  onClick,
  delay = 0,
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 120 }}
      whileHover={{
        scale: 1.05,
        y: -6,
        rotateX: -5,
        rotateY: 5,
        z: 15,
      }}
      whileTap={{ scale: 0.95, y: 2 }}
      onClick={() => onClick(emotion)}
      className={`${emotion.bgClass} rounded-2xl flex items-center justify-center gap-4 border-2 border-white/60 emotion-btn-3d w-full`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "800px",
        padding: "1rem",
      }}
    >
      <motion.div
        className="w-10 h-10 relative"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      >
        <Image
          src={emotion.icon}
          alt={emotion.name}
          fill
          className="object-contain"
          onError={(e) => {
            // Fallback nếu hình không tồn tại
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      </motion.div>
      <span className="text-[#6B4C4C] font-bold tracking-wide text-sm uppercase">
        {emotion.name}
      </span>
    </motion.button>
  );
};

export default EmotionButton;
