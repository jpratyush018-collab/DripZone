"use client";
import { motion } from "framer-motion";

export default function Card({ title, description, image, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        rotateY: 8,
        rotateX: 5,
        scale: 1.05,
      }}
      className="
        group
        relative
        w-72
        overflow-hidden
        rounded-2xl
        bg-white/10
        backdrop-blur-md
        border border-white/20
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
      "
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Image Container */}
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.4 }}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Content */}
      <div className="p-5 relative z-10">
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              mt-5
              w-full
              py-3
              rounded-xl
              text-white
              font-semibold
              bg-gradient-to-r
              from-purple-600
              to-pink-500
              hover:from-pink-500
              hover:to-purple-600
              transition-all
              duration-500
            "
          >
            View Product
          </motion.button>
        </a>
      </div>

      {/* Animated Glow */}
      <div
        className="
          absolute
          -top-20
          -left-20
          w-40
          h-40
          bg-purple-500/20
          rounded-full
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-700
        "
      ></div>
    </motion.div>
  );
}
