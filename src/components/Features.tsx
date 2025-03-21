import React from 'react';
import { Brain, Cloud, Code2, BarChart4, FileText, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Design',
    description: 'Intelligent architecture recommendations based on your requirements and best practices.'
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud Support',
    description: 'Design architectures for AWS, Azure, and Google Cloud Platform with native service integration.'
  },
  {
    icon: Code2,
    title: 'Infrastructure as Code',
    description: 'Automatically generate Terraform code for your architecture designs.'
  },
  {
    icon: BarChart4,
    title: 'Cost Analysis',
    description: 'Real-time cost estimation and optimization recommendations for your infrastructure.'
  },
  {
    icon: FileText,
    title: 'Documentation Export',
    description: 'Export detailed architecture documentation in multiple formats including PDF and PowerPoint.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Built-in security best practices and compliance checks for your architecture.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-slate-800" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to design, implement, and maintain your cloud architecture
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition">
              <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}