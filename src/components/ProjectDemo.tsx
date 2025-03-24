import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Maximize2, Sparkles, Zap, CloudLightning as Lightning, MonitorPlay } from 'lucide-react';

export default function ProjectDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto mb-24"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4 neon-text">Product Demo</h2>
        <p className="text-xl text-gray-400">
          Experience the Future of Cloud Architecture
        </p>
      </div>

      <div className="relative group">
        {/* Electric border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-300 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
        
        <div className="relative bg-black/50 backdrop-blur-lg rounded-xl p-1 overflow-hidden">
          {/* Video container with aspect ratio */}
          <div className="relative aspect-video">
            {/* YouTube iframe */}
            <iframe
              src="https://www.youtube.com/embed/qQ1ebbwybVA?si=xXyzdrxiV9B647xe"
              title="AI Architecture Assistant Demo"
              className="absolute inset-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Electric corner effects */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400 rounded-tl"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-400 rounded-tr"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-400 rounded-bl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400 rounded-br"></div>

            {/* Animated electric sparks */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 pointer-events-none"
            >
              <Zap className="absolute top-2 left-2 w-4 h-4 text-blue-400" />
              <Zap className="absolute top-2 right-2 w-4 h-4 text-purple-400" />
              <Zap className="absolute bottom-2 left-2 w-4 h-4 text-cyan-400" />
              <Zap className="absolute bottom-2 right-2 w-4 h-4 text-blue-400" />
            </motion.div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-b from-black/0 to-black/50">
            {[
              { icon: Sparkles, text: "AI-Powered Design Recommendations" },
              { icon: MonitorPlay, text: "Interactive Architecture Visualization" },
              { icon: Lightning, text: "Real-time Infrastructure as Code" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <feature.icon className="w-8 h-8 text-blue-400 relative z-10" />
                </div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}