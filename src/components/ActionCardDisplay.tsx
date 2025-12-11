"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ActionCard, getRandomActionCard } from "@/data/actionCards";
import { Home, RotateCcw } from "lucide-react";
import Image from "next/image";

interface ActionCardDisplayProps {
  onGoHome: () => void;
}

// 8 thẻ úp với hình cute để chọn
const cardBacks = [
  { id: 1, bg: "#E5E7EB", icon: "/images/icons/cards/card-actions.png" },
  { id: 2, bg: "#FDE7D9", icon: "/images/icons/cards/card-actions.png" },
  { id: 3, bg: "#FBCFE8", icon: "/images/icons/cards/card-actions.png" },
  { id: 4, bg: "#FEF3C7", icon: "/images/icons/cards/card-actions.png" },
  { id: 5, bg: "#F5E6D3", icon: "/images/icons/cards/card-actions.png" },
  { id: 6, bg: "#FECACA", icon: "/images/icons/cards/card-actions.png" },
  { id: 7, bg: "#D1FAE5", icon: "/images/icons/cards/card-actions.png" },
  { id: 8, bg: "#DBEAFE", icon: "/images/icons/cards/card-actions.png" },
];

// Màu nền thẻ theo category
const categoryColors: Record<string, string> = {
  body: "#FECACA", // hồng nhạt
  mind: "#FEF9C3", // vàng nhạt
  heart: "#FDE7D9", // kem nhạt
  soul: "#DBEAFE", // xanh nhạt
};

const ActionCardDisplay: React.FC<ActionCardDisplayProps> = ({ onGoHome }) => {
  const [selectedCard, setSelectedCard] = useState<ActionCard | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleSelectCard = async () => {
    if (isFlipping) return;
    setIsFlipping(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSelectedCard(getRandomActionCard());
    setIsFlipping(false);
  };

  const handleReset = () => {
    setSelectedCard(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen grid-pattern py-8 px-4 flex flex-col items-center justify-center"
    >
      <AnimatePresence mode="wait">
        {!selectedCard ? (
          // Màn hình chọn thẻ
          <motion.div
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-4xl"
          >
            {/* Header */}
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{ marginBottom: "1rem" }}
              className="text-2xl md:text-3xl font-bold text-[#8B7355] text-center mb-8 uppercase tracking-wide"
            >
              Chọn 1 thẻ dưới đây để giúp trạng thái bạn ổn định
            </motion.h1>

            {/* Grid 8 thẻ */}
            <div className="grid grid-cols-4 gap-4 md:gap-6">
              {cardBacks.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSelectCard}
                  className="cursor-pointer"
                >
                  <div
                    className="aspect-[3/4] rounded-2xl border-[3px] border-[#3D3D3D] relative overflow-hidden shadow-lg"
                    style={{ backgroundColor: card.bg }}
                  >
                    {/* Khung trang trí bên trong */}
                    <div className="absolute inset-3 border-2 border-[#3D3D3D] rounded-xl">
                      {/* Góc trang trí */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-6 h-3 bg-[#3D3D3D] rounded-b-full" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-6 h-3 bg-[#3D3D3D] rounded-t-full" />
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-3 h-6 bg-[#3D3D3D] rounded-r-full" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-3 h-6 bg-[#3D3D3D] rounded-l-full" />

                      {/* Chấm tròn ở 4 góc */}
                      <div className="absolute top-1 left-1 w-2 h-2 bg-[#3D3D3D] rounded-full" />
                      <div className="absolute top-1 right-1 w-2 h-2 bg-[#3D3D3D] rounded-full" />
                      <div className="absolute bottom-1 left-1 w-2 h-2 bg-[#3D3D3D] rounded-full" />
                      <div className="absolute bottom-1 right-1 w-2 h-2 bg-[#3D3D3D] rounded-full" />
                    </div>

                    {/* Icon hình ảnh thay thế emoji */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 relative">
                        <Image
                          src={card.icon}
                          alt="Card decoration"
                          fill
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Nút về trang chủ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ marginTop: "1rem" }}
              className="flex justify-center mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGoHome}
                style={{ padding: "1rem" }}
                className="bg-[#8B7355] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg"
              >
                <Home className="w-5 h-5" />
                <span>Về trang chủ</span>
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          // Màn hình hiển thị thẻ kết quả
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md flex flex-col items-center"
          >
            {/* Header */}
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl md:text-3xl font-bold text-[#8B7355] text-center mb-8 uppercase tracking-wide"
            >
              Đây là thẻ bạn nhận được ngày hôm nay
            </motion.h1>

            {/* Thẻ kết quả */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="w-72 h-96 rounded-2xl border-[4px] border-[#3D3D3D] relative overflow-hidden shadow-2xl"
              style={{
                backgroundColor:
                  categoryColors[selectedCard.category] || "#FDE7D9",
              }}
            >
              {/* Khung trang trí bên trong */}
              <div className="absolute inset-4 border-2 border-[#3D3D3D] rounded-xl flex flex-col items-center justify-center p-4">
                {/* Góc trang trí */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-8 h-4 bg-[#3D3D3D] rounded-b-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-8 h-4 bg-[#3D3D3D] rounded-t-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-4 h-8 bg-[#3D3D3D] rounded-r-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-4 h-8 bg-[#3D3D3D] rounded-l-full" />

                {/* Chấm tròn ở 4 góc */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-[#3D3D3D] rounded-full" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#3D3D3D] rounded-full" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#3D3D3D] rounded-full" />
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#3D3D3D] rounded-full" />

                {/* Nội dung thẻ */}
                <div className="text-center space-y-4 px-2">
                  {/* Tiêu đề */}
                  <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] uppercase tracking-wide leading-tight">
                    {selectedCard.title}
                  </h2>

                  {/* Đường kẻ trang trí */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-0.5 bg-[#3D3D3D]" />
                    <span className="text-[#3D3D3D]">✦</span>
                    <div className="w-12 h-0.5 bg-[#3D3D3D]" />
                  </div>

                  {/* Mô tả chính */}
                  <p className="text-lg md:text-xl text-[#3D3D3D] italic leading-relaxed px-4">
                    {selectedCard.description}
                  </p>

                  {/* Mục đích */}
                  <p className="text-sm text-[#5D5D5D] italic leading-relaxed">
                    Mục đích: {selectedCard.action}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ padding: "1rem" }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                style={{ padding: "1rem" }}
                className="bg-[#F5A623] text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Chọn thẻ khác</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGoHome}
                style={{ padding: "1rem" }}
                className="bg-[#8B7355] text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <Home className="w-5 h-5" />
                <span>Về trang chủ</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ActionCardDisplay;
