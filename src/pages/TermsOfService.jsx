import { motion } from 'framer-motion'

const TermsOfService = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using Growth Hive KSA services, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time, with changes effective immediately upon posting.'
      ]
    },
    {
      title: 'Service Description',
      content: [
        'Growth Hive KSA provides social media marketing services including content creation, platform management, and advertising.',
        'Services are provided on an "as is" and "as available" basis.',
        'We do not guarantee specific results or outcomes from our services.',
        'Service availability may vary based on platform policies and market conditions.'
      ]
    },
    {
      title: 'Client Responsibilities',
      content: [
        'Provide accurate and complete information for service delivery.',
        'Grant necessary access to social media accounts for service provision.',
        'Review and approve content before publication.',
        'Maintain compliance with platform terms and local regulations.',
        'Provide timely feedback and communication for project success.'
      ]
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment is due upon service agreement or as specified in your contract.',
        'We accept payment through approved methods only.',
        'Late payments may result in service suspension or termination.',
        'Refunds are provided according to our refund policy.',
        'Prices are subject to change with 30 days notice.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'Content created by Growth Hive KSA remains our property until full payment.',
        'Upon payment, clients receive usage rights for approved content.',
        'We retain the right to use work samples in our portfolio.',
        'Clients must respect our intellectual property rights.',
        'Third-party content usage must comply with licensing agreements.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'Our liability is limited to the amount paid for services.',
        'We are not liable for indirect, incidental, or consequential damages.',
        'We do not guarantee specific social media performance metrics.',
        'Platform changes or algorithm updates are beyond our control.',
        'Force majeure events may affect service delivery.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'Either party may terminate services with 30 days written notice.',
        'Immediate termination may occur for breach of terms.',
        'Upon termination, outstanding payments become immediately due.',
        'We will provide final deliverables for completed work.',
        'Client data will be handled according to our data retention policy.'
      ]
    },
    {
      title: 'Confidentiality',
      content: [
        'We maintain strict confidentiality of client information.',
        'Non-disclosure agreements apply to sensitive business information.',
        'We do not share client strategies or proprietary information.',
        'Confidentiality obligations survive service termination.',
        'Exceptions apply for legal requirements or with written consent.'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Terms of{' '}
            <span className="text-gradient">Service</span>
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
            These Terms of Service govern your use of Growth Hive KSA's social media marketing services. By using our services, you agree to these terms and conditions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Please read these terms carefully before using our services. If you have any questions, please contact us for clarification.
          </p>
        </div>

        {/* Terms Sections */}
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
            Questions About These Terms?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            If you have any questions about our Terms of Service, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact-support" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Contact Support
            </a>
            <a href="mailto:legal@growthhiveksa.com" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Email Legal Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
