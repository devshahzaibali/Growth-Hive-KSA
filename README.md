# Growth Hive KSA - Social Media Marketing Agency

A modern, responsive website for Growth Hive KSA, a professional social media marketing agency in Saudi Arabia. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

### **Design & UX**
- ✨ **Modern & Clean Design** - Professional and eye-catching interface
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🎨 **Smooth Animations** - Framer Motion powered animations
- 🎯 **SEO Optimized** - Meta tags, structured data, and performance optimized

### **Security & Performance**
- 🔒 **Enterprise Security** - Comprehensive security headers and CSP
- ⚡ **Fast Loading** - Optimized builds and lazy loading
- 🛡️ **PWA Ready** - Progressive Web App with offline support
- 📊 **Performance Optimized** - Minified code and optimized assets

### **Components**
- 🏠 **Hero Section** - Engaging landing with call-to-action
- ⚙️ **Services** - Showcase of social media marketing services
- 📁 **Portfolio** - Tabbed portfolio with different platforms
- ℹ️ **About** - Company information and statistics
- 📞 **Contact** - Contact form and information
- 🦶 **Footer** - Complete site footer with links

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Intersection Observer
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/devshahzaibali/Growth-Hive-KSA.git

# Navigate to project directory
cd Growth-Hive-KSA

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run preview          # Preview production build

# Build
npm run build            # Build for production
npm run build:secure     # Secure build with checks

# Security & Quality
npm run security-check   # Run all security checks
npm run audit           # Audit dependencies
npm run audit:fix       # Fix security vulnerabilities
npm run lint            # Lint code
npm run lint:fix        # Auto-fix linting issues

# Maintenance
npm run clean           # Clean build artifacts
```

## 🔒 Security Features

- ✅ **Content Security Policy (CSP)**
- ✅ **Security Headers** (X-Frame-Options, X-XSS-Protection, etc.)
- ✅ **HTTPS Enforcement**
- ✅ **Input Validation & Sanitization**
- ✅ **Code Minification & Obfuscation**
- ✅ **Dependency Vulnerability Scanning**

## 📱 PWA Features

- ✅ **Installable** - Can be installed on mobile devices
- ✅ **Offline Support** - Service worker for offline functionality
- ✅ **App-like Experience** - Full-screen mode and native feel
- ✅ **Fast Loading** - Optimized for performance

## 🎨 Design System

### **Colors**
- **Primary**: Green (#22c55e)
- **Secondary**: Gray (#6b7280)
- **Background**: White to light green gradient

### **Typography**
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### **Components**
- **Cards**: Rounded corners with shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Smooth transitions and animations

## 📁 Project Structure

```
growth-hive-ksa/
├── public/
│   ├── _headers          # Security headers
│   ├── robots.txt        # SEO crawling rules
│   ├── manifest.json     # PWA manifest
│   └── favicon_io/       # Favicon assets
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/          # Images and assets
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles
│   └── main.jsx         # Entry point
├── security.config.js    # Security configuration
├── deploy.config.js      # Deployment settings
└── SECURITY.md          # Security documentation
```

## 🚀 Deployment

### **Netlify/Vercel**
1. Connect your GitHub repository
2. Build command: `npm run build:secure`
3. Publish directory: `dist`
4. Environment variables (if needed)

### **Manual Deployment**
```bash
# Build the project
npm run build:secure

# Deploy the dist folder to your hosting provider
```

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file in the root directory:
```env
VITE_APP_NAME=Growth Hive KSA
VITE_APP_VERSION=1.0.0
VITE_CONTACT_EMAIL=growthhiveksa@gmail.com
VITE_CONTACT_PHONE=+966504120934
```

### **Customization**
- **Colors**: Update Tailwind config in `tailwind.config.js`
- **Content**: Modify component files in `src/components/`
- **Security**: Update `security.config.js` and `public/_headers`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Growth Hive KSA**
- **Email**: growthhiveksa@gmail.com
- **Phone**: +966 50 412 0934
- **Location**: Saudi Arabia

## 📄 License

This project is private and proprietary to Growth Hive KSA.

---

**Built with ❤️ by Growth Hive KSA Team**
