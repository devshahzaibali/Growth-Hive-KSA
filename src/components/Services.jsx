import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Comprehensive social media management across all major platforms to grow your brand presence and engagement.',
      icon: '📱',
      features: ['Platform Strategy', 'Content Calendar', 'Community Management', 'Brand Voice Development'],
      color: 'bg-blue-500',
      stats: { clients: '200+', success: '95%' }
    },
    {
      title: 'Content Creation',
      description: 'Engaging visual content that captures attention and drives engagement on social media platforms.',
      icon: '🎨',
      features: ['Visual Design', 'Video Production', 'Copywriting', 'Trend Integration'],
      color: 'bg-purple-500',
      stats: { clients: '150+', success: '98%' }
    },
    {
      title: 'Ads Management',
      description: 'Targeted advertising campaigns that reach your ideal audience and drive conversions effectively.',
      icon: '📢',
      features: ['Ad Strategy', 'Audience Targeting', 'Budget Optimization', 'Performance Tracking'],
      color: 'bg-green-500',
      stats: { clients: '180+', success: '92%' }
    },
    {
      title: 'TikTok & Snapchat',
      description: 'Trending content and viral campaigns on the fastest-growing social platforms for maximum reach.',
      icon: '🎬',
      features: ['Viral Content', 'Trend Analysis', 'Influencer Collaboration', 'Platform Optimization'],
      color: 'bg-pink-500',
      stats: { clients: '120+', success: '89%' }
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive data analysis and insights to measure and improve your social media performance.',
      icon: '📊',
      features: ['Performance Metrics', 'Growth Tracking', 'ROI Analysis', 'Competitive Analysis'],
      color: 'bg-orange-500',
      stats: { clients: '250+', success: '96%' }
    },
    {
      title: 'Growth Strategy',
      description: 'Strategic approaches to increase followers, engagement, and brand awareness across platforms.',
      icon: '🚀',
      features: ['Growth Hacking', 'Engagement Optimization', 'Community Building', 'Influencer Marketing'],
      color: 'bg-red-500',
      stats: { clients: '300+', success: '94%' }
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            What We{' '}
            <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive social media marketing solutions to grow your brand and engage your audience with proven strategies
          </p>
        </motion.div>

        {/* Simple Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="card card-hover h-full p-8">
                {/* Simple Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Simple Stats */}
                  <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{service.stats.clients}</div>
                      <div className="text-xs text-gray-500">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{service.stats.success}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-green-600 text-sm uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Simple CTA Button */}
                  <button className="w-full py-3 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
                    <span className="flex items-center justify-center">
                      Learn More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your social media goals and take your brand to the next level
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center">
                  Get Started Today
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
                View Our Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 