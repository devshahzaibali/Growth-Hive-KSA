import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Footer = () => {
  const navLinks = [
    { href: '#home', label: 'Home', icon: '🏠' },
    { href: '#services', label: 'Services', icon: '⚙️' },
    { href: '#portfolio', label: 'Portfolio', icon: '📁' },
    { href: '#about', label: 'About', icon: 'ℹ️' },
    { href: '#contact', label: 'Contact', icon: '📞' }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#', handle: '@growthhiveksa' },
    { name: 'Facebook', icon: '📘', url: '#', handle: '@growthhiveksa' },
    { name: 'TikTok', icon: '🎵', url: '#', handle: '@growthhiveksa' },
    { name: 'Snapchat', icon: '👻', url: '#', handle: '@growthhiveksa' }
  ]

  const services = [
    'Social Media Marketing',
    'Content Creation',
    'Ads Management',
    'Analytics & Reporting',
    'TikTok & Snapchat',
    'Growth Strategy'
  ]

  const quickLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Sitemap'
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Enhanced Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={logo} 
                    alt="Growth Hive KSA Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary-400">
                    Growth Hive KSA
                  </div>
                  <div className="text-sm text-secondary-400">Social Media Experts</div>
                </div>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-secondary-300 mb-6 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Professional social media marketing agency helping businesses in Saudi Arabia achieve digital success through innovative strategies and engaging content.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-secondary-800 rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-colors duration-300 group"
                  >
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-display font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href="#services"
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Contact Info */}
        <motion.div 
          className="mb-8 pt-8 border-t border-secondary-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="group">
              <h4 className="font-semibold mb-3 text-white">Email</h4>
              <a 
                href="mailto:growthhiveksa@gmail.com"
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 group-hover:underline"
              >
                growthhiveksa@gmail.com
              </a>
            </div>
            <div className="group">
              <h4 className="font-semibold mb-3 text-white">Phone</h4>
              <a 
                href="tel:+966504120934"
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 group-hover:underline"
              >
                +966 50 412 0934
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Location</h4>
              <p className="text-secondary-300">Saudi Arabia</p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-secondary-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-secondary-400">
                © 2025 Growth Hive KSA. All rights reserved.
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-8 pt-8 border-t border-secondary-800 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-secondary-400 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse-gentle"></div>
                <span>Certified Social Media Agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
                <span>100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
                <span>24/7 Support Available</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 