"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, PenLine, BookOpen, Sparkles, Heart } from "lucide-react";
import FlowerIcon from "@/components/FlowerIcon";
import FeatureCard from "@/components/FeatureCard";
import EmotionSelector from "@/components/EmotionSelector";
import ShareForm from "@/components/ShareForm";
import LetterResult from "@/components/LetterResult";
import ListenStories from "@/components/ListenStories";
import ActionCardDisplay from "@/components/ActionCardDisplay";
import { Emotion } from "@/data/emotions";
import { getRandomLetters, Letter } from "@/data/letters";

type PageState =
  | "home"
  | "select-emotion"
  | "share-form"
  | "letter-result"
  | "listen"
  | "action-card";

export default function Home() {
  const [pageState, setPageState] = useState<PageState>("home");
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [letters, setLetters] = useState<Letter[]>([]);

  const handleSelectEmotion = (emotion: Emotion) => {
    setSelectedEmotion(emotion);
    setPageState("share-form");
  };

  const handleSubmitShare = () => {
    if (selectedEmotion) {
      const randomLetters = getRandomLetters(selectedEmotion.id, 3);
      setLetters(randomLetters);
      setPageState("letter-result");
    }
  };

  const goHome = () => {
    setPageState("home");
    setSelectedEmotion(null);
    setLetters([]);
  };

  return (
    <AnimatePresence mode="wait">
      {pageState === "home" && (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen grid-pattern flex flex-col justify-center items-center py-8"
        >
          {/* Main Content */}
          <div className="max-w-5xl w-full mx-auto px-4">
            {/* Header */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              {/* Title with Flower */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-[#8B4D5C]"
                  style={{ fontFamily: "serif" }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  CHIA SẺ
                </motion.h1>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <FlowerIcon />
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-[#8B4D5C]"
                  style={{ fontFamily: "serif" }}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  CẢM XÚC
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[#6B4C4C] text-sm md:text-base mb-8 italic"
              >
                (Dự án được thực hiện bởi sinh viên trường Khoa học liên ngành
                và nghệ thuật - Đại học quốc gia Hà Nội)
              </motion.p>

              {/* Anonymous badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-full shadow-sm"
                style={{ padding: "3px 8px", marginTop: "10px" }}
              >
                <Lock className="w-5 h-5 text-[#D4A574]" />
                <span className="font-bold text-[#8B4D5C] tracking-wide text-sm md:text-base">
                  100% ẨN DANH - KHÔNG LƯU DANH TÍNH
                </span>
              </motion.div>
            </motion.div>

            {/* Feature Cards Container */}
            <div className="mt-24">
              <div className="max-w-7xl mx-auto">
                {/* Top row - 2 cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-24 mb-32">
                  {/* Share Card */}
                  <FeatureCard
                    icon={<span className="text-4xl">📝</span>}
                    title="TÔI MUỐN CHIA SẺ"
                    description="Viết ra điều bạn đang giữ trong lòng. Chọn nhóm cảm xúc phù hợp và gửi ẩn danh ❤️"
                    buttonText="BẮT ĐẦU"
                    bgColor="bg-[#D4EEF7]"
                    borderColor="border-[#B8DDE8]"
                    onClick={() => setPageState("select-emotion")}
                    delay={0.7}
                  />

                  {/* Listen Card */}
                  <FeatureCard
                    icon={<span className="text-4xl">🌐</span>}
                    title="TÔI MUỐN LẮNG NGHE"
                    description="Đọc tâm sự ẩn danh đã được chọn lọc và gửi lại một lời động viên ấm lòng 🌸"
                    buttonText="BẮT ĐẦU"
                    bgColor="bg-[#FFF0F0]"
                    borderColor="border-[#F5D0D0]"
                    onClick={() => setPageState("listen")}
                    delay={0.8}
                  />
                </div>

                {/* Bottom row - 1 card centered */}
                <div className="flex justify-center">
                  <div className="w-full lg:w-2/3 xl:w-1/2">
                    <FeatureCard
                      icon={<span className="text-4xl">🎬</span>}
                      title="CHUYỂN HÓA CẢM XÚC"
                      description="Nhận một thẻ hành động nhỏ để đưa cảm xúc về trạng thái cân bằng 🌱"
                      buttonText="BẮT ĐẦU"
                      bgColor="bg-[#FFF9E6]"
                      borderColor="border-[#F0E4C0]"
                      onClick={() => setPageState("action-card")}
                      delay={0.9}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating decorations */}
          <motion.div
            className="fixed bottom-10 left-10 pointer-events-none hidden md:block"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Heart className="w-8 h-8 text-pink-300 fill-pink-200" />
          </motion.div>

          <motion.div
            className="fixed bottom-20 right-10 pointer-events-none hidden md:block"
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-4xl">🌸</span>
          </motion.div>

          <motion.div
            className="fixed top-40 right-20 pointer-events-none hidden md:block"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl">💗</span>
          </motion.div>
        </motion.div>
      )}

      {pageState === "select-emotion" && (
        <EmotionSelector
          key="select-emotion"
          onSelectEmotion={handleSelectEmotion}
          onBack={goHome}
        />
      )}

      {pageState === "share-form" && selectedEmotion && (
        <ShareForm
          key="share-form"
          emotion={selectedEmotion.id}
          onSubmit={handleSubmitShare}
          onBack={() => setPageState("select-emotion")}
        />
      )}

      {pageState === "letter-result" && selectedEmotion && (
        <LetterResult
          key="letter-result"
          letters={letters}
          emotion={selectedEmotion.id}
          onGoHome={goHome}
        />
      )}

      {pageState === "listen" && <ListenStories key="listen" onBack={goHome} />}

      {pageState === "action-card" && (
        <ActionCardDisplay key="action-card" onGoHome={goHome} />
      )}
    </AnimatePresence>
  );
}
