import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Youtube, 
  Github, 
  Globe, 
  Cloud, 
  Shield, 
  Code, 
  Brain,
  Terminal,
  Database,
  Network,
  Settings,
  Star,
  Mail,
  Award,
  Trophy,
  Target,
  CheckCircle,
  Zap
} from 'lucide-react';

const technologies = [
  { name: 'Cloud Architecture', icon: Cloud },
  { name: 'Security', icon: Shield },
  { name: 'AI/ML', icon: Brain },
  { name: 'DevOps', icon: Settings },
  { name: 'Full Stack', icon: Code },
  { name: 'Data Engineering', icon: Database }
];

const technicalProficiency = [
  { name: 'Azure & AWS', percentage: 80, icon: Cloud },
  { name: 'Security', percentage: 80, icon: Shield },
  { name: 'Node.js', percentage: 70, icon: Terminal },
  { name: 'Python', percentage: 70, icon: Code },
  { name: 'Database', percentage: 70, icon: Database },
  { name: 'AI/ML', percentage: 60, icon: Brain }
];

const keyAchievements = [
  {
    title: 'Microsoft Security Researcher',
    description: 'Discovered and reported CVE-2021-24113, contributing to Microsoft security improvements',
    icon: Shield,
    color: 'from-blue-400 to-cyan-400'
  },
  {
    title: 'MSUS Cloud Skills Challenge Champion-2022',
    description: 'Champion of Microsoft US Cloud Skills Challenge',
    icon: Trophy,
    color: 'from-purple-400 to-pink-400'
  },
  {
    title: 'Google Mass Private Security HACKS-2021',
    description: 'Successfully identified and reported security vulnerabilities',
    icon: Target,
    color: 'from-red-400 to-pink-400'
  },
  {
    title: 'Lenovo Private Program Security HACKS-2021',
    description: 'Contributed to improving Lenovo\'s security infrastructure',
    icon: CheckCircle,
    color: 'from-green-400 to-emerald-400'
  }
];

const certifications = [
  {
    name: 'AI-102: Microsoft Certified: Azure Administrator Associate',
    icon: Brain,
    issuer: 'Microsoft',
    year: 'Dec 2024',
    url: 'https://deepantechnoids.github.io/'
  },
  {
    name: 'AZ-305: Designing Microsoft Azure Infrastructure Solutions',
    icon: Cloud,
    issuer: 'Microsoft',
    year: 'Feb 2024',
    url: 'https://deepantechnoids.github.io/'
  },
  {
    name: 'AZ-104: Microsoft Certified: Azure Administrator Associate',
    icon: Cloud,
    issuer: 'Microsoft',
    year: 'March 2023',
    url: 'https://deepantechnoids.github.io/'
  },
  {
    name: 'CSI Linux Certified Investigator',
    icon: Shield,
    issuer: 'CSI',
    year: 'November 2023',
    url: 'https://deepantechnoids.github.io/'
  },
  {
    name: 'AWS Certified Solutions Architect-Associate',
    icon: Cloud,
    issuer: 'Amazon Web Services',
    year: 'March 2021',
    url: 'https://deepantechnoids.github.io/'
  },
  {
    name: 'AZ-204 Azure Developer Associate',
    icon: Code,
    issuer: 'Microsoft',
    year: 'April 2022',
    url: 'https://deepantechnoids.github.io/'
  }
];

const GlitteringLetter = ({ letter, index }: { letter: string; index: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: [0.5, 1, 0.5],
        textShadow: [
          "0 0 5px rgba(147, 51, 234, 0.5), 0 0 10px rgba(147, 51, 234, 0.3)",
          "0 0 10px rgba(147, 51, 234, 0.8), 0 0 20px rgba(147, 51, 234, 0.5), 0 0 30px rgba(147, 51, 234, 0.3)",
          "0 0 5px rgba(147, 51, 234, 0.5), 0 0 10px rgba(147, 51, 234, 0.3)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: index * 0.1,
        ease: "easeInOut"
      }}
      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
      style={{
        textShadow: "0 0 10px rgba(147, 51, 234, 0.5)",
        WebkitTextStroke: "1px rgba(147, 51, 234, 0.3)"
      }}
    >
      {letter}
    </motion.span>
  );
};

export default function Team() {
  return (
    <div className="min-h-screen bg-transparent pt-20 md:pt-32" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="relative inline-block mb-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30"
            />
            <Star className="w-12 h-12 md:w-16 md:h-16 text-blue-400 relative z-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">Meet the Creator</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Cloud Architect & AI Engineer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-10 group-hover:opacity-20 transition-all duration-500 blur-xl" />
              <div className="relative glow-card rounded-xl p-6 md:p-8 backdrop-blur-lg border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="relative mb-4 md:mb-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300" />
                    <img
                      src="https://github.com/user-attachments/assets/fe0f1a79-5103-4102-9183-f42689bd6704"
                      alt="DeepanRaj Vellingiri"
                      className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500/20 group-hover:border-blue-400/30 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:ml-6 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      DeepanRaj Vellingiri
                    </h3>
                    <p className="text-lg md:text-xl text-blue-400/80 mb-4">Cloud & AI Solutions Architect</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                      <motion.a
                        href="mailto:deepanrey@gmail.com"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/deepanraj95/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.a>
                      <motion.a
                        href="https://github.com/TWILIGHTCLOUDCODERZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.a>
                      <motion.a
                        href="https://deepantechnoids.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <Globe className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-8 text-center"
                >
                  <div className="flex justify-center space-x-1 text-base md:text-lg">
                    {"ANGEL GOT ME BACK".split("").map((letter, index) => (
                      <GlitteringLetter key={index} letter={letter} index={index} />
                    ))}
                  </div>
                </motion.div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-6">Technical Proficiency</h4>
                  <div className="space-y-4">
                    {technicalProficiency.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <skill.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mr-2" />
                            <span className="text-sm md:text-base text-gray-300">{skill.name}</span>
                          </div>
                          <span className="text-sm md:text-base text-blue-400">{skill.percentage}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-2 text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-all duration-300"
                    >
                      <tech.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-400/80 group-hover:text-blue-300 transition-colors duration-300" />
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glow-card rounded-xl p-6 md:p-8 backdrop-blur-lg"
            >
              <h4 className="text-xl font-semibold text-white mb-6">Key Achievements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyAchievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-lg p-4 border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative flex items-start">
                      <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${achievement.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                        <achievement.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="ml-3 md:ml-4">
                        <h5 className="text-base md:text-lg font-semibold text-white mb-1">{achievement.title}</h5>
                        <p className="text-xs md:text-sm text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="glow-card rounded-xl p-6 md:p-8 backdrop-blur-lg">
              <h4 className="text-xl font-semibold text-white mb-6">Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-4 border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center">
                      <cert.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400/80 group-hover:text-blue-300 transition-colors" />
                      <div className="ml-3">
                        <h5 className="text-sm md:text-base font-medium text-white">{cert.name}</h5>
                        <p className="text-xs text-gray-400">{cert.year}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}