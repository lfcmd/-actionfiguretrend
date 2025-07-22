'use client'

import { Download, Copy, Share2 } from 'lucide-react'
import { useState } from 'react'

interface GeneratedImageProps {
  imageUrl: string | null
  isGenerating: boolean
}

export default function GeneratedImage({ imageUrl, isGenerating }: GeneratedImageProps) {
  const [copied, setCopied] = useState(false)

  const handleDownload = async () => {
    if (!imageUrl) return
    
    try {
      // Fetch the image as blob to handle CORS issues
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      
      // Create object URL from blob
      const blobUrl = URL.createObjectURL(blob)
      
      // Create download link
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `figure-ai-${Date.now()}.jpg`
      link.style.display = 'none'
      
      // Add to DOM, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Clean up object URL
      URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback to direct link method
      const link = document.createElement('a')
      link.href = imageUrl
      link.download = `figure-ai-${Date.now()}.jpg`
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleCopyLink = async () => {
    if (!imageUrl) return
    
    try {
      await navigator.clipboard.writeText(imageUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  if (isGenerating) {
    return (
      <div className="glass rounded-2xl p-8 card-hover">
        <h3 className="text-xl font-semibold mb-6 text-white flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
            🎨
          </div>
          <span>Creating Your Figure</span>
        </h3>
        <div className="flex flex-col items-center justify-center h-80 space-y-6">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500/30 border-t-purple-500"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
          </div>
          <div className="text-center space-y-2">
            <p className="text-white text-lg font-medium">AI is crafting your unique figure</p>
            <p className="text-gray-400">This usually takes 30-60 seconds</p>
          </div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!imageUrl) {
    return (
      <div className="glass rounded-2xl p-8 card-hover">
        <h3 className="text-xl font-semibold mb-6 text-white flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
            🖼️
          </div>
          <span>Your Figure Preview</span>
        </h3>
        <div className="flex flex-col items-center justify-center h-80 text-center space-y-6">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
            <Share2 className="w-12 h-12 text-purple-400" />
          </div>
          <div className="space-y-2">
            <p className="text-white text-lg font-medium">Ready to create magic?</p>
            <p className="text-gray-400 max-w-sm">Upload your photo and customize the style, then hit generate to see your amazing action figure!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="glass rounded-2xl p-8 card-hover">
      <h3 className="text-xl font-semibold mb-6 text-white flex items-center space-x-2">
        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded flex items-center justify-center">
          ✨
        </div>
        <span>Your Custom Figure</span>
      </h3>
      
      <div className="mb-6">
        <img 
          src={imageUrl} 
          alt="Generated action figure" 
          className="w-full rounded-xl shadow-2xl"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-4 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all flex items-center justify-center gap-2 font-medium"
        >
          <Download className="w-5 h-5" />
          Download
        </button>
        
        <button
          onClick={handleCopyLink}
          className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 font-medium"
        >
          <Copy className="w-5 h-5" />
          {copied ? 'Copied!' : 'Copy Link'}
        </button>
      </div>
    </div>
  )
}