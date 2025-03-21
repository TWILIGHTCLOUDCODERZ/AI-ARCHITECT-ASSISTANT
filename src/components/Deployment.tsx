import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Terminal, 
  Settings, 
  Shield, 
  Monitor, 
  Database,
  AlertCircle,
  CheckCircle2,
  Server,
  Key,
  Code,
  Download,
  FileCode,
  PlayCircle
} from 'lucide-react';

const prerequisites = [
  {
    icon: Terminal,
    title: 'Azure CLI',
    description: 'Install the Azure Command Line Interface',
    command: 'curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash'
  },
  {
    icon: Key,
    title: 'Azure Account',
    description: 'Active Azure subscription required',
    command: 'az login'
  },
  {
    icon: Cloud,
    title: 'Node.js',
    description: 'Node.js 18.0.0 or higher',
    command: 'node --version'
  },
  {
    icon: Server,
    title: 'Build Tools',
    description: 'Required development tools',
    command: 'npm install'
  }
];

const localSetupSteps = [
  {
    icon: Download,
    title: 'Clone Repository',
    description: 'Download source code from GitHub',
    command: 'git clone https://github.com/TWILIGHTCLOUDCODERZ/Azure-AI-Architect-Assistant.git'
  },
  {
    icon: FileCode,
    title: 'Configure Environment',
    description: 'Set up environment variables',
    command: 'Create .env file with required secrets'
  },
  {
    icon: Terminal,
    title: 'Install Dependencies',
    description: 'Install required packages',
    command: 'npm install'
  },
  {
    icon: PlayCircle,
    title: 'Start Development Server',
    description: 'Run the application locally',
    command: 'npm run dev'
  }
];

const deploymentSteps = [
  {
    title: 'Build Application',
    steps: [
      'Run production build: npm run build',
      'Verify build output in dist/ directory',
      'Test production build locally',
      'Prepare deployment package'
    ]
  },
  {
    title: 'Azure Setup',
    steps: [
      'Create Resource Group',
      'Configure Web App Service',
      'Set up deployment credentials',
      'Configure deployment slots'
    ]
  },
  {
    title: 'Configuration',
    steps: [
      'Set environment variables',
      'Configure application settings',
      'Set up connection strings',
      'Configure runtime stack'
    ]
  },
  {
    title: 'Deployment',
    steps: [
      'Deploy to staging slot',
      'Run integration tests',
      'Verify deployment',
      'Swap to production'
    ]
  }
];

const monitoringTools = [
  {
    icon: Monitor,
    title: 'Application Insights',
    description: 'Real-time monitoring and analytics',
    features: ['Performance metrics', 'Error tracking', 'User behavior', 'Custom events']
  },
  {
    icon: Shield,
    title: 'Security Center',
    description: 'Advanced security monitoring',
    features: ['Threat detection', 'Compliance checks', 'Security alerts', 'Best practices']
  },
  {
    icon: Database,
    title: 'Deployment Center',
    description: 'Deployment management',
    features: ['Deployment history', 'Release management', 'Rollback options', 'Logs access']
  }
];

export default function Deployment() {
  return (
    <div className="min-h-screen bg-transparent pt-32" id="deployment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 neon-text">Deployment Guide</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Step-by-step instructions for deploying your application to Azure
          </p>
        </motion.div>

        {/* Local Development Setup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Local Development Setup</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localSetupSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card rounded-xl p-6"
              >
                <step.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                <div className="bg-slate-800 rounded-lg p-3">
                  <code className="text-sm text-blue-400">{step.command}</code>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Environment Setup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Environment Setup</h3>
          <div className="glow-card rounded-xl p-6">
            <div className="flex items-center mb-6">
              <Code className="w-8 h-8 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-white">Required Environment Variables</h4>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-blue-400">
                <code>{`# Azure OpenAI Configuration
VITE_AZURE_OPENAI_ENDPOINT=https://your-endpoint.openai.azure.com/
VITE_AZURE_OPENAI_KEY=your-api-key

# Azure B2C Configuration
VITE_AZURE_B2C_CLIENT_ID=your-client-id
VITE_AZURE_B2C_AUTHORITY=https://your-tenant.b2clogin.com/your-tenant.onmicrosoft.com/policy-name
VITE_AZURE_B2C_KNOWN_AUTHORITY=https://your-tenant.b2clogin.com
VITE_AZURE_B2C_REDIRECT_URI=http://localhost:5173/`}</code>
              </pre>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Create a <code className="text-blue-400">.env</code> file in the root directory and add these environment variables with your actual values.
              Alternatively, use Azure Key Vault for secure secrets management in production.
            </p>
          </div>
        </motion.div>

        {/* Prerequisites Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Prerequisites</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prerequisites.map((prereq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card rounded-xl p-6"
              >
                <prereq.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{prereq.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{prereq.description}</p>
                <div className="bg-slate-800 rounded-lg p-3">
                  <code className="text-sm text-blue-400">{prereq.command}</code>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deployment Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Deployment Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentSteps.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Monitoring & Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 neon-text">Monitoring & Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {monitoringTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card rounded-xl p-6"
              >
                <tool.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{tool.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 glow-card rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-blue-400 mr-2" />
              <h4 className="text-lg font-semibold text-white">Important Notes</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Ensure all environment variables are properly configured in Azure App Service application settings
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Use staging slots for zero-downtime deployments and testing before production
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Regularly monitor application performance and security alerts
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}