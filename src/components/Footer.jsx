import { motion } from 'framer-motion'
import SocialIcons from './SocialIcons'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Social Media Marketing', href: '#services', description: 'Comprehensive platform management' },
      { name: 'Content Creation', href: '#services', description: 'Posts, reels & visual content' },
      { name: 'Ads Management', href: '#services', description: 'Instagram & Facebook campaigns' },
      { name: 'TikTok & Snapchat', href: '#services', description: 'Trending platform strategies' },
      { name: 'Analytics & Reporting', href: '#services', description: 'Performance tracking & insights' },
      { name: 'Growth Strategy', href: '#services', description: 'Engagement & audience building' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Data Protection', href: '/data-protection' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Support', href: '/contact-support' },
      { name: 'Client Portal', href: '/portal' }
    ]
  }

  const socialLinks = [
    { 
      icon: 'instagram', 
      name: 'Instagram', 
      href: 'https://www.instagram.com/growthhiveksa?igsh=MXZlNW10cGdla240bw==',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    },
    { 
      icon: 'facebook', 
      name: 'Facebook', 
      href: 'https://www.facebook.com/share/16No8Eb8eb/',
      color: 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600'
    },
    { 
      icon: 'snapchat', 
      name: 'Snapchat', 
      href: 'https://www.snapchat.com/add/growthhive?share_id=hCYN_FJxTDQ&locale=en-PK',
      color: 'hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Growth Hive KSA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Growth Hive KSA</h3>
                <p className="text-sm text-green-400">Social Media Experts</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional social media marketing agency helping businesses in Saudi Arabia achieve digital success through innovative strategies and creative content.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SocialIcons type={social.icon} size="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>



          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-green-400">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300 group"
                  >
                    <div className="font-medium">{link.name}</div>
                    {link.description && (
                      <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        {link.description}
                      </div>
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>



          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-green-400">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-green-400">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h5 className="font-semibold text-green-400 mb-2">Phone</h5>
              <p className="text-gray-400">+966 50 412 0934</p>
            </div>
            <div>
              <h5 className="font-semibold text-green-400 mb-2">Email</h5>
              <p className="text-gray-400">growthhiveksa@gmail.com</p>
            </div>
            <div>
              <h5 className="font-semibold text-green-400 mb-2">Location</h5>
              <p className="text-gray-400">Saudi Arabia</p>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Growth Hive KSA. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-500">
            <a href="#" className="hover:text-green-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 