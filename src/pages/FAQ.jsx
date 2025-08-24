import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openItems, setOpenItems] = useState([])

  const faqData = [
    {
      id: 1,
      question: 'What services does Growth Hive KSA offer?',
      answer: 'We offer comprehensive social media marketing services including content creation, platform management, paid advertising, analytics, and growth strategies for Instagram, Facebook, TikTok, and Snapchat.'
    },
    {
      id: 2,
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the services you need and the scope of your project. We offer flexible packages starting from basic social media management to comprehensive marketing strategies. Contact us for a personalized quote.'
    },
    {
      id: 3,
      question: 'How long does it take to see results?',
      answer: 'Results typically start appearing within 2-4 weeks of campaign launch. However, significant growth and engagement improvements are usually seen within 2-3 months of consistent strategy implementation.'
    },
    {
      id: 4,
      question: 'Do you work with businesses outside Saudi Arabia?',
      answer: 'While we specialize in the Saudi market, we do work with international clients who want to target the Saudi market or have operations in the region.'
    },
    {
      id: 5,
      question: 'What platforms do you manage?',
      answer: 'We manage Instagram, Facebook, TikTok, and Snapchat. We can also provide guidance for other platforms based on your specific needs and target audience.'
    },
    {
      id: 6,
      question: 'How do I access my client portal?',
      answer: 'Once you become a client, you\'ll receive login credentials for your personalized client portal where you can view reports, approve content, and communicate with our team.'
    }
  ]

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to the most common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <motion.svg
                  className="w-6 h-6 text-gray-400"
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-green-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-display font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Can't find the answer you're looking for? Our team is here to help
            </p>
            <a href="/contact-support" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
