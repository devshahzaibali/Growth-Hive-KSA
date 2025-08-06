import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
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
    
    // Reset form
    setFormData({ email: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'WhatsApp / Phone',
      value: '+966 50 412 0934',
      link: 'tel:+966504120934'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'growthhiveksa@gmail.com',
      link: 'mailto:growthhiveksa@gmail.com'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Saudi Arabia',
      link: null
    }
  ]

  const socialLinks = [
    { icon: '📷', name: 'Instagram', link: '#' },
    { icon: '📘', name: 'Facebook', link: '#' },
    { icon: '🎵', name: 'TikTok', link: '#' },
    { icon: '👻', name: 'Snapchat', link: '#' }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full text-sm font-semibold mb-6">
            <div className="w-3 h-3 bg-white rounded-full mr-3" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Contact{' '}
            <span className="text-green-400">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to grow your brand on social media? Let's discuss how we can help you achieve your digital marketing goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-display font-bold mb-6 text-green-400">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-dark"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-dark resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 text-green-400">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <span className="text-xl">{info.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 text-green-400">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-2xl hover:bg-green-600 transition-all duration-300 border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20"
        >
          <div className="p-8">
            <h3 className="text-2xl font-display font-bold mb-6 text-green-400 text-center">
              Our Location
            </h3>
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-300 text-lg">Saudi Arabia</p>
                <p className="text-gray-400 text-sm">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 