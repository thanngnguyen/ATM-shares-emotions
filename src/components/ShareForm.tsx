"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface ShareFormProps {
  emotion: string;
  onSubmit: () => void;
  onBack: () => void;
}

const ShareForm: React.FC<ShareFormProps> = ({ emotion, onSubmit, onBack }) => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (content.trim().length < 10) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onSubmit();
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/letter-result/bg-share-form.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Back button */}
      <motion.button
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ x: -3 }}
        onClick={onBack}
        className="absolute top-6 left-6 z-30 flex items-center gap-2 text-[#9A8A7A] hover:text-[#6B5B4B] transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Quay lại</span>
      </motion.button>

      {/* Content - Textarea đặt lên vị trí tờ giấy */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-[1200px] h-[700px] relative">
          {/* Textarea - vị trí tờ giấy ở giữa */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute"
            style={{
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "320px",
              height: "400px",
            }}
          >
            {/* Placeholder */}
            <AnimatePresence>
              {content.length === 0 && (
                <motion.p
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-lg pointer-events-none absolute inset-0 flex items-center justify-center px-8"
                  style={{
                    color: "#B8A890",
                    fontStyle: "italic",
                  }}
                >
                  (Chia sẻ tại đây...)
                </motion.p>
              )}
            </AnimatePresence>

            {/* Textarea */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-full bg-transparent resize-none focus:outline-none px-8 py-6"
              style={{
                color: "#5C4D3D",
                lineHeight: "1.8",
                fontSize: "1rem",
                caretColor: "#8B7355",
              }}
              maxLength={1000}
            />
          </motion.div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
        <button
          onClick={handleSubmit}
          disabled={content.trim().length < 10 || isSubmitting}
          className={`text-white px-8 py-4 rounded-lg font-bold tracking-wider text-sm transition-all hover:scale-105 ${
            content.trim().length < 10 || isSubmitting
              ? "opacity-40 cursor-not-allowed"
              : ""
          }`}
          style={{
            backgroundColor: "#3D3D3D",
            boxShadow: "0 4px 0 #1a1a1a, 0 6px 12px rgba(0,0,0,0.2)",
            padding: "1rem",
          }}
        >
          {isSubmitting ? "ĐANG GỬI..." : "NHẤN ĐỂ GỬI"}
        </button>

        {content.length > 0 && content.trim().length < 10 && (
          <p className="text-xs mt-2 text-center" style={{ color: "#9A8A7A" }}>
            Tối thiểu 10 ký tự để gửi đi.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ShareForm;
