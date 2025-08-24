import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'services', name: 'Our Services', icon: '⚙️' },
    { id: 'billing', name: 'Billing & Payments', icon: '💳' },
    { id: 'technical', name: 'Technical Support', icon: '🔧' },
    { id: 'account', name: 'Account Management', icon: '👤' }
  ]

  const helpArticles = [
    {
      id: 1,
      title: 'How to Get Started with Growth Hive KSA',
      category: 'getting-started',
      content: 'Learn how to begin your social media marketing journey with us. We\'ll guide you through the onboarding process and set up your first campaign.',
      tags: ['onboarding', 'first-steps', 'setup']
    },
    {
      id: 2,
      title: 'Understanding Our Service Packages',
      category: 'services',
      content: 'Explore our different service packages and find the perfect fit for your business needs. From basic social media management to comprehensive marketing strategies.',
      tags: ['packages', 'pricing', 'services']
    },
    {
      id: 3,
      title: 'How to Access Your Client Portal',
      category: 'account',
      content: 'Step-by-step guide to accessing your client portal, viewing reports, and managing your campaigns effectively.',
      tags: ['portal', 'access', 'reports']
    },
    {
      id: 4,
      title: 'Payment Methods and Billing Cycles',
      category: 'billing',
      content: 'Information about our accepted payment methods, billing cycles, and how to update your payment information.',
      tags: ['payment', 'billing', 'methods']
    },
    {
      id: 5,
      title: 'Content Creation Process',
      category: 'services',
      content: 'Learn about our content creation process, from initial consultation to final delivery and approval.',
      tags: ['content', 'creation', 'process']
    },
    {
      id: 6,
      title: 'Performance Reports and Analytics',
      category: 'technical',
      content: 'Understanding your performance reports, key metrics, and how to interpret the data to optimize your campaigns.',
      tags: ['reports', 'analytics', 'metrics']
    },
    {
      id: 7,
      title: 'Social Media Platform Integration',
      category: 'technical',
      content: 'How we integrate with different social media platforms and manage your accounts securely.',
      tags: ['integration', 'platforms', 'security']
    },
    {
      id: 8,
      title: 'Campaign Optimization Strategies',
      category: 'services',
      content: 'Best practices for optimizing your social media campaigns and maximizing your return on investment.',
      tags: ['optimization', 'strategies', 'ROI']
    }
  ]

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
            Help Center
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            How Can We{' '}
            <span className="text-gradient">Help You?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions, learn about our services, and get the support you need
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
            />
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Help Articles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                <span className="text-2xl opacity-60">
                  {categories.find(cat => cat.id === article.category)?.icon}
                </span>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{article.content}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact-support" className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Contact Support
              </a>
              <a href="/faq" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                View FAQ
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HelpCenter
