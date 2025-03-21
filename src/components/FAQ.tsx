import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, CheckCircle, DollarSign, Cloud, Settings } from 'lucide-react';

const faqs = [
  {
    icon: Cloud,
    question: 'What cloud providers do you support?',
    answer: 'We support all major cloud providers including AWS, Azure, and Google Cloud Platform. Our AI is trained to understand and generate architectures for each platform, taking into account their specific services and best practices.',
  },
  {
    icon: HelpCircle,
    question: 'How do I get started with the AI Architecture Assistant?',
    answer: 'Getting started is simple: \n\n1. Sign up for an account\n2. Describe your requirements in plain English\n3. Select your preferred cloud provider\n4. Let our AI generate a comprehensive architecture design\n5. Review and customize the generated architecture',
  },
  {
    icon: CheckCircle,
    question: 'Can I export the architecture diagrams?',
    answer: 'Yes, you can export diagrams in multiple formats including:\n\n• PowerPoint presentations\n• PDF documents\n• High-resolution PNG images\n• Visio compatible formats\n\nAll exports include detailed annotations and documentation.',
  },
  {
    icon: DollarSign,
    question: 'Do you provide cost estimates?',
    answer: 'Yes, we provide comprehensive cost analysis including:\n\n• Detailed monthly cost breakdowns\n• Service-by-service pricing\n• Cost optimization recommendations\n• Comparison of different service tiers\n• Reserved instance recommendations',
  },
  {
    icon: Settings,
    question: 'How accurate are the AI-generated architectures?',
    answer: 'Our AI is trained on thousands of real-world architectures and follows industry best practices. The accuracy is ensured through:\n\n• Regular updates with latest cloud services\n• Compliance with security standards\n• Performance optimization patterns\n• Real-world deployment validation',
  },
  {
    icon: Cloud,
    question: 'Can I customize the generated architecture?',
    answer: 'Absolutely! You can customize every aspect of the generated architecture:\n\n• Modify service selections\n• Adjust scaling parameters\n• Add or remove components\n• Update security configurations\n• Customize networking setup',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-transparent pt-32" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 neon-text">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about the AI Architecture Assistant
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full glow-card rounded-xl p-6 text-left transition-all duration-300 ${
                  openIndex === index ? 'bg-slate-800/50' : 'hover:bg-slate-800/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <faq.icon className="w-6 h-6 text-blue-400 mr-4" />
                    <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 text-gray-400 whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}