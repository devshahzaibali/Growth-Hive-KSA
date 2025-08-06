import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('instagram')
  const [selectedImage, setSelectedImage] = useState(null)

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

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h2>Growth Hive KSA</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>We Help Your Brand Succeed on Social Media</h1>
          <p>We grow your business through Instagram, Facebook, TikTok, and Snapchat.</p>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Social Media Dashboard" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Social Media Marketing</h3>
              <p>Comprehensive social media management and marketing strategies for all platforms.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎬</div>
              <h3>Content Creation</h3>
              <p>Professional posts and reels creation that engage your audience and drive results.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Instagram & Facebook Ads</h3>
              <p>Strategic paid advertising campaigns to reach your target audience effectively.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>TikTok & Snapchat Campaigns</h3>
              <p>Trending content and viral campaigns for the latest social media platforms.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Analytics & Reporting</h3>
              <p>Detailed analytics and monthly reports to track your growth and ROI.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Engagement & Growth Strategy</h3>
              <p>Proven strategies to increase engagement and grow your social media presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2>Our Work</h2>
          <div className="portfolio-tabs">
            <button 
              className={`tab-button ${activeTab === 'instagram' ? 'active' : ''}`}
              onClick={() => setActiveTab('instagram')}
            >
              Instagram
            </button>
            <button 
              className={`tab-button ${activeTab === 'facebook' ? 'active' : ''}`}
              onClick={() => setActiveTab('facebook')}
            >
              Facebook
            </button>
            <button 
              className={`tab-button ${activeTab === 'tiktok' ? 'active' : ''}`}
              onClick={() => setActiveTab('tiktok')}
            >
              TikTok
            </button>
            <button 
              className={`tab-button ${activeTab === 'snapchat' ? 'active' : ''}`}
              onClick={() => setActiveTab('snapchat')}
            >
              Snapchat
            </button>
          </div>
          
          <div className="portfolio-content">
            {activeTab === 'instagram' && (
              <>
                <h3>Instagram Posts</h3>
                <div className="portfolio-grid">
                  {portfolioData.instagram.posts.map((item) => (
                    <div key={item.id} className="portfolio-item" onClick={() => setSelectedImage(item)}>
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-overlay">
                        <h4>{item.title}</h4>
                        <span className="category">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <h3>Instagram Reels</h3>
                <div className="portfolio-grid reels">
                  {portfolioData.instagram.reels.map((item) => (
                    <div key={item.id} className="portfolio-item reel" onClick={() => setSelectedImage(item)}>
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-overlay">
                        <h4>{item.title}</h4>
                        <span className="category">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {activeTab === 'facebook' && (
              <>
                <h3>Facebook Posts</h3>
                <div className="portfolio-grid">
                  {portfolioData.facebook.posts.map((item) => (
                    <div key={item.id} className="portfolio-item" onClick={() => setSelectedImage(item)}>
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-overlay">
                        <h4>{item.title}</h4>
                        <span className="category">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <h3>Facebook Reels</h3>
                <div className="portfolio-grid reels">
                  {portfolioData.facebook.reels.map((item) => (
                    <div key={item.id} className="portfolio-item reel" onClick={() => setSelectedImage(item)}>
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-overlay">
                        <h4>{item.title}</h4>
                        <span className="category">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {activeTab === 'tiktok' && (
              <>
                <h3>TikTok Reels</h3>
                <div className="portfolio-grid reels">
                  {portfolioData.tiktok.reels.map((item) => (
                    <div key={item.id} className="portfolio-item reel" onClick={() => setSelectedImage(item)}>
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-overlay">
                        <h4>{item.title}</h4>
                        <span className="category">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {activeTab === 'snapchat' && (
              <>
                <h3>Snapchat Reels</h3>
                <div className="portfolio-grid reels">
                  {portfolioData.snapchat.reels.map((item) => (
                    <div key={item.id} className="portfolio-item reel" onClick={() => setSelectedImage(item)}>
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-overlay">
                        <h4>{item.title}</h4>
                        <span className="category">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Growth Hive KSA</h2>
          <p>Growth Hive KSA is a professional social media marketing agency helping businesses in Saudi Arabia achieve digital success. We specialize in platform-specific content strategies and have worked with multiple clients to grow their online presence.</p>
          <div className="stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>1000+</h3>
              <p>Campaigns</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <h3>📞 WhatsApp / Phone</h3>
                <p>+966 50 412 0934</p>
              </div>
              <div className="contact-item">
                <h3>📧 Email</h3>
                <p>growthhiveksa@gmail.com</p>
              </div>
              <div className="contact-item">
                <h3>📍 Location</h3>
                <p>Saudi Arabia</p>
              </div>
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">📷</a>
                  <a href="#" className="social-icon">📘</a>
                  <a href="#" className="social-icon">🎵</a>
                  <a href="#" className="social-icon">👻</a>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7248.5!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890"
              width="100%" 
              height="300" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Saudi Arabia Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Growth Hive KSA</h3>
              <p>Professional Social Media Marketing Agency</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🎵</a>
                <a href="#" className="social-icon">👻</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Growth Hive KSA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeLightbox}>×</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
            <p className="category">{selectedImage.category}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App 