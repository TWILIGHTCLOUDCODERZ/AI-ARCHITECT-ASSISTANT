import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Sparkles, ArrowRight } from 'lucide-react';

interface PointerGuideProps {
  targetElementId: string;
}

export default function PointerGuide({ targetElementId }: PointerGuideProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById(targetElementId);
    
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }

    const handleScroll = () => {
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    };

    const handleClick = () => {
      setHasInteracted(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);
    
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
      clearTimeout(timeout);
    };
  }, [targetElementId, hasInteracted]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
          }}
          className="flex items-center"
        >
          {/* Animated pointer with effects */}
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl"
            />
            
            {/* Inner pulse ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 border-2 border-blue-400/50 rounded-full"
            />
            
            {/* Pointer icon with floating animation */}
            <motion.div
              animate={{ 
                y: [-5, 5, -5],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative"
            >
              <MousePointer2 className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              {/* Sparkle effects */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="ml-6"
          >
            <div className="relative">
              {/* Tooltip background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-20" />
              <div className="relative px-6 py-3 rounded-xl border border-blue-400/30 bg-black/50 backdrop-blur-xl">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Click to try the app
                  </p>
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}