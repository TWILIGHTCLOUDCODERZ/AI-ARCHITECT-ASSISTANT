import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Brain, Database, Globe, Cloud, LineChart } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const orbitingElements = [
  { Icon: Brain, label: 'AI', color: 'text-blue-400' },
  { Icon: LineChart, label: 'ML', color: 'text-purple-400' },
  { Icon: Globe, label: 'Vision', color: 'text-cyan-400' },
  { Icon: Cloud, label: 'Data', color: 'text-indigo-400' },
  { Icon: Database, label: 'Azure Database', color: 'text-pink-400' },
  { Icon: Bot, label: 'Azure Web App', color: 'text-green-400' }
];

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [rotationDuration, setRotationDuration] = useState(3); // Initial rotation duration in seconds

  useEffect(() => {
    const componentsToLoad = [
      'Hero',
      'Architecture',
      'Deployment',
      'Team',
      'FAQ',
      'Contact'
    ];
    
    let loadedComponents = 0;
    const totalComponents = componentsToLoad.length;

    const simulateComponentLoad = () => {
      const interval = setInterval(() => {
        loadedComponents++;
        const newProgress = (loadedComponents / totalComponents) * 100;
        setProgress(newProgress);
        
        // Update rotation speed based on progress
        // As progress increases, duration decreases (making it faster)
        const newDuration = Math.max(3 - (newProgress / 100), 2); // Start at 3s, min 2s
        setRotationDuration(newDuration);

        if (loadedComponents >= totalComponents) {
          clearInterval(interval);
          setTimeout(() => {
            setShowLoadingScreen(false);
            onLoadingComplete();
          }, 500);
        }
      }, 400);

      return () => clearInterval(interval);
    };

    simulateComponentLoad();
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {showLoadingScreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-[300px] h-[300px]">
            {/* Rotating Circle Container */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: rotationDuration,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Orbiting Elements */}
              {orbitingElements.map((element, index) => {
                const angle = (index * (360 / orbitingElements.length)) * (Math.PI / 180);
                const radius = 120; // Circle radius
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <element.Icon className={`w-8 h-8 ${element.color}`} />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Central Robot Icon - Enhanced with LED effects */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Outer glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"
              />
              
              {/* Inner glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-full blur-lg"
              />

              {/* Robot face container */}
              <div className="relative">
                {/* Main robot icon */}
                <Bot className="w-24 h-24 text-blue-400 relative z-10" />

                {/* LED eyes */}
                <div className="absolute top-1/3 left-1/4 w-2 h-2">
                  <motion.div
                    animate={{
                      opacity: [1, 0.5, 1],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-cyan-400 rounded-full"
                    style={{ boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee, 0 0 30px #22d3ee' }}
                  />
                </div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2">
                  <motion.div
                    animate={{
                      opacity: [1, 0.5, 1],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-cyan-400 rounded-full"
                    style={{ boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee, 0 0 30px #22d3ee' }}
                  />
                </div>

                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
                </div>
              </div>

              {/* Energy field effect */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4"
              >
                <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full" 
                     style={{ clipPath: 'polygon(0 0, 100% 0, 100% 25%, 0 25%)' }} />
                <div className="absolute inset-0 border-2 border-blue-400/20 rounded-full" 
                     style={{ clipPath: 'polygon(0 25%, 100% 25%, 100% 50%, 0 50%)' }} />
                <div className="absolute inset-0 border-2 border-purple-400/20 rounded-full" 
                     style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 75%, 0 75%)' }} />
                <div className="absolute inset-0 border-2 border-pink-400/20 rounded-full" 
                     style={{ clipPath: 'polygon(0 75%, 100% 75%, 100% 100%, 0 100%)' }} />
              </motion.div>
            </div>

            {/* Progress Section */}
            <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-64">
              {/* Progress bar */}
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Loading Text */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-center"
              >
                <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-bold mb-2">
                  Architect gear up lets move to MARS
                </p>
                <p className="text-sm text-gray-400">
                  Loading... {Math.round(progress)}%
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}