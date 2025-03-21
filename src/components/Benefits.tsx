import React from 'react';
import { Rocket, Clock, Target, Lightbulb } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Time Savings',
    description: '75% reduction in architecture design time through AI-powered automation'
  },
  {
    icon: Target,
    title: 'Accuracy',
    description: '90% improvement in design accuracy with built-in best practices'
  },
  {
    icon: Rocket,
    title: 'Cost Reduction',
    description: '40% average infrastructure cost savings through optimized designs'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Access to cutting-edge architecture patterns and practices'
  }
];

const futureEnhancements = [
  'Multi-cloud architecture support',
  'Real-time collaboration capabilities',
  'Advanced security analysis',
  'Custom template library',
  'AI-powered cost optimization',
  'Automated compliance checking'
];

export default function Benefits() {
  return (
    <div className="py-24 bg-slate-800" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Benefits & Future Vision</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming cloud architecture design with measurable improvements and continuous innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Key Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-700 rounded-xl p-6">
                  <benefit.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Future Enhancements</h3>
            <div className="bg-slate-700 rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {futureEnhancements.map((enhancement, index) => (
                  <div key={index} className="bg-slate-600/50 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                      <p className="text-gray-300">{enhancement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}