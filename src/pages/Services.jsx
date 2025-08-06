const Services = () => {
  const services = [
    {
      title: 'Social Media Marketing',
      description: 'Comprehensive social media management across all major platforms to grow your brand presence.',
      icon: '📱',
      features: ['Platform Strategy', 'Content Calendar', 'Community Management', 'Brand Voice Development']
    },
    {
      title: 'Content Creation (Posts + Reels)',
      description: 'Engaging visual content that captures attention and drives engagement on social media.',
      icon: '🎨',
      features: ['Visual Design', 'Video Production', 'Copywriting', 'Trend Integration']
    },
    {
      title: 'Instagram & Facebook Ads Management',
      description: 'Targeted advertising campaigns that reach your ideal audience and drive conversions.',
      icon: '📢',
      features: ['Ad Strategy', 'Audience Targeting', 'Budget Optimization', 'Performance Tracking']
    },
    {
      title: 'TikTok & Snapchat Campaigns',
      description: 'Trending content and viral campaigns on the fastest-growing social platforms.',
      icon: '🎬',
      features: ['Viral Content', 'Trend Analysis', 'Influencer Collaboration', 'Platform Optimization']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive data analysis and insights to measure and improve your social media performance.',
      icon: '📊',
      features: ['Performance Metrics', 'Growth Tracking', 'ROI Analysis', 'Competitive Analysis']
    },
    {
      title: 'Engagement & Growth Strategy',
      description: 'Strategic approaches to increase followers, engagement, and brand awareness.',
      icon: '🚀',
      features: ['Growth Hacking', 'Engagement Optimization', 'Community Building', 'Influencer Marketing']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive social media marketing solutions to grow your brand and engage your audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl p-6"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-green-600 text-sm uppercase tracking-wide">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve your social media goals
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 