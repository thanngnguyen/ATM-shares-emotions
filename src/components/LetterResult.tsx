"use client";

import React from "react";
import { motion } from "framer-motion";
import { Letter } from "@/data/letters";
import { Home } from "lucide-react";

interface LetterResultProps {
  letters: Letter[];
  emotion: string;
  onGoHome: () => void;
}

const LetterResult: React.FC<LetterResultProps> = ({
  letters,
  emotion,
  onGoHome,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full relative"
    >
      {/* Background Image - ảnh của bạn */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/letter-result/bg-letter-result.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Nội dung thư đặt lên trên background */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-[1200px] h-[600px] relative">
          {/* Letter 1 - Khung viền đứt nét bên trái trên */}
          {letters[0] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute"
              style={{
                top: "20%",
                left: "7%",
                width: "40%",
                height: "22%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 25px",
              }}
            >
              <p
                className="text-center leading-relaxed"
                style={{
                  color: "#4A4A4A",
                  fontStyle: "italic",
                  fontSize: "1rem",
                }}
              >
                {letters[0].content}
              </p>
            </motion.div>
          )}

          {/* Letter 2 - Khung hồng bên trái dưới */}
          {letters[1] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute"
              style={{
                top: "78%",
                left: "1%",
                width: "45%",
                height: "18%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 30px",
              }}
            >
              <p
                className="text-center leading-relaxed"
                style={{
                  color: "#4A4A4A",
                  fontStyle: "italic",
                  fontSize: "1.2rem",
                }}
              >
                {letters[1].content}
              </p>
            </motion.div>
          )}

          {/* Letter 3 - Khung notepad bên phải */}
          {letters[2] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute"
              style={{
                top: "10%",
                right: "4%",
                width: "35%",
                height: "45%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "20px 25px",
              }}
            >
              <p
                className="leading-relaxed"
                style={{
                  color: "#4A4A4A",
                  fontStyle: "italic",
                  fontSize: "1.4rem",
                  lineHeight: "2.5",
                }}
              >
                {letters[2].content}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Nút về trang chủ */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onGoHome}
          className="text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg"
          style={{ backgroundColor: "#E8B4B8", padding: "1rem" }}
        >
          <Home className="w-5 h-5" />
          Quay về trang chủ
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LetterResult;
