import { Link } from 'react-router-dom'
import banner from '../assets/banner.jpeg'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Banner */}
      <section className="relative">
        {/* Banner Background */}
        <div className="relative h-screen">
          <img 
            src={banner} 
            alt="Growth Hive KSA Banner" 
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  We Help Your Brand{' '}
                  <span className="text-green-400">Succeed</span> on Social Media
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
                  We grow your business through Instagram, Facebook, TikTok, and Snapchat.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Growth Hive KSA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver results-driven social media strategies that grow your brand and engage your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl">🚀</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">Track record of growing brands across all major social platforms with measurable outcomes.</p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl">🎨</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Content</h3>
              <p className="text-gray-600">Engaging posts, reels, and campaigns that capture attention and drive engagement.</p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-3xl">📊</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data-Driven</h3>
              <p className="text-gray-600">Analytics and insights to optimize your social media strategy for maximum impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Platforms Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Master Every Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Instagram to TikTok, we create platform-specific content that resonates with your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm">Stories, posts, and reels that engage</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📘</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Facebook</h3>
              <p className="text-gray-600 text-sm">Community building and brand awareness</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">TikTok</h3>
              <p className="text-gray-600 text-sm">Viral content and trending challenges</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">👻</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Snapchat</h3>
              <p className="text-gray-600 text-sm">Authentic behind-the-scenes content</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Brand?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's create a social media strategy that drives real results for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 