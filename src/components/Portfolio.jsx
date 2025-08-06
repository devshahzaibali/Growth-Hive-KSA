import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('instagram')
  const [selectedImage, setSelectedImage] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Portfolio data
  const portfolioData = {
    instagram: {
      posts: [
        { id: 1, type: 'post', title: 'Social Media Strategy', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop', category: 'Strategy' },
        { id: 2, type: 'post', title: 'Content Marketing', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', category: 'Content' },
        { id: 3, type: 'post', title: 'Brand Growth', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop', category: 'Growth' },
        { id: 4, type: 'post', title: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop', category: 'Marketing' },
        { id: 5, type: 'post', title: 'Social Media Analytics', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop', category: 'Analytics' },
        { id: 6, type: 'post', title: 'Engagement Strategy', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop', category: 'Engagement' },
        { id: 7, type: 'post', title: 'Platform Optimization', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop', category: 'Optimization' },
        { id: 8, type: 'post', title: 'Campaign Management', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', category: 'Campaigns' }
      ],
      reels: [
        { id: 9, type: 'reel', title: 'Social Media Tips', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop', category: 'Tips' },
        { id: 10, type: 'reel', title: 'Content Creation', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop', category: 'Content' },
        { id: 11, type: 'reel', title: 'Growth Strategies', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=600&fit=crop', category: 'Growth' },
        { id: 12, type: 'reel', title: 'Marketing Insights', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop', category: 'Insights' },
        { id: 13, type: 'reel', title: 'Platform Guide', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop', category: 'Guide' }
      ]
    },
    facebook: {
      posts: [
        { id: 14, type: 'post', title: 'Facebook Marketing', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop', category: 'Marketing' },
        { id: 15, type: 'post', title: 'Business Growth', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', category: 'Growth' },
        { id: 16, type: 'post', title: 'Digital Strategy', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop', category: 'Strategy' },
        { id: 17, type: 'post', title: 'Social Media Success', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop', category: 'Success' },
        { id: 18, type: 'post', title: 'Content Strategy', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop', category: 'Content' },
        { id: 19, type: 'post', title: 'Brand Awareness', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop', category: 'Branding' },
        { id: 20, type: 'post', title: 'Lead Generation', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop', category: 'Leads' },
        { id: 21, type: 'post', title: 'Community Building', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop', category: 'Community' }
      ],
      reels: [
        { id: 22, type: 'reel', title: 'Facebook Tips', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop', category: 'Tips' },
        { id: 23, type: 'reel', title: 'Business Insights', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop', category: 'Insights' },
        { id: 24, type: 'reel', title: 'Marketing Guide', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=600&fit=crop', category: 'Guide' },
        { id: 25, type: 'reel', title: 'Growth Tips', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop', category: 'Tips' },
        { id: 26, type: 'reel', title: 'Strategy Insights', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop', category: 'Insights' }
      ]
    },
    tiktok: {
      reels: [
        { id: 27, type: 'reel', title: 'TikTok Marketing', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop', category: 'Marketing' },
        { id: 28, type: 'reel', title: 'Viral Content', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop', category: 'Viral' },
        { id: 29, type: 'reel', title: 'Trending Strategies', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=600&fit=crop', category: 'Trends' },
        { id: 30, type: 'reel', title: 'Content Creation', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop', category: 'Content' },
        { id: 31, type: 'reel', title: 'Growth Hacks', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop', category: 'Growth' }
      ]
    },
    snapchat: {
      reels: [
        { id: 32, type: 'reel', title: 'Snapchat Marketing', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=600&fit=crop', category: 'Marketing' },
        { id: 33, type: 'reel', title: 'Story Content', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=600&fit=crop', category: 'Stories' },
        { id: 34, type: 'reel', title: 'Engagement Tips', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=600&fit=crop', category: 'Engagement' },
        { id: 35, type: 'reel', title: 'Brand Stories', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop', category: 'Branding' },
        { id: 36, type: 'reel', title: 'Creative Content', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop', category: 'Creative' }
      ]
    }
  }

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: '📷' },
    { id: 'facebook', name: 'Facebook', icon: '📘' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'snapchat', name: 'Snapchat', icon: '👻' }
  ]

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work across all major social media platforms
          </p>
        </motion.div>

        {/* Platform Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {platforms.map((platform, index) => (
            <motion.button
              key={platform.id}
              onClick={() => setActiveTab(platform.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === platform.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <span className="text-xl">{platform.icon}</span>
              <span>{platform.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'instagram' && (
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">Instagram Posts</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {portfolioData.instagram.posts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImage(item)}
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <h4 className="font-semibold text-sm">{item.title}</h4>
                              <span className="text-xs bg-green-600 px-2 py-1 rounded-full">{item.category}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">Instagram Reels</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {portfolioData.instagram.reels.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImage(item)}
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <h4 className="font-semibold text-sm">{item.title}</h4>
                              <span className="text-xs bg-green-600 px-2 py-1 rounded-full">{item.category}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'facebook' && (
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">Facebook Posts</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {portfolioData.facebook.posts.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImage(item)}
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <h4 className="font-semibold text-sm">{item.title}</h4>
                              <span className="text-xs bg-green-600 px-2 py-1 rounded-full">{item.category}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">Facebook Reels</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {portfolioData.facebook.reels.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImage(item)}
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <h4 className="font-semibold text-sm">{item.title}</h4>
                              <span className="text-xs bg-green-600 px-2 py-1 rounded-full">{item.category}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {(activeTab === 'tiktok' || activeTab === 'snapchat') && (
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
                  {activeTab === 'tiktok' ? 'TikTok' : 'Snapchat'} Reels
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {portfolioData[activeTab].reels.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="group cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImage(item)}
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h4 className="font-semibold text-sm">{item.title}</h4>
                            <span className="text-xs bg-green-600 px-2 py-1 rounded-full">{item.category}</span>
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
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio 