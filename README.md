# Growth Hive KSA

A React-based website for Growth Hive KSA - Social Media Marketing Agency.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Vite** - Build Tool
- **EmailJS** - Email Service
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **ESLint** - Code Linting

## 📧 Email Functionality

The contact form is integrated with EmailJS:

- **Service**: Gmail integration via EmailJS
- **Recipient**: growthhiveksa@gmail.com
- **Features**: 
  - Sends formatted HTML emails
  - Includes user email and message
  - Timestamp and branding
  - Beautiful toast notifications
  - Error handling and validation

## 📦 Deployment

This project is configured for deployment on Vercel with the following settings:

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+

**Deployment Steps**:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Your contact form will work immediately!

**Ready for Production**:
- All testing files removed
- Clean, optimized code
- Production-ready email integration

## 🌐 Live Demo

Visit the deployed application at: [Your Vercel URL]

## 📁 Project Structure

```
src/
├── main.jsx          # React entry point
├── App.jsx           # Main application component
├── App.css           # Component styles
└── index.css         # Global styles
```

## 🔧 Configuration

- `vite.config.js` - Vite configuration
- `vercel.json` - Vercel deployment settings
- `package.json` - Dependencies and scripts 