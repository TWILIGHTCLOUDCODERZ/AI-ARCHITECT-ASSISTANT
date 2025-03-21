import React from 'react';
import { Heart, Mail, Github, Youtube, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-blue-500/10 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center sm:justify-start items-center gap-1 text-sm"
          >
            <span className="text-gray-400">Built with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="w-3 h-3 text-red-500" />
            </motion.div>
            <span className="text-gray-400">by</span>
            <motion.a
              href="https://deepantechnoids.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group"
              whileHover={{ scale: 1.05 }}
            >
              DeepanVampire
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <span className="text-gray-400">for</span>
            <motion.a
              href="https://azureaidev.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center group"
              whileHover={{ scale: 1.05 }}
            >
              Azure AI Hackathon
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="relative group hidden sm:block">
              <input
                type="email"
                placeholder="Subscribe to updates"
                className="w-40 text-sm px-3 py-1 rounded-full bg-black/20 border border-blue-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
              >
                <Youtube className="w-3 h-3" />
              </motion.button>
            </div>

            <div className="flex items-center space-x-4">
              <motion.a
                href="mailto:deepanrey@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                title="Email me"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://github.com/TWILIGHTCLOUDCODERZ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/channel/UCVmhGFK96iNIwh-g3dNbRYQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}