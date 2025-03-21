import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen relative pt-32" id="contact">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Get in Touch</h2>
            <p className="text-xl text-gray-400">
              Let's discuss how we can help with your cloud architecture needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glow-card rounded-xl p-6 backdrop-blur-lg bg-black/30">
                <h3 className="text-2xl font-semibold text-white mb-6 neon-text">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:deepanrey@gmail.com"
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <Mail className="w-6 h-6 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                    deepanrey@gmail.com
                  </a>
                  <div className="flex items-center text-gray-400">
                    <MapPin className="w-6 h-6 mr-3 text-blue-400" />
                    Remote / Worldwide
                  </div>
                </div>
              </div>

              <div className="glow-card rounded-xl p-6 backdrop-blur-lg bg-black/30">
                <h3 className="text-xl font-semibold text-white mb-4">Connect Online</h3>
                <p className="text-gray-400 mb-4">
                  Follow my work and connect with me on social media platforms
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/in/deepanraj95/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href="https://github.com/TWILIGHTCLOUDCODERZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glow-card rounded-xl p-6 backdrop-blur-lg bg-black/30"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 neon-text">Send a Message</h3>
              <form
                action={`mailto:deepanrey@gmail.com`}
                method="post"
                encType="text/plain"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-black/50 border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-black/50 border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-black/50 border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600/20 text-blue-400 px-6 py-3 rounded-lg border border-blue-500/50 hover:bg-blue-600/30 hover:border-blue-400 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}