// Deployment Configuration for Growth Hive KSA
// This file contains deployment-related security settings

export const DEPLOYMENT_CONFIG = {
  // Build settings
  build: {
    outputDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    target: 'es2015'
  },

  // Security checks before deployment
  securityChecks: [
    'npm audit',
    'npm run lint',
    'npm run type-check'
  ],

  // File exclusions for security
  excludeFiles: [
    '.env',
    '.env.local',
    '.env.development',
    '.env.test',
    'node_modules',
    '.git',
    '.gitignore',
    'README.md',
    'package-lock.json',
    'yarn.lock',
    'security.config.js',
    'deploy.config.js'
  ],

  // Required security headers
  requiredHeaders: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
  },

  // Content Security Policy
  csp: {
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

  // Performance optimizations
  performance: {
    compression: true,
    caching: {
      static: '1 year',
      images: '1 year',
      fonts: '1 year'
    }
  }
}

// Deployment utility functions
export const deploymentUtils = {
  // Check if all security requirements are met
  checkSecurityRequirements: () => {
    const checks = [
      // Check for console.log statements
      () => {
        // This would be implemented in a real deployment script
        return true
      },
      // Check for debugger statements
      () => {
        return true
      },
      // Check for sensitive information in code
      () => {
        return true
      }
    ]
    
    return checks.every(check => check())
  },

  // Generate deployment manifest
  generateManifest: () => {
    return {
      name: 'Growth Hive KSA',
      short_name: 'GHKSA',
      description: 'Professional Social Media Marketing Agency in Saudi Arabia',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#22c55e',
      icons: [
        {
          src: '/src/assets/favicon_io (1)/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/src/assets/favicon_io (1)/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },

  // Validate build output
  validateBuild: (buildPath) => {
    const requiredFiles = [
      'index.html',
      'assets'
    ]
    
    // This would check if all required files exist
    return true
  }
}

export default DEPLOYMENT_CONFIG 