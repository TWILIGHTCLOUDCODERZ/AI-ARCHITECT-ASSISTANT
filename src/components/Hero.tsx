import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Code2, 
  BarChart4, 
  FileText, 
  Shield, 
  Monitor, 
  Database,
  AlertCircle,
  CheckCircle2,
  Server,
  Key,
  Code,
  Terminal,
  Network as Network2,
  Cpu,
  ExternalLink, 
  Play, 
  Youtube, 
  Github, 
  Rocket,
  Zap,
  Star
} from 'lucide-react';
import Roadmap from './Roadmap';
import ProjectDemo from './ProjectDemo';
import UseCase from './UseCase';
import PointerGuide from './PointerGuide';

const examplePrompts = [
  "Design a scalable e-commerce platform with high availability and disaster recovery",
  "Create a microservices architecture for a real-time analytics platform",
  "Build a serverless data processing pipeline with event-driven architecture"
];

const howItWorks = [
  {
    title: "Select Cloud Provider",
    description: "Choose between AWS, Azure, or Google Cloud Platform."
  },
  {
    title: "Describe Requirements",
    description: "Explain your architecture needs in plain English."
  },
  {
    title: "Generate Architecture",
    description: "AI analyzes requirements and generates comprehensive design."
  },
  {
    title: "Review & Export",
    description: "Export designs as PowerPoint or PDF for stakeholder review."
  }
];

const keyFeatures = [
  {
    icon: FileText,
    title: "Architecture Description",
    description: "Detailed analysis of components, services, and their relationships with best practices."
  },
  {
    icon: Terminal,
    title: "Architecture Diagram",
    description: "Interactive visual representations using industry-standard notation and patterns."
  },
  {
    icon: BarChart4,
    title: "Cost Estimation",
    description: "Detailed monthly cost breakdowns with optimization recommendations."
  },
  {
    icon: Code2,
    title: "Infrastructure as Code",
    description: "Production-ready Terraform configurations with deployment instructions."
  },
  {
    icon: Cpu,
    title: "Real-time Analytics",
    description: "Monitor and analyze your architecture performance in real-time."
  },
  {
    icon: Cloud,
    title: "Quick Integration",
    description: "Seamlessly integrate with your existing cloud infrastructure."
  }
];

const features = [
  {
    icon: Cloud,
    title: 'Web Applications',
    items: ['Scalable web services', 'E-commerce platforms', 'Content management systems']
  },
  {
    icon: Database,
    title: 'Data Processing',
    items: ['Big data pipelines', 'Real-time analytics', 'ETL workflows']
  },
  {
    icon: Network2,
    title: 'Microservices',
    items: ['Container orchestration', 'Service mesh', 'API gateways']
  }
];

const learningPlans = [
  {
    title: "Azure AI Foundry",
    description: "Master the fundamentals of Azure AI services and development patterns",
    url: "https://learn.microsoft.com/en-us/plans/7w07c8tk4m8y4p",
    icon: Brain,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Secure Azure & GitHub Development",
    description: "Learn to build, test, and deploy applications securely with GitHub and Azure",
    url: "https://learn.microsoft.com/en-us/plans/w1y7uo86pmpzey",
    icon: Shield,
    color: "from-purple-500 to-pink-400"
  }
];

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50"></div>
              <Brain className="w-16 h-16 text-blue-400 relative z-10" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight">
            Design Cloud Architecture with
            <div className="relative inline-block mx-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                AI-Powered
              </span>
            </div>
            Intelligence
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transform your cloud infrastructure design process with intelligent recommendations,
            automated diagrams, and infrastructure as code generation.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <div className="relative grid md:grid-cols-2 gap-4">
                <motion.a
                  href="https://azureaideveloperhackathon.azurewebsites.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-1"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  id="experience-future-link"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  
                  <div className="relative bg-black/50 backdrop-blur-xl rounded-xl p-8 border border-white/5 group-hover:border-blue-500/30 transition-all duration-500">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
                          
                          <div className="relative bg-black/50 p-4 rounded-full border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
                            <Zap className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-500 transform group-hover:rotate-12" />
                          </div>
                        </div>
                        <div className="text-left">
                          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                            Try the AI Application
                          </h2>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            Explore AI-powered cloud architecture design
                          </p>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ 
                          x: isHovered ? [0, 5, 0] : 0,
                          rotate: isHovered ? [0, 15, 0] : 0
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: isHovered ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:bg-blue-400/30 transition-colors duration-500"></div>
                        <ExternalLink className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors relative z-10" />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/TWILIGHTCLOUDCODERZ/AI-POWERED-INTELIGENCE.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 p-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-black/50 backdrop-blur-xl rounded-xl p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-md animate-pulse"></div>
                          <div className="relative bg-black/50 p-3 rounded-full">
                            <Github className="w-8 h-8 text-purple-400" />
                          </div>
                        </div>
                        <div className="text-left">
                          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-blue-400 transition-all duration-300">
                            View Source Code
                          </h2>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            Explore the codebase on GitHub
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ExternalLink className="w-6 h-6 text-purple-400" />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            <PointerGuide targetElementId="experience-future-link" />
          </motion.div>

          <ProjectDemo />

          <UseCase />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Example Prompts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {examplePrompts.map((prompt, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glow-card rounded-xl p-6"
                >
                  <p className="text-gray-300">{prompt}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glow-card rounded-xl p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-white ml-4">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glow-card rounded-xl p-6"
                >
                  <feature.icon className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Roadmap className="mb-24" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 neon-text">Get Trained</h3>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Enhance your skills with Microsoft's comprehensive learning plans for the Azure AI Developer Hackathon
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {learningPlans.map((plan, index) => (
                <motion.a
                  key={index}
                  href={plan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-5 group-hover:opacity-10 transition-all duration-300`} />
                  <div className="relative glow-card rounded-xl p-6 backdrop-blur-sm border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${plan.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                        <plan.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white ml-4">{plan.title}</h4>
                    </div>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                      {plan.description}
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      <span>Start Learning</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}