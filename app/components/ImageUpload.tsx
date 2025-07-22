'use client'

import { useState, useRef } from 'react'
import { Upload, X } from 'lucide-react'

interface ImageUploadProps {
  onImageUpload: (image: string | null) => void
  uploadedImage: string | null
}

export default function ImageUpload({ onImageUpload, uploadedImage }: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        onImageUpload(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    onImageUpload(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="glass rounded-2xl p-6 card-hover">
      <h3 className="text-xl font-semibold mb-6 text-white flex items-center space-x-2">
        <Upload className="w-6 h-6 text-purple-400" />
        <span>Upload Your Photo</span>
      </h3>
      
      {!uploadedImage ? (
        <div 
          className="border-2 border-dashed border-gray-600 rounded-xl p-12 text-center cursor-pointer hover:border-purple-400 transition-all hover:bg-white/5"
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-white mb-2 text-lg font-medium">Click to upload your photo</p>
          <p className="text-gray-400">Supports JPG, PNG formats • Max 10MB</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative">
          <img 
            src={uploadedImage} 
            alt="Uploaded photo" 
            className="w-full h-64 object-cover rounded-xl"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-3 right-3 bg-red-500/80 backdrop-blur-sm text-white rounded-full p-2 hover:bg-red-500 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
            Photo uploaded ✓
          </div>
        </div>
      )}
    </div>
  )
}