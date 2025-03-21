import React from 'react';
import { Cloud, Shield, Cpu, Code } from 'lucide-react';

const technologies = {
  azure: [
    { name: 'Azure OpenAI', description: 'GPT-4 for intelligent processing' },
    { name: 'Azure Entra B2C', description: 'Secure authentication' },
    { name: 'Azure Web Apps', description: 'Application hosting' },
    { name: 'Azure Monitor', description: 'Performance monitoring' }
  ],
  frontend: [
    { name: 'React with TypeScript', description: 'Modern web development' },
    { name: 'Three.js', description: '3D visualization' },
    { name: 'Tailwind CSS', description: 'Responsive styling' },
    { name: 'React Flow', description: 'Architecture diagrams' }
  ],
  ai: [
    { name: 'AI Foundry Accelerators', description: 'Pre-built AI components' },
    { name: 'Custom Prompt Engineering', description: 'Optimized AI interactions' },
    { name: 'Pattern Recognition', description: 'Architecture analysis' },
    { name: 'Cost Optimization', description: 'AI-driven cost analysis' }
  ]
};

export default function TechStack() {
  return (
    <div className="py-24 bg-slate-800" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Architecture & Technology Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built with modern technologies and best practices to deliver a powerful and secure solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-700 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <Cloud className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-white">Azure Services</h3>
            </div>
            <div className="space-y-4">
              {technologies.azure.map((tech, index) => (
                <div key={index} className="bg-slate-600/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-1">{tech.name}</h4>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-700 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-white">Frontend Stack</h3>
            </div>
            <div className="space-y-4">
              {technologies.frontend.map((tech, index) => (
                <div key={index} className="bg-slate-600/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-1">{tech.name}</h4>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-700 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <Cpu className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-white">AI Components</h3>
            </div>
            <div className="space-y-4">
              {technologies.ai.map((tech, index) => (
                <div key={index} className="bg-slate-600/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-1">{tech.name}</h4>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}