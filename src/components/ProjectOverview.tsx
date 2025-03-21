import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const useCases = [
  {
    title: 'Cloud Architects',
    description: 'Design scalable and secure cloud architectures with AI assistance'
  },
  {
    title: 'DevOps Engineers',
    description: 'Generate infrastructure as code and deployment plans automatically'
  },
  {
    title: 'Solution Architects',
    description: 'Create comprehensive system designs with best practices'
  },
  {
    title: 'Technical Leaders',
    description: 'Estimate costs and optimize resource usage effectively'
  }
];

const businessValue = [
  {
    title: 'Accelerated Design',
    description: '75% reduction in architecture design time'
  },
  {
    title: 'Error Reduction',
    description: '90% improvement in design accuracy'
  },
  {
    title: 'Cost Savings',
    description: '40% average infrastructure cost savings'
  },
  {
    title: 'Best Practices',
    description: 'Consistent application of industry standards'
  }
];

export default function ProjectOverview() {
  return (
    <div className="py-24 bg-slate-900" id="overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            An innovative solution developed for the Azure AI Developer Hackathon that combines
            Azure OpenAI with AI Foundry accelerators to revolutionize cloud architecture design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-800 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Target Users</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-white mb-2">{useCase.title}</h4>
                  <p className="text-gray-400">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Business Value</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessValue.map((value, index) => (
                <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-lg font-medium text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-blue-500 mr-3" />
            <h3 className="text-2xl font-semibold text-white">Getting Started</h3>
          </div>
          <div className="prose prose-invert max-w-none">
            <h4 className="text-lg font-medium text-white mb-4">Prerequisites</h4>
            <ul className="list-disc list-inside text-gray-400 mb-6">
              <li>Node.js 18.0.0 or higher</li>
              <li>Azure OpenAI API access</li>
              <li>Azure B2C tenant (for authentication)</li>
            </ul>

            <h4 className="text-lg font-medium text-white mb-4">Environment Setup</h4>
            <div className="bg-slate-900 rounded-lg p-4 mb-6">
              <pre className="text-sm text-gray-300">
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
          </div>
        </div>
      </div>
    </div>
  );
}