import React, { useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls,
  Node,
  Edge,
  ConnectionMode,
  MarkerType
} from 'reactflow';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Lock, 
  Database, 
  Code2, 
  BarChart4, 
  Cpu, 
  Shield,
  Workflow,
  Settings,
  Bot,
  Network,
  MessageSquare,
  Search,
  FileCode,
  Zap,
  Github,
  Terminal,
  Server,
  Globe,
  Laptop,
  Layers,
  TestTube,
  Bug,
  Sparkles
} from 'lucide-react';
import 'reactflow/dist/style.css';

const nodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: (
        <div className="flex items-center p-2">
          <Bot className="w-5 h-5 mr-2 text-pink-400" />
          <span>Azure AI Foundry</span>
        </div>
      )
    },
    position: { x: 250, y: 0 },
    className: 'glow-card'
  },
  {
    id: '2',
    data: { 
      label: (
        <div className="flex items-center p-2">
          <Brain className="w-5 h-5 mr-2 text-purple-400" />
          <span>Azure OpenAI</span>
        </div>
      )
    },
    position: { x: 100, y: 100 },
    className: 'glow-card'
  },
  {
    id: '3',
    data: { 
      label: (
        <div className="flex items-center p-2">
          <Cloud className="w-5 h-5 mr-2 text-cyan-400" />
          <span>Azure Web Apps</span>
        </div>
      )
    },
    position: { x: 400, y: 100 },
    className: 'glow-card'
  },
  {
    id: '4',
    data: { 
      label: (
        <div className="flex items-center p-2">
          <Lock className="w-5 h-5 mr-2 text-blue-400" />
          <span>Azure Entra B2C</span>
        </div>
      )
    },
    position: { x: 250, y: 200 },
    className: 'glow-card'
  },
  {
    id: '5',
    data: { 
      label: (
        <div className="flex items-center p-2">
          <Database className="w-5 h-5 mr-2 text-green-400" />
          <span>Azure Storage</span>
        </div>
      )
    },
    position: { x: 100, y: 300 },
    className: 'glow-card'
  },
  {
    id: '6',
    data: { 
      label: (
        <div className="flex items-center p-2">
          <Database className="w-5 h-5 mr-2 text-orange-400" />
          <span>Azure SQL Database</span>
        </div>
      )
    },
    position: { x: 400, y: 300 },
    className: 'glow-card'
  }
];

const edges: Edge[] = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    animated: true,
    style: { stroke: '#ec4899' },
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3', 
    animated: true,
    style: { stroke: '#9333ea' },
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  { 
    id: 'e3-4', 
    source: '3', 
    target: '4', 
    animated: true,
    style: { stroke: '#06b6d4' },
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  { 
    id: 'e4-5', 
    source: '4', 
    target: '5', 
    animated: true,
    style: { stroke: '#3b82f6' },
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  { 
    id: 'e4-6', 
    source: '4', 
    target: '6', 
    animated: true,
    style: { stroke: '#3b82f6' },
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  { 
    id: 'e3-5', 
    source: '3', 
    target: '5', 
    animated: true,
    style: { stroke: '#06b6d4' },
    markerEnd: { type: MarkerType.ArrowClosed }
  },
  { 
    id: 'e3-6', 
    source: '3', 
    target: '6', 
    animated: true,
    style: { stroke: '#06b6d4' },
    markerEnd: { type: MarkerType.ArrowClosed }
  }
];

const technicalRequirements = {
  functional: [
    {
      icon: Globe,
      title: 'Frontend Technologies',
      items: [
        'React 18.3 with TypeScript',
        'Vite for build optimization',
        'Three.js for 3D visualization',
        'Framer Motion animations',
        'TailwindCSS for styling',
        'React Flow for diagrams'
      ]
    },
    {
      icon: Server,
      title: 'Azure Services',
      items: [
        'Azure OpenAI Service',
        'Azure Web App Service',
        'Azure App Insights',
        'Azure Monitoring',
        'Azure SQL Database',
        'Azure Entra B2C'
      ]
    }
  ],
  nonFunctional: [
    {
      icon: Zap,
      title: 'Performance',
      items: [
        'Sub-second response time',
        'Auto-scaling capabilities',
        'CDN integration',
        'Lazy loading',
        'Code splitting',
        'Resource optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      items: [
        'Azure AD B2C auth',
        'Role-based access',
        'Data encryption',
        'SSL/TLS encryption',
        'DDoS protection',
        'WAF implementation'
      ]
    },
    {
      icon: Laptop,
      title: 'Compatibility',
      items: [
        'Cross-browser support',
        'Responsive design',
        'Mobile optimization',
        'PWA capabilities',
        'Accessibility (WCAG)',
        'Multi-device support'
      ]
    }
  ]
};

const devTooling = [
  {
    icon: Github,
    name: 'GitHub Copilot',
    description: 'AI-powered code completion and generation',
    features: [
      'Real-time code suggestions',
      'Error detection and fixes',
      'Test case generation',
      'Documentation assistance',
      'Code refactoring hints',
      'Security vulnerability detection'
    ],
    color: 'from-purple-400 to-pink-400'
  },
  {
    icon: Terminal,
    name: 'Development Tools',
    description: 'Modern development workflow and tooling',
    features: [
      'Visual Studio 2022',
      'ESLint + Prettier',
      'Husky pre-commit hooks',
      'Jest for testing',
      'GitHub Actions CI/CD',
      'Azure DevOps'
    ],
    color: 'from-blue-400 to-cyan-400'
  },
  {
    icon: Bug,
    name: 'Quality Assurance',
    description: 'Comprehensive testing and monitoring',
    features: [
      'Unit testing',
      'Integration testing',
      'E2E testing with Cypress',
      'Performance monitoring',
      'Error tracking',
      'User analytics'
    ],
    color: 'from-green-400 to-emerald-400'
  }
];

const aiFoundryAccelerators = [
  {
    icon: Bot,
    name: 'Architecture Pattern Recognition',
    description: 'Pre-trained models identify optimal architecture patterns based on requirements',
    features: [
      'Pattern matching with best practices',
      'Scalability analysis',
      'Security compliance checks',
      'Cost optimization recommendations'
    ]
  },
  {
    icon: Network,
    name: 'Infrastructure Analysis',
    description: 'Automated analysis of existing infrastructure and optimization recommendations',
    features: [
      'Resource utilization analysis',
      'Performance bottleneck detection',
      'Scaling recommendations',
      'Disaster recovery planning'
    ]
  },
  {
    icon: MessageSquare,
    name: 'Natural Language Processing',
    description: 'Advanced NLP for understanding technical requirements and constraints',
    features: [
      'Context-aware requirement analysis',
      'Technical specification extraction',
      'Compliance requirement detection',
      'Architecture constraint identification'
    ]
  },
  {
    icon: Search,
    name: 'Intelligent Search & Discovery',
    description: 'Smart search across architecture patterns and best practices',
    features: [
      'Pattern similarity search',
      'Best practice recommendations',
      'Use case matching',
      'Reference architecture discovery'
    ]
  }
];

const coreServices = [
  {
    icon: Bot,
    name: 'Azure AI Foundry',
    description: 'Accelerates AI development with pre-built components',
    features: [
      'Custom model development',
      'MLOps automation',
      'Model deployment optimization',
      'Performance monitoring'
    ]
  },
  {
    icon: Brain,
    name: 'Azure OpenAI Service',
    description: 'Powers intelligent architecture recommendations using GPT-4',
    features: [
      'Natural language understanding',
      'Context-aware responses',
      'Technical documentation generation',
      'Architecture pattern recognition'
    ]
  },
  {
    icon: Cloud,
    name: 'Azure Web Apps',
    description: 'Scalable and secure application hosting platform',
    features: [
      'Auto-scaling capabilities',
      'Built-in CI/CD',
      'SSL/TLS encryption',
      'Application monitoring'
    ]
  },
  {
    icon: Lock,
    name: 'Azure Entra B2C',
    description: 'Enterprise-grade identity management and access control',
    features: [
      'Secure authentication',
      'Role-based access control',
      'Multi-factor authentication',
      'Identity protection'
    ]
  },
  {
    icon: Database,
    name: 'Azure Storage',
    description: 'Secure and scalable data storage solution',
    features: [
      'Blob storage for assets',
      'Table storage for metadata',
      'Queue storage for processing',
      'File storage for sharing'
    ]
  },
  {
    icon: Database,
    name: 'Azure SQL Database',
    description: 'Managed relational database service',
    features: [
      'Automatic scaling',
      'High availability',
      'Advanced security',
      'Built-in intelligence'
    ]
  }
];

const integrationFeatures = [
  {
    icon: FileCode,
    name: 'Code Generation',
    description: 'Automated generation of infrastructure as code and deployment templates',
    benefits: [
      'Terraform configuration generation',
      'ARM template creation',
      'Docker compose files',
      'Kubernetes manifests'
    ]
  },
  {
    icon: Settings,
    name: 'Configuration Management',
    description: 'Intelligent management of application and infrastructure configurations',
    benefits: [
      'Environment-specific configs',
      'Secret management',
      'Configuration validation',
      'Version control integration'
    ]
  },
  {
    icon: Workflow,
    name: 'Workflow Automation',
    description: 'Automated deployment and management workflows',
    benefits: [
      'CI/CD pipeline generation',
      'Infrastructure provisioning',
      'Security scanning',
      'Compliance checks'
    ]
  },
  {
    icon: Zap,
    name: 'Performance Optimization',
    description: 'AI-driven performance optimization and scaling',
    benefits: [
      'Load balancing configuration',
      'Auto-scaling rules',
      'Resource optimization',
      'Cost management'
    ]
  }
];

export default function Architecture() {
  const onInit = useCallback(() => {
    console.log('Flow initialized');
  }, []);

  return (
    <div className="min-h-screen bg-transparent pt-32" id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 neon-text">System Architecture</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A modern, scalable architecture leveraging Azure services including AI Foundry, OpenAI, and managed database services
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Architecture Overview</h3>
          <div className="glow-card rounded-xl p-8 backdrop-blur-sm">
            <div style={{ height: 500 }}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onInit={onInit}
                connectionMode={ConnectionMode.Loose}
                fitView
                className="bg-slate-900/30 rounded-lg"
              >
                <Background />
                <Controls />
              </ReactFlow>
            </div>
          </div>
        </motion.div>

        {/* Technical Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Technical Requirements</h3>
          
          {/* Functional Requirements */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-blue-400 mb-6">Functional Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalRequirements.functional.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl group-hover:opacity-70" />
                  <div className="relative glow-card rounded-xl p-6 backdrop-blur-sm border border-blue-500/20 transition-all duration-300 group-hover:border-blue-400/40">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                        <req.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h5 className="text-lg font-semibold text-white ml-3">{req.title}</h5>
                    </div>
                    <ul className="space-y-2">
                      {req.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Non-Functional Requirements */}
          <div>
            <h4 className="text-xl font-semibold text-purple-400 mb-6">Non-Functional Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalRequirements.nonFunctional.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl transition-all duration-300 group-hover:blur-2xl group-hover:opacity-70" />
                  <div className="relative glow-card rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 transition-all duration-300 group-hover:border-purple-400/40">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
                        <req.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h5 className="text-lg font-semibold text-white ml-3">{req.title}</h5>
                    </div>
                    <ul className="space-y-2">
                      {req.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Development Tooling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Development Tooling</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {devTooling.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative backdrop-blur-sm border border-white/5 rounded-xl p-6 group-hover:border-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${tool.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-3">
                      <h5 className="text-lg font-semibold text-white">{tool.name}</h5>
                      <p className="text-sm text-gray-400">{tool.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                        className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                      >
                        <Sparkles className="w-4 h-4 mr-2 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Foundry Accelerators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Azure AI Foundry Accelerators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiFoundryAccelerators.map((accelerator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <accelerator.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-white mb-2">{accelerator.name}</h4>
                    <p className="text-gray-400 mb-4">{accelerator.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {accelerator.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Azure Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Core Azure Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card rounded-xl p-6 backdrop-blur-sm"
              >
                <service.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Integration & Automation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold text-white mb-2">{feature.name}</h4>
                    <p className="text-gray-400 mb-4">{feature.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}