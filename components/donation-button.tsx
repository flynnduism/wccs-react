"use client"

import { useState } from "react"

interface DonationButtonProps {
  givebutter_url?: string
  position?: 'bottom-right' | 'bottom-left'
  showPulse?: boolean
  customText?: string
}

export function DonationButton({ 
  givebutter_url = "https://givebutter.com/KyxvSOSH1VudZKVc",
  position = 'bottom-right',
  showPulse = true,
  customText = "Donate"
}: DonationButtonProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50 group`}>
      {/* Main Donation Button */}
      <a
        href={givebutter_url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${showPulse ? 'donation-button' : ''} flex items-center justify-center w-16 h-16 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:w-auto group-hover:px-4`}
        aria-label="Make a donation to support WCCS"
      >
        {/* Heart Icon */}
        <svg 
          className="w-6 h-6 group-hover:mr-2" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        
        {/* Donation Text (hidden until hover) */}
        <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {customText}
        </span>
      </a>
      
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200"
        aria-label="Close donation button"
      >
        ×
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Support WCCS
        <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
      </div>
    </div>
  )
}