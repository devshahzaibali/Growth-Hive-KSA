import { useState } from 'react'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('instagram')

  const portfolioData = {
    instagram: {
      posts: [
        { id: 1, title: 'Brand Awareness Campaign', type: 'post', image: '📸', description: 'Engaging carousel post showcasing product features' },
        { id: 2, title: 'Lifestyle Content', type: 'post', image: '📸', description: 'Authentic lifestyle photography for brand connection' },
        { id: 3, title: 'Product Showcase', type: 'post', image: '📸', description: 'High-quality product photography with compelling copy' },
        { id: 4, title: 'Behind the Scenes', type: 'post', image: '📸', description: 'Exclusive behind-the-scenes content for engagement' },
        { id: 5, title: 'User Generated Content', type: 'post', image: '📸', description: 'Customer testimonials and reviews showcase' },
        { id: 6, title: 'Educational Content', type: 'post', image: '📸', description: 'Informative posts that add value to followers' },
        { id: 7, title: 'Promotional Campaign', type: 'post', image: '📸', description: 'Strategic promotional content with clear CTAs' },
        { id: 8, title: 'Community Engagement', type: 'post', image: '📸', description: 'Interactive posts that encourage participation' }
      ],
      reels: [
        { id: 1, title: 'Product Demo Reel', type: 'reel', image: '🎬', description: 'Short-form video showcasing product benefits' },
        { id: 2, title: 'Trending Challenge', type: 'reel', image: '🎬', description: 'Viral challenge participation for brand visibility' },
        { id: 3, title: 'Behind the Scenes Reel', type: 'reel', image: '🎬', description: 'Authentic behind-the-scenes video content' },
        { id: 4, title: 'Tutorial Reel', type: 'reel', image: '🎬', description: 'Educational content in engaging video format' },
        { id: 5, title: 'Customer Testimonial Reel', type: 'reel', image: '🎬', description: 'Video testimonials from satisfied customers' }
      ]
    },
    facebook: {
      posts: [
        { id: 1, title: 'Community Building Post', type: 'post', image: '📘', description: 'Engaging content that builds community' },
        { id: 2, title: 'Educational Article', type: 'post', image: '📘', description: 'Long-form educational content for Facebook audience' },
        { id: 3, title: 'Event Promotion', type: 'post', image: '📘', description: 'Strategic event promotion and awareness' },
        { id: 4, title: 'Customer Spotlight', type: 'post', image: '📘', description: 'Highlighting customer success stories' },
        { id: 5, title: 'Industry Insights', type: 'post', image: '📘', description: 'Thought leadership content for industry authority' },
        { id: 6, title: 'Product Launch', type: 'post', image: '📘', description: 'Exciting product launch announcements' },
        { id: 7, title: 'Team Introduction', type: 'post', image: '📘', description: 'Humanizing the brand through team features' },
        { id: 8, title: 'Milestone Celebration', type: 'post', image: '📘', description: 'Celebrating business milestones and achievements' }
      ],
      reels: [
        { id: 1, title: 'Company Culture Reel', type: 'reel', image: '🎬', description: 'Showcasing company culture and values' },
        { id: 2, title: 'Product Tutorial Reel', type: 'reel', image: '🎬', description: 'Detailed product tutorial videos' },
        { id: 3, title: 'Customer Success Reel', type: 'reel', image: '🎬', description: 'Customer success stories in video format' },
        { id: 4, title: 'Industry Expert Reel', type: 'reel', image: '🎬', description: 'Expert insights and industry commentary' },
        { id: 5, title: 'Behind the Scenes Reel', type: 'reel', image: '🎬', description: 'Authentic behind-the-scenes content' }
      ]
    },
    tiktok: {
      reels: [
        { id: 1, title: 'Viral Dance Challenge', type: 'reel', image: '🎵', description: 'Trending dance challenge participation' },
        { id: 2, title: 'Product Hack Video', type: 'reel', image: '🎵', description: 'Creative product usage hacks and tips' },
        { id: 3, title: 'Behind the Scenes', type: 'reel', image: '🎵', description: 'Authentic behind-the-scenes moments' },
        { id: 4, title: 'Customer Testimonial', type: 'reel', image: '🎵', description: 'Real customer testimonials and reviews' },
        { id: 5, title: 'Trending Sound Usage', type: 'reel', image: '🎵', description: 'Popular sound integration for virality' },
        { id: 6, title: 'Educational Content', type: 'reel', image: '🎵', description: 'Quick educational tips and insights' },
        { id: 7, title: 'Product Showcase', type: 'reel', image: '🎵', description: 'Creative product demonstrations' },
        { id: 8, title: 'Brand Story Video', type: 'reel', image: '🎵', description: 'Compelling brand story and mission' }
      ]
    },
    snapchat: {
      reels: [
        { id: 1, title: 'Daily Story Content', type: 'reel', image: '👻', description: 'Daily engaging story content' },
        { id: 2, title: 'Product Teasers', type: 'reel', image: '👻', description: 'Exclusive product teasers and previews' },
        { id: 3, title: 'Behind the Scenes', type: 'reel', image: '👻', description: 'Authentic behind-the-scenes moments' },
        { id: 4, title: 'Customer Q&A', type: 'reel', image: '👻', description: 'Interactive customer Q&A sessions' },
        { id: 5, title: 'Event Coverage', type: 'reel', image: '👻', description: 'Real-time event coverage and updates' },
        { id: 6, title: 'Team Takeover', type: 'reel', image: '👻', description: 'Team member takeovers and features' },
        { id: 7, title: 'Product Launches', type: 'reel', image: '👻', description: 'Exclusive product launch content' },
        { id: 8, title: 'Brand Personality', type: 'reel', image: '👻', description: 'Showcasing brand personality and culture' }
      ]
    }
  }

  const tabs = [
    { id: 'instagram', label: 'Instagram', icon: '📸' },
    { id: 'facebook', label: 'Facebook', icon: '📘' },
    { id: 'tiktok', label: 'TikTok', icon: '🎵' },
    { id: 'snapchat', label: 'Snapchat', icon: '👻' }
  ]

  const currentData = portfolioData[activeTab]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful social media campaigns and content across all major platforms
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="space-y-12">
          {/* Posts Section */}
          {currentData.posts && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Posts ({currentData.posts.length})
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentData.posts.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer group"
                  >
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-4xl">
                      {item.image}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reels Section */}
          {currentData.reels && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Reels ({currentData.reels.length})
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentData.reels.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer group"
                  >
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-4xl relative">
                      {item.image}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                          <div className="text-white text-xl">▶️</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-green-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to See Your Brand Here?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create amazing content that showcases your brand and drives results
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio 