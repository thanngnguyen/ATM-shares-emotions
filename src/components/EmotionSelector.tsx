"use client";

import React from "react";
import { motion } from "framer-motion";
import { emotions, Emotion } from "@/data/emotions";
import EmotionButton from "./EmotionButton";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface EmotionSelectorProps {
  onSelectEmotion: (emotion: Emotion) => void;
  onBack: () => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({
  onSelectEmotion,
  onBack,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen grid-pattern flex flex-col justify-center items-center py-8"
    >
      {/* Back button */}
      <div className="absolute top-4 left-6">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="flex items-center gap-2 text-[#8B7B7B] hover:text-[#6B4C4C] font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại</span>
        </motion.button>
      </div>

      <div className="w-full mx-auto px-4 flex flex-col items-center justify-center">
        {/* Title */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#8B4D5C] mb-14"
          style={{ fontFamily: "serif", marginBottom: "1rem" }}
        >
          BẠN ĐANG CẢM THẤY THẾ NÀO?
        </motion.h1>

        {/* Emotion grid - 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {emotions.map((emotion, index) => (
            <EmotionButton
              key={emotion.id}
              emotion={emotion}
              onClick={onSelectEmotion}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements với hình ảnh */}
      <motion.div
        className="fixed bottom-10 left-10 hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-12 h-12 relative">
          <Image
            src="/images/icons/decorations/rainbow.png"
            alt="Rainbow decoration"
            fill
            className="object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="fixed bottom-10 right-10 hidden md:block"
        animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <div className="w-12 h-12 relative">
          <Image
            src="/images/icons/decorations/sparkle.png"
            alt="Sparkle decoration"
            fill
            className="object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmotionSelector;
