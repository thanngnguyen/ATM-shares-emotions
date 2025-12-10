"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  sharedStories,
  SharedStory,
  getRandomStories,
} from "@/data/sharedStories";
import { emotions, getEmotionById } from "@/data/emotions";
import {
  Home,
  Filter,
  Heart,
  MessageCircle,
  RefreshCw,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";

interface ListenStoriesProps {
  onBack: () => void;
}

const ListenStories: React.FC<ListenStoriesProps> = ({ onBack }) => {
  const [stories, setStories] = useState<SharedStory[]>([]);
  const [selectedEmotion, setSelectedEmotion] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadStories();
  }, [selectedEmotion]);

  const loadStories = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (selectedEmotion === "all") {
      setStories(getRandomStories(10));
    } else {
      const filtered = sharedStories.filter(
        (s) => s.emotion === selectedEmotion
      );
      setStories(filtered);
    }
    setIsLoading(false);
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Hôm nay";
    if (days === 1) return "Hôm qua";
    if (days < 7) return `${days} ngày trước`;
    return date.toLocaleDateString("vi-VN");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen grid-pattern py-8 px-4 flex flex-col items-center"
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

      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-4 mt-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img
            src="/images/icons/emotions/relationship-heart.gif"
            alt="Listen stories"
            className="w-20 h-20 object-contain"
          />
        </motion.div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#8B4D5C] mb-2 mt-4">
          TÔI MUỐN LẮNG NGHE
        </h1>
        <p className="text-lg text-[#6B4C4C]">
          Đọc tâm sự ẩn danh và gửi lại một lời động viên ấm lòng 🌸
        </p>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl w-full mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-[#8B4D5C]" />
          <span className="font-bold text-[#8B4D5C]">Lọc theo cảm xúc:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <motion.button
            whileHover={{ scale: 1.05, y: -2, rotateX: -3 }}
            whileTap={{ scale: 0.95, y: 1 }}
            onClick={() => setSelectedEmotion("all")}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-all btn-3d ${
              selectedEmotion === "all"
                ? "bg-[#E8B4B8] text-white"
                : "bg-white text-[#6B4C4C]"
            }`}
            style={{
              transformStyle: "preserve-3d",
              perspective: "400px",
              padding: "0.5rem",
            }}
          >
            Tất cả
          </motion.button>

          {emotions.map((emotion) => (
            <motion.button
              key={emotion.id}
              whileHover={{ scale: 1.05, y: -2, rotateX: -3 }}
              whileTap={{ scale: 0.95, y: 1 }}
              onClick={() => setSelectedEmotion(emotion.id)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all flex items-center gap-1 btn-3d ${
                selectedEmotion === emotion.id
                  ? "bg-[#E8B4B8] text-white"
                  : "bg-white text-[#6B4C4C]"
              }`}
              style={{
                transformStyle: "preserve-3d",
                perspective: "400px",
                padding: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <span className="w-5 h-5 relative inline-block">
                <Image
                  src={emotion.icon}
                  alt={emotion.name}
                  fill
                  className="object-contain"
                />
              </span>
              <span>{emotion.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Stories */}
      <div className="max-w-4xl w-full">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <RefreshCw className="w-8 h-8 text-[#E8B4B8]" />
              </motion.div>
              <p className="text-[#6B4C4C] mt-4">Đang tải...</p>
            </motion.div>
          ) : stories.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <span className="text-6xl mb-4 block">😢</span>
              <p className="text-[#6B4C4C]">
                Chưa có tâm sự nào trong danh mục này
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="stories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6"
            >
              {stories.map((story, index) => {
                const emotion = getEmotionById(story.emotion);
                return (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 30, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.02, rotateX: -2, rotateY: 3, z: 15 }}
                    className="bg-white rounded-2xl p-6 card-3d"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                      padding: "0.5rem",
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`${
                            emotion?.bgClass || "bg-gray-100"
                          } px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}
                        >
                          {emotion && (
                            <span className="w-5 h-5 relative inline-block">
                              <Image
                                src={emotion.icon}
                                alt={emotion.name}
                                fill
                                className="object-contain"
                              />
                            </span>
                          )}
                          <span>{emotion?.name}</span>
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {formatDate(story.createdAt)}
                      </span>
                    </div>

                    {/* Content */}
                    <p className="text-[#4A3728] leading-relaxed mb-4">
                      {story.content}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 text-pink-400 hover:text-pink-500"
                      >
                        <Heart className="w-5 h-5" />
                        <span className="text-sm">Đồng cảm</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-500"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">Gửi lời động viên</span>
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorations */}
      <motion.div
        className="fixed bottom-10 left-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-4xl">📚</span>
      </motion.div>

      <motion.div
        className="fixed bottom-10 right-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <span className="text-4xl">💌</span>
      </motion.div>
    </motion.div>
  );
};

export default ListenStories;
