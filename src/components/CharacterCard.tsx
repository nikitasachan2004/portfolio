import React from 'react';
import { motion } from 'motion/react';

interface CharacterCardProps {
  src?: string;
  alt?: string;
  size?: number;
  bgColor?: string;
  glowColor?: string;
  floatAmplitude?: number;
  floatDuration?: number;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  src,
  alt = 'Nikita Mascot Character',
  size = 140,
  bgColor = '#FDE047',
  glowColor = 'rgba(251, 191, 36, 0.65)',
  floatAmplitude = 10,
  floatDuration = 3,
}) => {
  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer select-none"
      style={{ width: size, height: size }}
      whileHover="hover"
      initial="idle"
    >
      {/* Background circle disc */}
      <motion.div
        className="absolute inset-0 rounded-full border-[3px] border-black shadow-brutal"
        style={{ backgroundColor: bgColor }}
        variants={{
          idle: { scale: 1, opacity: 1 },
          hover: { scale: 1.08, opacity: 1 },
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      />

      {/* Glow ring on hover */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        variants={{
          idle: { boxShadow: `0 0 0 0px ${glowColor}` },
          hover: { boxShadow: `0 0 32px 14px ${glowColor}` },
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      {/* Character mascot — floats continuously, scales and rocks slightly on hover */}
      <motion.div
        className="relative z-10 w-[82%] h-[82%] flex items-center justify-center pointer-events-none"
        animate={{
          y: [-floatAmplitude / 2, floatAmplitude / 2, -floatAmplitude / 2],
        }}
        transition={{
          duration: floatDuration,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        variants={{
          idle: { scale: 1, rotate: 0 },
          hover: { scale: 1.12, rotate: [-2, 2, -2] },
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="w-full h-full object-contain"
          />
        ) : (
          /* Handcrafted Vector Chibi Anime Mascot with glasses and triangle clip */
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hair Back */}
            <path
              d="M25 80 C20 45 40 18 60 18 C80 18 100 45 95 80 C90 92 88 102 88 108 L32 108 C32 102 30 92 25 80 Z"
              fill="#1E293B"
            />

            {/* Neck */}
            <rect x="52" y="74" width="16" height="18" fill="#FBCFE8" stroke="#000" strokeWidth="2.5" />

            {/* Face Base */}
            <ellipse cx="60" cy="56" rx="26" ry="29" fill="#FDE2D6" stroke="#000" strokeWidth="3" />

            {/* Hair Front / Fringe */}
            <path
              d="M34 45 C38 32 50 25 60 25 C70 25 82 32 86 45 C78 38 68 36 60 38 C52 36 42 38 34 45 Z"
              fill="#0F172A"
              stroke="#000"
              strokeWidth="2.5"
            />
            {/* Tiny Triangle Hair Clip */}
            <polygon points="37,36 45,34 42,43" fill="#FB7185" stroke="#000" strokeWidth="2" />

            {/* Side hair strands */}
            <path d="M34 45 C32 60 34 76 38 84" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
            <path d="M86 45 C88 60 86 76 82 84" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />

            {/* Eyebrows */}
            <path d="M43 45 Q50 42 54 44" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M66 44 Q70 42 77 45" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />

            {/* Glasses Frame (Bold Neo-Brutal Eyewear) */}
            <rect x="40" y="48" width="16" height="13" rx="3" fill="#FFFFFF" fillOpacity="0.8" stroke="#000" strokeWidth="3" />
            <rect x="64" y="48" width="16" height="13" rx="3" fill="#FFFFFF" fillOpacity="0.8" stroke="#000" strokeWidth="3" />
            {/* Glasses Bridge */}
            <path d="M56 53 L64 53" stroke="#000" strokeWidth="3" />

            {/* Eyes inside glasses */}
            <circle cx="48" cy="54" r="2.5" fill="#000" />
            <circle cx="72" cy="54" r="2.5" fill="#000" />
            <circle cx="49" cy="53" r="0.8" fill="#FFF" />
            <circle cx="73" cy="53" r="0.8" fill="#FFF" />

            {/* Nose */}
            <path d="M60 58 Q62 63 59 64" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />

            {/* Cheerful Smile with blush */}
            <path d="M52 69 Q60 76 68 69" stroke="#000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="43" cy="65" rx="3.5" ry="2" fill="#F43F5E" fillOpacity="0.5" />
            <ellipse cx="77" cy="65" rx="3.5" ry="2" fill="#F43F5E" fillOpacity="0.5" />

            {/* Hoodie / Shoulders */}
            <path
              d="M28 112 C30 92 42 86 60 86 C78 86 90 92 92 112 Z"
              fill="#38BDF8"
              stroke="#000"
              strokeWidth="3"
            />
            {/* Hoodie string / zipper */}
            <path d="M60 86 L60 112" stroke="#000" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="56" cy="98" r="2" fill="#FFF" stroke="#000" strokeWidth="1.5" />
            <circle cx="64" cy="98" r="2" fill="#FFF" stroke="#000" strokeWidth="1.5" />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CharacterCard;
