import React from 'react';
import { Workflow, Lock, FileCode } from 'lucide-react';

export default function Implementation() {
  return (
    <div className="py-24 bg-slate-900" id="implementation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Implementation Details</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A detailed look at how the AI Architecture Assistant works and processes user requests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <Workflow className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-white">Workflow</h3>
            </div>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                <div className="ml-4">
                  <h4 className="text-white font-medium mb-1">Input Requirements</h4>
                  <p className="text-gray-400 text-sm">Users describe their architecture needs through natural language input</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                <div className="ml-4">
                  <h4 className="text-white font-medium mb-1">AI Processing</h4>
                  <p className="text-gray-400 text-sm">Azure OpenAI analyzes requirements and generates recommendations</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                <div className="ml-4">
                  <h4 className="text-white font-medium mb-1">Generation</h4>
                  <p className="text-gray-400 text-sm">System creates diagrams, estimates, and infrastructure code</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                <div className="ml-4">
                  <h4 className="text-white font-medium mb-1">Review & Export</h4>
                  <p className="text-gray-400 text-sm">Users can review, modify, and export the results</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-white">Security</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Authentication</h4>
                <p className="text-gray-400 text-sm">Secure login using Azure B2C with role-based access control</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Data Protection</h4>
                <p className="text-gray-400 text-sm">End-to-end encryption for all data in transit and at rest</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Compliance</h4>
                <p className="text-gray-400 text-sm">Regular security audits and compliance checks</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Updates</h4>
                <p className="text-gray-400 text-sm">Automated security patches and version updates</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6">
            <div className="flex items-center mb-6">
              <FileCode className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-white">Documentation</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Architecture Guides</h4>
                <p className="text-gray-400 text-sm">Detailed explanations of generated architectures</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">User Workflows</h4>
                <p className="text-gray-400 text-sm">Step-by-step guides for common tasks and features</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Best Practices</h4>
                <p className="text-gray-400 text-sm">Recommendations for optimal usage and results</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Troubleshooting</h4>
                <p className="text-gray-400 text-sm">Common issues and their solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}