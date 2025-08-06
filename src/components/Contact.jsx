import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#', color: 'from-pink-500 to-purple-600', handle: '@growthhiveksa' },
    { name: 'Facebook', icon: '📘', url: '#', color: 'from-blue-500 to-blue-700', handle: '@growthhiveksa' },
    { name: 'TikTok', icon: '🎵', url: '#', color: 'from-black to-gray-800', handle: '@growthhiveksa' },
    { name: 'Snapchat', icon: '👻', url: '#', color: 'from-yellow-400 to-yellow-500', handle: '@growthhiveksa' }
  ]

  const contactInfo = [
    { icon: '📧', title: 'Email', value: 'growthhiveksa@gmail.com', action: 'mailto:growthhiveksa@gmail.com' },
    { icon: '📱', title: 'WhatsApp / Phone', value: '+966 50 412 0934', action: 'tel:+966504120934' },
    { icon: '📍', title: 'Location', value: 'Saudi Arabia', action: null },
    { icon: '⏰', title: 'Business Hours', value: 'Sun-Thu: 9AM-6PM', action: null }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary-900 to-secondary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800 rounded-full text-sm font-semibold mb-6 shadow-soft">
            <div className="w-3 h-3 bg-primary-500 rounded-full mr-3 animate-pulse-gentle" />
            Get In Touch
            <div className="ml-3 w-3 h-3 bg-primary-500 rounded-full animate-pulse-gentle" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Contact{' '}
            <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            Ready to grow your brand's social media presence? Get in touch with us today for a free consultation!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-soft-lg"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-dark"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-dark"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-dark"
                    placeholder="+966 50 000 0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-dark"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-secondary-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="input-dark"
                >
                  <option value="">Select a service</option>
                  <option value="social-media-marketing">Social Media Marketing</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="ads-management">Ads Management</option>
                  <option value="tiktok-snapchat">TikTok & Snapchat</option>
                  <option value="analytics-reporting">Analytics & Reporting</option>
                  <option value="growth-strategy">Growth Strategy</option>
                  <option value="full-service">Full Service Package</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="input-dark resize-none"
                  placeholder="Tell us about your project, goals, and how we can help..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-soft hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-soft-lg">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-all duration-300">
                      <div className="text-xl">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-secondary-300 hover:text-primary-300 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-secondary-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-soft-lg">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`flex items-center space-x-3 p-4 rounded-xl border border-white/20 hover:border-primary-400/50 transition-all duration-300 bg-gradient-to-r ${social.color} bg-opacity-20 hover:bg-opacity-30 group`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="text-2xl">{social.icon}</div>
                    <div>
                      <div className="font-semibold text-white">{social.name}</div>
                      <div className="text-sm text-secondary-300">{social.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-soft-lg">
            <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
              Our Location
            </h3>
            <div className="bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-pattern opacity-10" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">🗺️</div>
                <h4 className="text-xl font-display font-bold text-white mb-2">
                  Saudi Arabia
                </h4>
                <p className="text-secondary-300 mb-6">
                  Serving businesses across Saudi Arabia with professional social media marketing services
                </p>
                <div className="mt-6">
                  <div className="w-full h-64 bg-primary-500/20 rounded-xl flex items-center justify-center border border-primary-500/30">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📍</div>
                      <p className="text-primary-300 font-semibold">Interactive Map</p>
                      <p className="text-primary-400 text-sm">Saudi Arabia Location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-10" />
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss how we can help grow your brand's social media presence and achieve your business goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-soft">
                  <span className="flex items-center justify-center">
                    Schedule a Call
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
                  <span className="flex items-center justify-center">
                    View Our Portfolio
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 