import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain,
  Shield,
  Building2,
  Rocket,
  Sparkles,
  Code2,
  Globe,
  Cpu,
  Cloud,
  Lock,
  Database,
  Network,
  ChevronDown,
  MessageSquare,
  GitBranch,
  Zap,
  Smartphone,
  Users,
  FileCode,
  Settings,
  Bot,
  LineChart,
  Workflow,
  VolumeX,
  Blocks,
  Key
} from 'lucide-react';

const roadmapData = [
  {
    year: '2025',
    quarters: [
      {
        quarter: 'Q2',
        title: 'Foundation Enhancement',
        icon: Brain,
        status: 'In Development',
        color: 'from-blue-500 to-cyan-400',
        description: 'Expanding core capabilities with multi-model AI support and enhanced user experience',
        categories: [
          {
            name: 'AI/ML Capabilities',
            icon: Bot,
            items: [
              'Multi-model AI support (GPT-4, Claude 3, Gemini)',
              'Context-aware architecture recommendations',
              'Enhanced cost estimation with historical data'
            ]
          },
          {
            name: 'User Experience',
            icon: Globe,
            items: [
              'Real-time collaboration features',
              'Architecture version control',
              'Dark mode support',
              'Enhanced custom cursor interactions'
            ]
          },
          {
            name: 'Technical Infrastructure',
            icon: Code2,
            items: [
              'Next.js 14 migration for improved performance',
              'Edge computing capabilities',
              'WebAssembly support for complex calculations',
              'Enhanced caching strategy'
            ]
          }
        ]
      },
      {
        quarter: 'Q3',
        title: 'Advanced Visualization',
        icon: Cpu,
        status: 'Planning',
        color: 'from-indigo-500 to-purple-500',
        description: 'Revolutionizing architecture visualization with 3D/AR capabilities',
        categories: [
          {
            name: '3D/AR Capabilities',
            icon: Globe,
            items: [
              'Implement 3D architecture visualization',
              'AR view for architecture diagrams',
              'Interactive component exploration in 3D',
              'Real-time architecture manipulation'
            ]
          },
          {
            name: 'Cloud Integration',
            icon: Cloud,
            items: [
              'Multi-cloud comparison features',
              'Cloud resource optimization suggestions',
              'Real-time pricing updates',
              'Cloud provider-specific best practices'
            ]
          },
          {
            name: 'Security',
            icon: Shield,
            items: [
              'Architecture security analysis',
              'Compliance checking',
              'Vulnerability scanning',
              'Enhanced authentication methods'
            ]
          }
        ]
      },
      {
        quarter: 'Q4',
        title: 'Enterprise Features',
        icon: Building2,
        status: 'Planning',
        color: 'from-violet-500 to-purple-500',
        description: 'Empowering team collaboration and enterprise integration',
        categories: [
          {
            name: 'Collaboration',
            icon: Users,
            items: [
              'Team workspaces',
              'Real-time commenting system',
              'Architecture review workflow',
              'Change tracking and approvals'
            ]
          },
          {
            name: 'Integration',
            icon: GitBranch,
            items: [
              'CI/CD pipeline integration',
              'Git repository synchronization',
              'Jira/Azure DevOps integration',
              'Slack/Teams notifications'
            ]
          },
          {
            name: 'Analytics',
            icon: LineChart,
            items: [
              'Architecture performance metrics',
              'Cost optimization analytics',
              'Usage pattern analysis',
              'Team collaboration insights'
            ]
          }
        ]
      }
    ]
  },
  {
    year: '2026',
    quarters: [
      {
        quarter: 'Q1',
        title: 'AI Enhancement',
        icon: Sparkles,
        status: 'Future',
        color: 'from-purple-500 to-pink-500',
        description: 'Advanced AI capabilities for intelligent architecture design',
        categories: [
          {
            name: 'Advanced AI Features',
            icon: Brain,
            items: [
              'Predictive scaling recommendations',
              'AI-powered architecture optimization',
              'Natural language architecture queries',
              'Automated documentation generation'
            ]
          },
          {
            name: 'Machine Learning',
            icon: Bot,
            items: [
              'Cost prediction models',
              'Performance optimization suggestions',
              'Security risk assessment',
              'Resource usage forecasting'
            ]
          },
          {
            name: 'Automation',
            icon: Workflow,
            items: [
              'Automated compliance checking',
              'Self-healing architecture suggestions',
              'Automated cost optimization',
              'Performance bottleneck detection'
            ]
          }
        ]
      },
      {
        quarter: 'Q2',
        title: 'Extended Reality',
        icon: Globe,
        status: 'Future',
        color: 'from-pink-500 to-rose-500',
        description: 'Immersive architecture exploration and mobile enhancement',
        categories: [
          {
            name: 'VR Support',
            icon: VolumeX,
            items: [
              'VR architecture exploration',
              'Virtual team collaboration',
              '3D architecture presentations',
              'Immersive design reviews'
            ]
          },
          {
            name: 'Mobile Enhancement',
            icon: Smartphone,
            items: [
              'Native mobile applications',
              'Mobile AR support',
              'Offline capabilities',
              'Touch-optimized interfaces'
            ]
          },
          {
            name: 'Performance',
            icon: Zap,
            items: [
              'WebGL performance optimization',
              'Reduced bundle size',
              'Improved loading times',
              'Enhanced mobile performance'
            ]
          }
        ]
      },
      {
        quarter: 'Q3',
        title: 'Enterprise Scale',
        icon: Building2,
        status: 'Vision',
        color: 'from-rose-500 to-red-500',
        description: 'Enterprise-grade features and governance',
        categories: [
          {
            name: 'Governance',
            icon: Shield,
            items: [
              'Role-based access control',
              'Audit logging',
              'Compliance reporting',
              'Policy enforcement'
            ]
          },
          {
            name: 'Enterprise Integration',
            icon: Settings,
            items: [
              'SSO integration',
              'Active Directory support',
              'Enterprise API gateway',
              'Custom plugin system'
            ]
          },
          {
            name: 'Data Management',
            icon: Database,
            items: [
              'Enhanced data retention',
              'Backup and restore',
              'Data encryption at rest',
              'GDPR compliance tools'
            ]
          }
        ]
      },
      {
        quarter: 'Q4',
        title: 'Future Tech',
        icon: Rocket,
        status: 'Vision',
        color: 'from-red-500 to-orange-500',
        description: 'Cutting-edge technology integration and future-proofing',
        categories: [
          {
            name: 'Quantum Computing',
            icon: Cpu,
            items: [
              'Quantum-resistant security',
              'Quantum optimization algorithms',
              'Quantum-inspired architecture patterns'
            ]
          },
          {
            name: 'Blockchain',
            icon: Blocks,
            items: [
              'Architecture NFT support',
              'Decentralized architecture storage',
              'Smart contract integration',
              'Blockchain-based verification'
            ]
          },
          {
            name: 'AI/ML Evolution',
            icon: Brain,
            items: [
              'Next-gen AI model integration',
              'Automated architecture evolution',
              'AI-driven security hardening',
              'Predictive maintenance'
            ]
          }
        ]
      }
    ]
  }
];

interface RoadmapProps {
  className?: string;
}

function Roadmap({ className = '' }: RoadmapProps) {
  const [expandedQuarters, setExpandedQuarters] = useState<string[]>([]);

  const toggleQuarter = (yearQuarter: string) => {
    setExpandedQuarters(prev => 
      prev.includes(yearQuarter)
        ? prev.filter(q => q !== yearQuarter)
        : [...prev, yearQuarter]
    );
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-2 neon-text">Development Roadmap</h2>
        <p className="text-lg text-gray-400">Q2 2025 - Q4 2026</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50"></div>

        <div className="space-y-24">
          {roadmapData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="relative">
              {/* Year marker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 mb-16"
              >
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-lg opacity-50"></div>
                    <div className="relative bg-black/50 px-6 py-2 rounded-full border border-blue-500/30">
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        {yearData.year}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quarters */}
              <div className="space-y-16">
                {yearData.quarters.map((quarter, quarterIndex) => {
                  const yearQuarter = `${yearData.year}-${quarter.quarter}`;
                  const isExpanded = expandedQuarters.includes(yearQuarter);

                  return (
                    <motion.div
                      key={quarterIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: quarterIndex * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${quarter.color}`}></div>
                      </div>

                      {/* Quarter content */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className={`relative max-w-3xl mx-auto ${
                          quarterIndex % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'
                        }`}
                      >
                        <div 
                          onClick={() => toggleQuarter(yearQuarter)}
                          className="glow-card rounded-xl p-4 cursor-pointer backdrop-blur-sm relative overflow-hidden group"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${quarter.color} opacity-5`}></div>
                          <div className="relative">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${quarter.color} bg-opacity-10`}>
                                  <quarter.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-lg font-semibold text-white">{quarter.quarter}</h4>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                                      quarter.status === 'In Development'
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : quarter.status === 'Planning'
                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        : quarter.status === 'Future'
                                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                    }`}>
                                      {quarter.status}
                                    </span>
                                  </div>
                                  <h3 className={`text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${quarter.color}`}>
                                    {quarter.title}
                                  </h3>
                                </div>
                              </div>
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              </motion.div>
                            </div>
                            <p className="text-sm text-gray-400">{quarter.description}</p>

                            {/* Expandable content */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    {quarter.categories.map((category, categoryIndex) => (
                                      <motion.div
                                        key={categoryIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: categoryIndex * 0.1 }}
                                        className="bg-black/20 rounded-lg p-3 backdrop-blur-sm border border-white/5"
                                      >
                                        <div className="flex items-center gap-2 mb-2">
                                          <category.icon className="w-4 h-4 text-gray-300" />
                                          <h5 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                                            {category.name}
                                          </h5>
                                        </div>
                                        <ul className="space-y-1.5">
                                          {category.items.map((item, itemIndex) => (
                                            <motion.li
                                              key={itemIndex}
                                              initial={{ opacity: 0, x: -5 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                                              className="flex items-start gap-1.5 text-gray-400 text-xs group"
                                            >
                                              <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${quarter.color} mt-1.5 group-hover:scale-110 transition-transform`}></div>
                                              <span>{item}</span>
                                            </motion.li>
                                          ))}
                                        </ul>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;