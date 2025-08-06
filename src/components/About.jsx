import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: '😊', color: 'bg-blue-500' },
    { number: '1000+', label: 'Campaigns', icon: '🎯', color: 'bg-green-500' },
    { number: '5+', label: 'Years Experience', icon: '⭐', color: 'bg-purple-500' },
    { number: '4', label: 'Platforms', icon: '📱', color: 'bg-orange-500' }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of social media trends and leverage cutting-edge strategies to keep your brand relevant.',
      icon: '🚀'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in content creation, strategy development, and client communication.',
      icon: '✨'
    },
    {
      title: 'Results',
      description: 'We focus on measurable outcomes and data-driven decisions to ensure your investment delivers real returns.',
      icon: '📈'
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, building long-term relationships based on trust and mutual success.',
      icon: '🤝'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
            About Us
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            About{' '}
            <span className="text-gradient">Growth Hive KSA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Growth Hive KSA is a professional social media marketing agency helping businesses in Saudi Arabia achieve digital success. We specialize in platform-specific content strategies and have worked with multiple clients to grow their online presence.
          </p>
        </motion.div>

        {/* Stats */}
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
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 mb-20 shadow-xl"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              To empower businesses in Saudi Arabia with innovative social media strategies that drive growth, 
              increase brand awareness, and create meaningful connections with their target audience. 
              We believe in the power of authentic storytelling and data-driven decision making to deliver 
              exceptional results for our clients.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-all duration-300">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-green-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Why Choose Growth Hive KSA?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We combine local market knowledge with global best practices to deliver exceptional results. 
            Our team of experts understands the unique challenges and opportunities in the Saudi market.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Local Expertise</h4>
              <p className="opacity-90">Deep understanding of Saudi market and culture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Data-Driven</h4>
              <p className="opacity-90">Results-focused strategies backed by analytics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Innovation</h4>
              <p className="opacity-90">Cutting-edge strategies and creative solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 