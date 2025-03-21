import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, CheckCircle, TrendingUp, Users, Blocks, Clock, Shield, Cloud, Code2, Brain, DollarSign, Rocket } from 'lucide-react';

const problemStatement = {
  title: "The Challenge",
  description: "Cloud architects and developers face significant challenges in designing and implementing cloud solutions:",
  points: [
    "Time-consuming manual architecture design process",
    "Inconsistent application of best practices",
    "Complex decision-making across multiple cloud services",
    "Difficulty in maintaining up-to-date documentation",
    "Risk of security oversights and compliance issues"
  ]
};

const solution = {
  title: "Our Solution",
  description: "AI-powered cloud architecture assistant that revolutionizes the design process:",
  points: [
    "Automated architecture recommendations based on requirements",
    "Real-time best practice validation",
    "Intelligent service selection and configuration",
    "Automated documentation generation",
    "Built-in security and compliance checks"
  ]
};

const benefits = [
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Reduce architecture design time by 75% through AI-powered automation"
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Ensure consistent application of security best practices and compliance requirements"
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization",
    description: "Achieve 40% cost savings through optimized architecture recommendations"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Improve team collaboration with shared architecture knowledge"
  }
];

const targetAudience = [
  {
    role: "Cloud Architects",
    icon: Cloud,
    benefits: [
      "Accelerated architecture design",
      "Best practice validation",
      "Automated documentation"
    ]
  },
  {
    role: "DevOps Engineers",
    icon: Code2,
    benefits: [
      "Infrastructure as code generation",
      "Deployment automation",
      "Performance optimization"
    ]
  },
  {
    role: "Solution Architects",
    icon: Brain,
    benefits: [
      "Rapid prototyping",
      "Pattern recognition",
      "Cost estimation"
    ]
  },
  {
    role: "Technical Leaders",
    icon: Users,
    benefits: [
      "Informed decision making",
      "Risk reduction",
      "Resource optimization"
    ]
  }
];

const impact = {
  title: "Business Impact",
  description: "Transforming cloud architecture with measurable results",
  metrics: [
    {
      stat: "75%",
      label: "Reduction in design time",
      icon: Clock,
      color: "from-cyan-400 to-blue-400"
    },
    {
      stat: "40%",
      label: "Cost savings",
      icon: DollarSign,
      color: "from-emerald-400 to-green-400"
    },
    {
      stat: "90%",
      label: "Accuracy improvement",
      icon: Target,
      color: "from-violet-400 to-purple-400"
    },
    {
      stat: "60%",
      label: "Faster deployment",
      icon: Rocket,
      color: "from-pink-400 to-rose-400"
    }
  ]
};

function UseCase() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
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
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50"
              />
              <Target className="w-16 h-16 text-blue-400 relative z-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">Why AI Architecture Assistant?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Transforming cloud architecture design with AI-powered intelligence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300" />
              <div className="relative glow-card rounded-xl p-8 backdrop-blur-sm border border-red-500/20 group-hover:border-red-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-red-500/20 group-hover:bg-red-500/30 transition-colors duration-300">
                    <Lightbulb className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">{problemStatement.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{problemStatement.description}</p>
                <ul className="space-y-4">
                  {problemStatement.points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start text-gray-300 group"
                    >
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform duration-300" />
                      <span className="group-hover:text-gray-200 transition-colors duration-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300" />
              <div className="relative glow-card rounded-xl p-8 backdrop-blur-sm border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">{solution.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{solution.description}</p>
                <ul className="space-y-4">
                  {solution.points.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start text-gray-300 group"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform duration-300" />
                      <span className="group-hover:text-gray-200 transition-colors duration-300">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center neon-text">Key Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300" />
                <div className="relative glow-card rounded-xl p-6 backdrop-blur-sm border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                      <benefit.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white ml-3">{benefit.title}</h4>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4 neon-text">Who Benefits?</h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Empowering professionals across the cloud architecture landscape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300" />
                <div className="relative glow-card rounded-xl p-6 backdrop-blur-sm border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                      <audience.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white ml-3">{audience.role}</h4>
                  </div>
                  <ul className="space-y-3">
                    {audience.benefits.map((benefit, benefitIndex) => (
                      <motion.li
                        key={benefitIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: benefitIndex * 0.1 }}
                        className="flex items-start text-gray-300 group"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 group-hover:scale-125 transition-transform duration-300" />
                        <span className="group-hover:text-gray-200 transition-colors duration-300">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {impact.title}
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {impact.description}
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {impact.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className="relative z-10 flex justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="p-3 rounded-full border border-blue-400/30 group-hover:border-blue-400/50 transition-all duration-300">
                      <metric.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative z-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {metric.stat}
                    </div>
                    <div className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {metric.label}
                    </div>
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default UseCase;