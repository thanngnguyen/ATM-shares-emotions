"use client";

import React from "react";
import { motion } from "framer-motion";

const FlowerIcon = () => (
  <motion.div
    className="relative w-20 h-20 md:w-24 md:h-24"
    animate={{ rotate: [0, 3, -3, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    {/* Petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <motion.div
        key={i}
        className="absolute w-6 h-6 md:w-7 md:h-7 bg-white rounded-full border border-gray-200 shadow-sm"
        style={{
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-16px)`,
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
      />
    ))}
    {/* Center face */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-amber-300 rounded-full flex items-center justify-center shadow-inner z-10">
      <div className="flex flex-col items-center">
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-amber-700 rounded-full" />
          <div className="w-1.5 h-1.5 bg-amber-700 rounded-full" />
        </div>
        <motion.div
          className="w-4 h-2 border-b-2 border-amber-700 rounded-b-full mt-1"
          animate={{ scaleX: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
    {/* Star decoration */}
    <motion.div
      className="absolute -top-1 -right-1 text-gray-600"
      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      ✦
    </motion.div>
  </motion.div>
);

export default FlowerIcon;
