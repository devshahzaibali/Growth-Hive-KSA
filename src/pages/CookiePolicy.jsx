import { motion } from 'framer-motion'

const CookiePolicy = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly.',
      examples: [
        'Authentication cookies to keep you logged in',
        'Security cookies to protect against fraud',
        'Session cookies to maintain your preferences'
      ],
      necessary: true
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics to track page views and user behavior',
        'Performance monitoring to improve website speed',
        'User journey analysis to enhance user experience'
      ],
      necessary: false
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language preference cookies',
        'Theme and layout preferences',
        'Form data retention for better user experience'
      ],
      necessary: false
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements.',
      examples: [
        'Social media pixel cookies for ad targeting',
        'Retargeting cookies to show relevant ads',
        'Conversion tracking for marketing campaigns'
      ],
      necessary: false
    }
  ]

  const sections = [
    {
      title: 'What Are Cookies?',
      content: 'Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.'
    },
    {
      title: 'How We Use Cookies',
      content: 'We use cookies to improve your browsing experience, analyze website traffic, personalize content, and provide social media features. Cookies help us understand how you interact with our website so we can make it better.'
    },
    {
      title: 'Managing Your Cookie Preferences',
      content: 'You can control and manage cookies through your browser settings. You can delete existing cookies and prevent new ones from being set. However, disabling certain cookies may affect the functionality of our website.'
    },
    {
      title: 'Third-Party Cookies',
      content: 'Some cookies on our website are set by third-party services such as Google Analytics, social media platforms, and advertising networks. These cookies are subject to the privacy policies of these third parties.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Cookie{' '}
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
          <p className="text-gray-600 leading-relaxed">
            This Cookie Policy explains how Growth Hive KSA uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies in accordance with this policy.
          </p>
        </div>

        {/* Cookie Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            Types of Cookies We Use
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{type.name}</h3>
                  {type.necessary && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                      Necessary
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Examples:</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 4) * 0.1 }}
            >
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Cookie Management */}
        <div className="bg-green-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            Manage Your Cookie Preferences
          </h3>
          <p className="text-lg mb-6 opacity-90">
            You can control your cookie preferences at any time. Click the button below to update your settings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                // This would typically open a cookie consent manager
                alert('Cookie preferences manager would open here')
              }}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Cookie Settings
            </button>
            <a href="/contact-support" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy
