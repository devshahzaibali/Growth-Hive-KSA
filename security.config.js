// Security Configuration for Growth Hive KSA
// This file contains security-related constants and settings

export const SECURITY_CONFIG = {
  // Content Security Policy
  CSP: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    'font-src': ["'self'", "https://fonts.gstatic.com"],
    'img-src': ["'self'", "data:", "https:"],
    'connect-src': ["'self'"],
    'frame-ancestors': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"]
  },

  // Security Headers
  HEADERS: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
  },

  // Build Security Settings
  BUILD: {
    removeConsole: true,
    removeDebugger: true,
    sourcemap: false,
    minify: true
  },

  // Environment Variables (for reference)
  ENV_VARS: {
    APP_NAME: 'Growth Hive KSA',
    APP_VERSION: '1.0.0',
    CONTACT_EMAIL: 'growthhiveksa@gmail.com',
    CONTACT_PHONE: '+966504120934'
  }
}

// Security utility functions
export const securityUtils = {
  // Sanitize user input
  sanitizeInput: (input) => {
    if (typeof input !== 'string') return input
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .trim()
  },

  // Validate email format
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  // Validate phone number format
  validatePhone: (phone) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/
    return phoneRegex.test(phone)
  },

  // Generate nonce for CSP
  generateNonce: () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15)
  }
}

export default SECURITY_CONFIG 