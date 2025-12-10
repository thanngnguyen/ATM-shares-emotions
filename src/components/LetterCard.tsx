"use client";

import React from "react";
import { motion } from "framer-motion";
import { Letter } from "@/data/letters";
import { Heart, Sparkles, Star } from "lucide-react";

interface LetterCardProps {
  letter: Letter;
  index: number;
  totalLetters: number;
}

const LetterCard: React.FC<LetterCardProps> = ({
  letter,
  index,
  totalLetters,
}) => {
  const rotations = [-5, 3, -3, 5, 0];
  const colors = [
    "bg-gradient-to-br from-pink-100 to-pink-200 border-pink-300",
    "bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300",
    "bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300",
    "bg-gradient-to-br from-green-100 to-green-200 border-green-300",
    "bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300",
  ];

  const typeIcons = {
    empathy: <Heart className="w-5 h-5 text-pink-500" />,
    healing: <Sparkles className="w-5 h-5 text-purple-500" />,
    encouragement: <Star className="w-5 h-5 text-yellow-500" />,
  };

  const typeLabels = {
    empathy: "Đồng cảm",
    healing: "Chữa lành",
    encouragement: "Động viên",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 50,
        rotateX: -20,
        rotateY: index % 2 === 0 ? -10 : 10,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        rotate: rotations[index % 5],
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        type: "spring",
        stiffness: 80,
      }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        rotateX: -5,
        rotateY: 8,
        z: 30,
        zIndex: 10,
      }}
      className={`${
        colors[index % 5]
      } border-2 rounded-xl p-6 cursor-pointer relative overflow-hidden card-3d`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transformOrigin: index % 2 === 0 ? "top left" : "top right",
      }}
    >
      {/* Ribbon decoration */}
      <motion.div
        className="absolute -top-2 -right-2"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        <div className="text-3xl">🎀</div>
      </motion.div>

      {/* Type badge */}
      <div className="flex items-center gap-2 mb-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          {typeIcons[letter.type]}
        </motion.div>
        <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
          {typeLabels[letter.type]}
        </span>
      </div>

      {/* Content */}
      <p className="text-[#4A3728] leading-relaxed text-sm font-medium">
        {letter.content}
      </p>

      {/* Hearts decoration */}
      <motion.div
        className="absolute bottom-2 right-2 flex gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="text-pink-400 text-lg"
          >
            💕
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LetterCard;
