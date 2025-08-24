import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number)',
        'Business information (company name, industry)',
        'Social media account details',
        'Website usage data and analytics',
        'Communication records and support tickets'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our social media marketing services',
        'Communicate with you about your campaigns',
        'Send you updates, reports, and newsletters',
        'Process payments and manage billing',
        'Provide customer support and technical assistance',
        'Analyze usage patterns to improve our services'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information',
        'We may share information with trusted service providers',
        'Information may be shared if required by law',
        'We may share aggregated, non-personal data for analytics'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures',
        'Your data is encrypted during transmission and storage',
        'We regularly update our security protocols',
        'Access to your information is limited to authorized personnel'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request corrections to inaccurate data',
        'Request deletion of your personal information',
        'Opt-out of marketing communications',
        'Withdraw consent for data processing'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to improve your browsing experience',
        'Cookies help us remember your preferences',
        'We use analytics cookies to understand website usage',
        'You can control cookie settings in your browser'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Privacy{' '}
            <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Growth Hive KSA, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our social media marketing services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using our services, you agree to the collection and use of information in accordance with this policy. If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-display font-bold text-gray-900 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-green-600 rounded-3xl p-8 text-white text-center mt-12">
          <h3 className="text-2xl font-display font-bold mb-4">
            Questions About This Policy?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            If you have any questions about our Privacy Policy or how we handle your data, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact-support" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Contact Support
            </a>
            <a href="mailto:privacy@growthhiveksa.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
