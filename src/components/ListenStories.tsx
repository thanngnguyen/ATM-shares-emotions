"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  sharedStories,
  SharedStory,
  getRandomStories,
  Encouragement,
} from "@/data/sharedStories";
import { emotions, getEmotionById } from "@/data/emotions";
import {
  Home,
  Filter,
  Heart,
  MessageCircle,
  RefreshCw,
  ArrowLeft,
  Send,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";

interface ListenStoriesProps {
  onBack: () => void;
}

const ListenStories: React.FC<ListenStoriesProps> = ({ onBack }) => {
  const [stories, setStories] = useState<SharedStory[]>([]);
  const [selectedEmotion, setSelectedEmotion] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  // State cho chức năng mới
  const [likedStories, setLikedStories] = useState<Set<string>>(new Set());
  const [showEncouragementModal, setShowEncouragementModal] = useState<
    string | null
  >(null);
  const [encouragementText, setEncouragementText] = useState("");
  const [expandedEncouragements, setExpandedEncouragements] = useState<
    Set<string>
  >(new Set());
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    loadStories();
  }, [selectedEmotion]);

  const loadStories = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Lấy stories từ localStorage (stories do người dùng viết)
    let userStories: SharedStory[] = [];
    try {
      const stored = localStorage.getItem("userStories");
      if (stored) {
        userStories = JSON.parse(stored).map(
          (s: {
            id: string;
            emotion: string;
            content: string;
            createdAt: string;
            hearts: number;
            encouragements: Encouragement[];
          }) => ({
            ...s,
            createdAt: new Date(s.createdAt),
          })
        );
      }
    } catch (e) {
      console.error("Error loading user stories:", e);
    }

    // Kết hợp với sample stories
    const allStories = [...userStories, ...sharedStories];

    if (selectedEmotion === "all") {
      // Shuffle và lấy 10 stories
      const shuffled = allStories.sort(() => Math.random() - 0.5);
      setStories(shuffled.slice(0, 10));
    } else {
      const filtered = allStories.filter((s) => s.emotion === selectedEmotion);
      setStories(filtered);
    }
    setIsLoading(false);
  };

  // Xử lý thả tim
  const handleLike = (storyId: string) => {
    if (likedStories.has(storyId)) {
      // Bỏ like
      setLikedStories((prev) => {
        const newSet = new Set(prev);
        newSet.delete(storyId);
        return newSet;
      });
      setStories((prev) =>
        prev.map((s) => (s.id === storyId ? { ...s, hearts: s.hearts - 1 } : s))
      );
    } else {
      // Thêm like
      setLikedStories((prev) => new Set(prev).add(storyId));
      setStories((prev) =>
        prev.map((s) => (s.id === storyId ? { ...s, hearts: s.hearts + 1 } : s))
      );
    }
  };

  // Gửi lời động viên
  const handleSendEncouragement = () => {
    if (!encouragementText.trim() || !showEncouragementModal) return;

    const newEncouragement: Encouragement = {
      id: `e-${Date.now()}`,
      storyId: showEncouragementModal,
      message: encouragementText.trim(),
      createdAt: new Date(),
    };

    setStories((prev) =>
      prev.map((s) =>
        s.id === showEncouragementModal
          ? { ...s, encouragements: [...s.encouragements, newEncouragement] }
          : s
      )
    );

    setEncouragementText("");
    setShowEncouragementModal(null);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  // Toggle xem lời động viên
  const toggleEncouragements = (storyId: string) => {
    setExpandedEncouragements((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(storyId)) {
        newSet.delete(storyId);
      } else {
        newSet.add(storyId);
      }
      return newSet;
    });
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
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="bg-white rounded-2xl shadow-md"
                    style={{
                      padding: "1rem",
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
                    <p
                      className="text-[#4A3728] leading-relaxed mb-4"
                      style={{ padding: "0.5rem" }}
                    >
                      {story.content}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-gray-100">
                      <button
                        onClick={() => handleLike(story.id)}
                        className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all cursor-pointer select-none active:scale-95 ${
                          likedStories.has(story.id)
                            ? "bg-pink-100 text-pink-500"
                            : "bg-gray-100 text-pink-400 hover:bg-pink-50 hover:text-pink-500"
                        }`}
                      >
                        <Heart
                          className="w-5 h-5"
                          fill={
                            likedStories.has(story.id) ? "currentColor" : "none"
                          }
                        />
                        <span className="text-sm font-medium">
                          {story.hearts}
                        </span>
                        <span className="text-sm">Đồng cảm</span>
                      </button>

                      <button
                        onClick={() => setShowEncouragementModal(story.id)}
                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-100 text-blue-400 hover:bg-blue-50 hover:text-blue-500 transition-all cursor-pointer select-none active:scale-95"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">Gửi chia sẻ</span>
                      </button>

                      {story.encouragements.length > 0 && (
                        <button
                          onClick={() => toggleEncouragements(story.id)}
                          className="flex items-center gap-2 px-5 py-3 rounded-full bg-green-50 text-green-500 hover:bg-green-100 hover:text-green-600 transition-all cursor-pointer select-none active:scale-95 ml-auto"
                        >
                          <span className="text-sm font-medium">
                            {story.encouragements.length} chia sẻ
                          </span>
                          {expandedEncouragements.has(story.id) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Hiển thị lời chia sẻ */}
                    <AnimatePresence>
                      {expandedEncouragements.has(story.id) &&
                        story.encouragements.length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 space-y-2 bg-gray-100 rounded-xl p-3">
                              <p className="text-xs text-gray-500 font-medium mb-2">
                                💬 Lời chia sẻ từ cộng đồng:
                              </p>
                              {story.encouragements.map((enc) => (
                                <motion.div
                                  key={enc.id}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  className="bg-white rounded-lg p-4 text-sm"
                                  style={{
                                    padding: "0.5rem 0.75rem",
                                    margin: "0.25rem",
                                  }}
                                >
                                  {enc.message}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal gửi chia sẻ */}
      <AnimatePresence>
        {showEncouragementModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowEncouragementModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ padding: "0.5rem" }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-[#8B4D5C]">
                  💌 Gửi chia sẻ ẩn danh
                </h3>
                <button
                  onClick={() => setShowEncouragementModal(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <textarea
                value={encouragementText}
                onChange={(e) => setEncouragementText(e.target.value)}
                style={{ padding: "0.5rem" }}
                placeholder="Viết lời động viên của bạn tại đây..."
                className="w-full h-32 p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-300 text-gray-700"
                maxLength={200}
              />

              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-gray-400">
                  {encouragementText.length}/200 ký tự
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendEncouragement}
                  disabled={!encouragementText.trim()}
                  style={{ padding: "0.5rem" }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium ${
                    encouragementText.trim()
                      ? "bg-[#E8B4B8] text-white hover:bg-[#d9a3a7]"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi ẩn danh</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast thông báo thành công */}
      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
          >
            <span>Đã gửi lời chia sẻ thành công!</span>
          </motion.div>
        )}
      </AnimatePresence>

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
