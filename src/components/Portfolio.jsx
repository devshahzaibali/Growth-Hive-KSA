import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('instagram')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const portfolioData = {
    instagram: {
      posts: [
        { id: 1, title: 'Brand Awareness Campaign', type: 'post', image: '📸', description: 'Engaging carousel post showcasing product features', engagement: '2.5K', category: 'Branding' },
        { id: 2, title: 'Lifestyle Content', type: 'post', image: '📸', description: 'Authentic lifestyle photography for brand connection', engagement: '1.8K', category: 'Lifestyle' },
        { id: 3, title: 'Product Showcase', type: 'post', image: '📸', description: 'High-quality product photography with compelling copy', engagement: '3.2K', category: 'Product' },
        { id: 4, title: 'Behind the Scenes', type: 'post', image: '📸', description: 'Exclusive behind-the-scenes content for engagement', engagement: '1.5K', category: 'Behind Scenes' },
        { id: 5, title: 'User Generated Content', type: 'post', image: '📸', description: 'Customer testimonials and reviews showcase', engagement: '2.1K', category: 'UGC' },
        { id: 6, title: 'Educational Content', type: 'post', image: '📸', description: 'Informative posts that add value to followers', engagement: '1.9K', category: 'Education' },
        { id: 7, title: 'Promotional Campaign', type: 'post', image: '📸', description: 'Strategic promotional content with clear CTAs', engagement: '4.1K', category: 'Promotion' },
        { id: 8, title: 'Community Engagement', type: 'post', image: '📸', description: 'Interactive posts that encourage participation', engagement: '2.8K', category: 'Community' }
      ],
      reels: [
        { id: 1, title: 'Product Demo Reel', type: 'reel', image: '🎬', description: 'Short-form video showcasing product benefits', views: '15K', category: 'Product' },
        { id: 2, title: 'Trending Challenge', type: 'reel', image: '🎬', description: 'Viral challenge participation for brand visibility', views: '25K', category: 'Viral' },
        { id: 3, title: 'Behind the Scenes Reel', type: 'reel', image: '🎬', description: 'Authentic behind-the-scenes video content', views: '12K', category: 'Behind Scenes' },
        { id: 4, title: 'Tutorial Reel', type: 'reel', image: '🎬', description: 'Educational content in engaging video format', views: '18K', category: 'Tutorial' },
        { id: 5, title: 'Customer Testimonial Reel', type: 'reel', image: '🎬', description: 'Video testimonials from satisfied customers', views: '22K', category: 'Testimonial' }
      ]
    },
    facebook: {
      posts: [
        { id: 1, title: 'Community Building Post', type: 'post', image: '📘', description: 'Engaging content that builds community', engagement: '1.2K', category: 'Community' },
        { id: 2, title: 'Educational Article', type: 'post', image: '📘', description: 'Long-form educational content for Facebook audience', engagement: '890', category: 'Education' },
        { id: 3, title: 'Event Promotion', type: 'post', image: '📘', description: 'Strategic event promotion and awareness', engagement: '1.5K', category: 'Events' },
        { id: 4, title: 'Customer Spotlight', type: 'post', image: '📘', description: 'Highlighting customer success stories', engagement: '1.1K', category: 'Customer' },
        { id: 5, title: 'Industry Insights', type: 'post', image: '📘', description: 'Thought leadership content for industry authority', engagement: '980', category: 'Insights' },
        { id: 6, title: 'Product Launch', type: 'post', image: '📘', description: 'Exciting product launch announcements', engagement: '2.3K', category: 'Product' },
        { id: 7, title: 'Team Introduction', type: 'post', image: '📘', description: 'Humanizing the brand through team features', engagement: '1.4K', category: 'Team' },
        { id: 8, title: 'Milestone Celebration', type: 'post', image: '📘', description: 'Celebrating business milestones and achievements', engagement: '1.7K', category: 'Milestone' }
      ],
      reels: [
        { id: 1, title: 'Company Culture Reel', type: 'reel', image: '🎬', description: 'Showcasing company culture and values', views: '8K', category: 'Culture' },
        { id: 2, title: 'Product Tutorial Reel', type: 'reel', image: '🎬', description: 'Detailed product tutorial videos', views: '12K', category: 'Tutorial' },
        { id: 3, title: 'Customer Success Reel', type: 'reel', image: '🎬', description: 'Customer success stories in video format', views: '9K', category: 'Success' },
        { id: 4, title: 'Industry Expert Reel', type: 'reel', image: '🎬', description: 'Expert insights and industry commentary', views: '7K', category: 'Expert' },
        { id: 5, title: 'Behind the Scenes Reel', type: 'reel', image: '🎬', description: 'Authentic behind-the-scenes content', views: '11K', category: 'Behind Scenes' }
      ]
    },
    tiktok: {
      reels: [
        { id: 1, title: 'Viral Dance Challenge', type: 'reel', image: '🎵', description: 'Trending dance challenge participation', views: '45K', category: 'Viral' },
        { id: 2, title: 'Product Hack Video', type: 'reel', image: '🎵', description: 'Creative product usage hacks and tips', views: '38K', category: 'Hacks' },
        { id: 3, title: 'Behind the Scenes', type: 'reel', image: '🎵', description: 'Authentic behind-the-scenes moments', views: '32K', category: 'Behind Scenes' },
        { id: 4, title: 'Customer Testimonial', type: 'reel', image: '🎵', description: 'Real customer testimonials and reviews', views: '28K', category: 'Testimonial' },
        { id: 5, title: 'Trending Sound Usage', type: 'reel', image: '🎵', description: 'Popular sound integration for virality', views: '52K', category: 'Trending' },
        { id: 6, title: 'Educational Content', type: 'reel', image: '🎵', description: 'Quick educational tips and insights', views: '35K', category: 'Education' },
        { id: 7, title: 'Product Showcase', type: 'reel', image: '🎵', description: 'Creative product demonstrations', views: '41K', category: 'Product' },
        { id: 8, title: 'Brand Story Video', type: 'reel', image: '🎵', description: 'Compelling brand story and mission', views: '29K', category: 'Story' }
      ]
    },
    snapchat: {
      reels: [
        { id: 1, title: 'Daily Story Content', type: 'reel', image: '👻', description: 'Daily engaging story content', views: '5K', category: 'Daily' },
        { id: 2, title: 'Product Teasers', type: 'reel', image: '👻', description: 'Exclusive product teasers and previews', views: '7K', category: 'Teaser' },
        { id: 3, title: 'Behind the Scenes', type: 'reel', image: '👻', description: 'Authentic behind-the-scenes moments', views: '4K', category: 'Behind Scenes' },
        { id: 4, title: 'Customer Q&A', type: 'reel', image: '👻', description: 'Interactive customer Q&A sessions', views: '6K', category: 'Q&A' },
        { id: 5, title: 'Event Coverage', type: 'reel', image: '👻', description: 'Real-time event coverage and updates', views: '8K', category: 'Events' },
        { id: 6, title: 'Team Takeover', type: 'reel', image: '👻', description: 'Team member takeovers and features', views: '5K', category: 'Team' },
        { id: 7, title: 'Product Launches', type: 'reel', image: '👻', description: 'Exclusive product launch content', views: '9K', category: 'Product' },
        { id: 8, title: 'Brand Personality', type: 'reel', image: '👻', description: 'Showcasing brand personality and culture', views: '6K', category: 'Personality' }
      ]
    }
  }

  const tabs = [
    { id: 'instagram', label: 'Instagram', icon: '📸', color: 'bg-pink-500' },
    { id: 'facebook', label: 'Facebook', icon: '📘', color: 'bg-blue-500' },
    { id: 'tiktok', label: 'TikTok', icon: '🎵', color: 'bg-black' },
    { id: 'snapchat', label: 'Snapchat', icon: '👻', color: 'bg-yellow-400' }
  ]

  const currentData = portfolioData[activeTab]

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
            Our Work
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Our{' '}
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful social media campaigns and content across all major platforms
          </p>
        </motion.div>

        {/* Simple Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? `${tab.color} text-white`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="font-display">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Simple Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            {/* Posts Section */}
            {currentData.posts && (
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
                  Posts ({currentData.posts.length})
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentData.posts.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="card-hover bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-green-400/50 transition-all duration-300 overflow-hidden cursor-pointer">
                        <div className="aspect-square bg-green-400/20 flex items-center justify-center relative group-hover:bg-green-400/30 transition-all duration-300">
                          <span className="text-4xl">{item.image}</span>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="text-white text-xl">👁️</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold text-green-400 bg-green-400/20 px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                            <span className="text-green-400 text-sm font-medium">
                              {item.engagement} engagement
                            </span>
                          </div>
                          <h4 className="font-display font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors">
                              View Details →
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Reels Section */}
            {currentData.reels && (
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
                  Reels ({currentData.reels.length})
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentData.reels.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="card-hover bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-green-400/50 transition-all duration-300 overflow-hidden cursor-pointer">
                        <div className="aspect-square bg-green-400/20 flex items-center justify-center relative group-hover:bg-green-400/30 transition-all duration-300">
                          <span className="text-4xl">{item.image}</span>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="text-white text-2xl">▶️</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold text-green-400 bg-green-400/20 px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                            <span className="text-green-400 text-sm font-medium">
                              {item.views} views
                            </span>
                          </div>
                          <h4 className="font-display font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors">
                              Watch Now →
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Simple CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to See Your Brand Here?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create amazing content that showcases your brand and drives real results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center">
                  Start Your Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 