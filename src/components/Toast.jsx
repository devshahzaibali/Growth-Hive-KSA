import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Toast = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-500',
          icon: '✅',
          border: 'border-green-600'
        }
      case 'error':
        return {
          bg: 'bg-red-500',
          icon: '❌',
          border: 'border-red-600'
        }
      case 'warning':
        return {
          bg: 'bg-yellow-500',
          icon: '⚠️',
          border: 'border-yellow-600'
        }
      default:
        return {
          bg: 'bg-blue-500',
          icon: 'ℹ️',
          border: 'border-blue-600'
        }
    }
  }

  const styles = getToastStyles()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed top-4 right-4 z-50 max-w-sm w-full ${styles.bg} text-white rounded-lg shadow-lg border ${styles.border} overflow-hidden`}
        >
          <div className="flex items-center p-4">
            <div className="flex-shrink-0">
              <span className="text-xl">{styles.icon}</span>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">{message}</p>
            </div>
            <div className="ml-4 flex-shrink-0">
              <button
                onClick={onClose}
                className="inline-flex text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 transition-colors duration-200"
              >
                <span className="sr-only">Close</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-1 bg-black bg-opacity-20">
            <motion.div
              className="h-full bg-white bg-opacity-30"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Toast
