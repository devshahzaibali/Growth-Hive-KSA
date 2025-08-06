import banner from '../assets/banner.jpeg'

const About = () => {
  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '100+', label: 'Successful Campaigns' },
    { number: '4', label: 'Social Platforms' },
    { number: '24/7', label: 'Support Available' }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of social media trends and platform updates to deliver cutting-edge strategies.',
      icon: '🚀'
    },
    {
      title: 'Authenticity',
      description: 'We create genuine, engaging content that resonates with your audience and builds trust.',
      icon: '💎'
    },
    {
      title: 'Results',
      description: 'We focus on measurable outcomes and data-driven strategies that deliver real business growth.',
      icon: '📈'
    },
    {
      title: 'Partnership',
      description: 'We work closely with our clients as true partners in their social media success journey.',
      icon: '🤝'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Banner */}
      <section className="relative h-96">
        <img 
          src={banner} 
          alt="Growth Hive KSA Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Growth Hive KSA
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional social media marketing agency helping businesses in Saudi Arabia achieve digital success.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Description */}
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Growth Hive KSA is a professional social media marketing agency helping businesses in Saudi Arabia achieve digital success. We specialize in platform-specific content strategies and have worked with multiple clients to grow their online presence.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-20 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To empower Saudi businesses with innovative social media strategies that drive real growth, engagement, and brand awareness. We believe every brand has a unique story to tell, and we're here to help you tell it effectively across all social platforms.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From small startups to established enterprises, we provide personalized social media solutions that align with your business goals and resonate with your target audience.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Digital Growth Experts
                </h3>
                <p className="text-gray-700">
                  Specializing in Instagram, Facebook, TikTok, and Snapchat marketing strategies that deliver measurable results.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200 border border-gray-100">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our team of social media experts combines creativity, strategy, and technical expertise to deliver exceptional results for our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">👨‍💼</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Strategy Director</h3>
                <p className="opacity-90">Leading our strategic approach and client relationships</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">🎨</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Creative Team</h3>
                <p className="opacity-90">Crafting engaging visual content and copy</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-3xl">📊</div>
                </div>
                <h3 className="text-xl font-bold mb-2">Analytics Team</h3>
                <p className="opacity-90">Tracking performance and optimizing campaigns</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-green-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help grow your brand's social media presence and achieve your business goals.
              </p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 