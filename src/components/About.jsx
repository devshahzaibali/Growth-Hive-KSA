import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: '😊', color: 'from-pink-500 to-pink-600' },
    { number: '1000+', label: 'Campaigns', icon: '🎯', color: 'from-blue-500 to-blue-600' },
    { number: '4', label: 'Platforms', icon: '📱', color: 'from-primary-500 to-primary-600' },
    { number: '24/7', label: 'Support', icon: '🔄', color: 'from-purple-500 to-purple-600' }
  ]

  const values = [
    { title: 'Innovation', description: 'We stay ahead of social media trends and platform updates', icon: '💡' },
    { title: 'Excellence', description: 'Quality content and strategies that deliver results', icon: '⭐' },
    { title: 'Transparency', description: 'Clear communication and honest reporting', icon: '🔍' },
    { title: 'Growth', description: 'Focused on your business growth and success', icon: '🚀' }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-secondary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6">
            About{' '}
            <span className="text-gradient">Growth Hive KSA</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Professional social media marketing agency helping businesses in Saudi Arabia achieve digital success through innovative strategies and engaging content.
          </p>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-glow-lg transition-all duration-300`}>
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-secondary-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card rounded-3xl p-8 md:p-12 mb-20 shadow-soft-lg"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                To empower Saudi businesses with innovative social media strategies that drive real growth, engagement, and brand awareness across all social platforms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-secondary-600">Data-driven strategies for measurable results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-secondary-600">Creative content that engages and converts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-secondary-600">Local expertise with global standards</p>
                </div>
              </div>
            </div>
            <motion.div
              className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 text-center relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-hero-pattern opacity-10" />
              <div className="relative z-10">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                  Digital Growth Experts
                </h4>
                <p className="text-secondary-700 mb-6">
                  Specializing in Instagram, Facebook, TikTok, and Snapchat marketing with proven strategies.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="font-bold text-primary-600">95%</div>
                    <div className="text-secondary-600">Success Rate</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="font-bold text-primary-600">24/7</div>
                    <div className="text-secondary-600">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-12 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-display font-bold text-secondary-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-10" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Work Together?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how we can help grow your brand's social media presence and achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-soft"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center">
                    Get Started Today
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Call
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 