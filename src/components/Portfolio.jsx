import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Import assets
// Instagram reels
import i1 from '../assets/insta reels/i1.mp4'
import i2 from '../assets/insta reels/i2.mp4'
import i3 from '../assets/insta reels/i3.mp4'
import i4 from '../assets/insta reels/i4.mp4'
import i5 from '../assets/insta reels/i5.mp4'
import i6 from '../assets/insta reels/i6.mp4'
import i7 from '../assets/insta reels/i7.mp4'

// Facebook reels
import f1 from '../assets/fb reels/f1.mp4'
import f2 from '../assets/fb reels/f2.mp4'
import f3 from '../assets/fb reels/f3.mp4'
import f4 from '../assets/fb reels/f4.mp4'
import f5 from '../assets/fb reels/f5.mp4'
import f6 from '../assets/fb reels/f6.mp4'
import f7 from '../assets/fb reels/f7.mp4'

// Posts
import p1 from '../assets/posts/p1.jpeg'
import p2 from '../assets/posts/p2.jpeg'
import p3 from '../assets/posts/p3.jpeg'
import p4 from '../assets/posts/p4.jpeg'
import p5 from '../assets/posts/p5.jpeg'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('instagram')
  const [selectedImage, setSelectedImage] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Portfolio data with actual assets
  const portfolioData = {
    instagram: {
      posts: [
        { id: 1, type: 'post', title: 'Social Media Strategy', image: p1, category: 'Strategy' },
        { id: 2, type: 'post', title: 'Content Marketing', image: p2, category: 'Content' },
        { id: 3, type: 'post', title: 'Brand Growth', image: p3, category: 'Growth' },
        { id: 4, type: 'post', title: 'Digital Marketing', image: p4, category: 'Marketing' },
        { id: 5, type: 'post', title: 'Social Media Analytics', image: p5, category: 'Analytics' }
      ],
      reels: [
        { id: 9, type: 'reel', title: 'Social Media Tips', video: i1, category: 'Tips' },
        { id: 10, type: 'reel', title: 'Content Creation', video: i2, category: 'Content' },
        { id: 11, type: 'reel', title: 'Growth Strategies', video: i3, category: 'Growth' },
        { id: 12, type: 'reel', title: 'Marketing Insights', video: i4, category: 'Insights' },
        { id: 13, type: 'reel', title: 'Platform Guide', video: i5, category: 'Guide' },
        { id: 14, type: 'reel', title: 'Engagement Tips', video: i6, category: 'Engagement' },
        { id: 15, type: 'reel', title: 'Brand Building', video: i7, category: 'Branding' }
      ]
    },
    facebook: {
      posts: [
        { id: 16, type: 'post', title: 'Facebook Marketing', image: p1, category: 'Marketing' },
        { id: 17, type: 'post', title: 'Business Growth', image: p2, category: 'Growth' },
        { id: 18, type: 'post', title: 'Digital Strategy', image: p3, category: 'Strategy' },
        { id: 19, type: 'post', title: 'Social Media Success', image: p4, category: 'Success' },
        { id: 20, type: 'post', title: 'Content Strategy', image: p5, category: 'Content' }
      ],
      reels: [
        { id: 21, type: 'reel', title: 'Facebook Tips', video: f1, category: 'Tips' },
        { id: 22, type: 'reel', title: 'Business Insights', video: f2, category: 'Insights' },
        { id: 23, type: 'reel', title: 'Marketing Guide', video: f3, category: 'Guide' },
        { id: 24, type: 'reel', title: 'Growth Tips', video: f4, category: 'Tips' },
        { id: 25, type: 'reel', title: 'Strategy Insights', video: f5, category: 'Insights' },
        { id: 26, type: 'reel', title: 'Content Creation', video: f6, category: 'Content' },
        { id: 27, type: 'reel', title: 'Brand Awareness', video: f7, category: 'Branding' }
      ]
    },
    tiktok: {
      reels: [
        { id: 28, type: 'reel', title: 'TikTok Marketing', video: i1, category: 'Marketing' },
        { id: 29, type: 'reel', title: 'Viral Content', video: i2, category: 'Viral' },
        { id: 30, type: 'reel', title: 'Trending Strategies', video: i3, category: 'Trends' },
        { id: 31, type: 'reel', title: 'Content Creation', video: i4, category: 'Content' },
        { id: 32, type: 'reel', title: 'Growth Hacks', video: i5, category: 'Growth' }
      ]
    },
    snapchat: {
      reels: [
        { id: 33, type: 'reel', title: 'Snapchat Marketing', video: f1, category: 'Marketing' },
        { id: 34, type: 'reel', title: 'Story Content', video: f2, category: 'Stories' },
        { id: 35, type: 'reel', title: 'Engagement Tips', video: f3, category: 'Engagement' },
        { id: 36, type: 'reel', title: 'Brand Stories', video: f4, category: 'Branding' },
        { id: 37, type: 'reel', title: 'Creative Content', video: f5, category: 'Creative' }
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
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">Instagram Posts</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-2 left-2 right-2 text-white">
                              <h4 className="font-semibold text-xs">{item.title}</h4>
                              <span className="text-xs bg-green-600 px-1 py-0.5 rounded-full">{item.category}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">Instagram Reels</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                          <video 
                            src={item.video} 
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            muted
                            loop
                            onMouseEnter={(e) => e.target.play()}
                            onMouseLeave={(e) => e.target.pause()}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-2 left-2 right-2 text-white">
                              <h4 className="font-semibold text-xs">{item.title}</h4>
                              <span className="text-xs bg-green-600 px-1 py-0.5 rounded-full">{item.category}</span>
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 bg-black/50 text-white px-1 py-0.5 rounded-full text-xs">
                            ▶️
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'facebook' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">Facebook Posts</h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-2 left-2 right-2 text-white">
                              <h4 className="font-semibold text-xs">{item.title}</h4>
                              <span className="text-xs bg-green-600 px-1 py-0.5 rounded-full">{item.category}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">Facebook Reels</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                        <div className="relative overflow-hidden rounded-lg shadow-md">
                          <video 
                            src={item.video} 
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            muted
                            loop
                            onMouseEnter={(e) => e.target.play()}
                            onMouseLeave={(e) => e.target.pause()}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-2 left-2 right-2 text-white">
                              <h4 className="font-semibold text-xs">{item.title}</h4>
                              <span className="text-xs bg-green-600 px-1 py-0.5 rounded-full">{item.category}</span>
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 bg-black/50 text-white px-1 py-0.5 rounded-full text-xs">
                            ▶️
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
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">
                  {activeTab === 'tiktok' ? 'TikTok' : 'Snapchat'} Reels
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                      <div className="relative overflow-hidden rounded-lg shadow-md">
                        <video 
                          src={item.video} 
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                          muted
                          loop
                          onMouseEnter={(e) => e.target.play()}
                          onMouseLeave={(e) => e.target.pause()}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-2 left-2 right-2 text-white">
                            <h4 className="font-semibold text-xs">{item.title}</h4>
                            <span className="text-xs bg-green-600 px-1 py-0.5 rounded-full">{item.category}</span>
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 bg-black/50 text-white px-1 py-0.5 rounded-full text-xs">
                          ▶️
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
              
              {selectedImage.type === 'reel' ? (
                <video 
                  src={selectedImage.video} 
                  controls
                  className="w-full h-auto max-h-[70vh] object-cover"
                  autoPlay
                />
              ) : (
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-cover"
                />
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImage.category}
                </span>
                {selectedImage.type === 'reel' && (
                  <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium ml-2">
                    ▶️ Reel
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio 