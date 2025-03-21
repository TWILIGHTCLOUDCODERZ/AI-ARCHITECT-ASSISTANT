import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function DemoNotice() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 bg-blue-600/20 backdrop-blur-sm text-white py-2 z-50 border-b border-blue-500/50"
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <p className="text-sm text-center flex-1">
              THIS IS A DEMO PROJECT [MAY HAVE SOME ISSUES] - BUILT FOR{' '}
              <a 
                href="https://azureaidev.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Azure AI Developer Hackathon
              </a>
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors ml-4"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}