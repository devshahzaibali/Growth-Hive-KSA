import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <h2>Growth Hive KSA</h2>
            </div>
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        
        <div className="hero-content">
          <h1>Transform Your Business with Social Media Marketing</h1>
          <p>Professional social media marketing agency helping businesses in Saudi Arabia achieve digital success</p>
          <button className="cta-button">Get Started Today</button>
        </div>
      </header>

      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Social Media Management</h3>
              <p>Complete social media management for all major platforms including Instagram, Facebook, TikTok, and Snapchat.</p>
            </div>
            <div className="service-card">
              <h3>Content Creation</h3>
              <p>Professional content creation including graphics, videos, and engaging posts that convert.</p>
            </div>
            <div className="service-card">
              <h3>Paid Advertising</h3>
              <p>Strategic paid advertising campaigns to reach your target audience and drive results.</p>
            </div>
            <div className="service-card">
              <h3>Analytics & Reporting</h3>
              <p>Comprehensive analytics and monthly reports to track your growth and ROI.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>About Growth Hive KSA</h2>
          <p>We are a leading social media marketing agency based in Saudi Arabia, specializing in helping businesses grow their online presence and achieve their digital marketing goals.</p>
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

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>info@growthhiveksa.com</p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+966 50 123 4567</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Riyadh, Saudi Arabia</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Growth Hive KSA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App 