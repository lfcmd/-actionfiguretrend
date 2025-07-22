'use client'

import { useState } from 'react'
import { Sparkles, Users, Zap, Star } from 'lucide-react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'

import ImageUpload from './components/ImageUpload'
import StyleSelector from './components/StyleSelector'
import GeneratedImage from './components/GeneratedImage'

interface StyleData {
  theme: string
  accessories: string[]
  boxColor: string
  label: string
}

const STYLE_TEMPLATES = [
  { id: 'content-creator', name: 'Content Creator', accessories: ['Camera', 'Phone', 'Tripod'] },
  { id: 'gamer', name: 'Gamer Pro', accessories: ['Controller', 'Headset', 'Keyboard'] },
  { id: 'rockstar', name: 'Rockstar', accessories: ['Guitar', 'Sunglasses', 'Microphone'] },
  { id: 'lifestyle', name: 'Lifestyle Queen', accessories: ['Makeup', 'Handbag', 'Perfume'] },
  { id: 'fitness', name: 'Fitness Master', accessories: ['Dumbbells', 'Water Bottle', 'Towel'] },
  { id: 'artist', name: 'Creative Artist', accessories: ['Paintbrush', 'Palette', 'Canvas'] },
  { id: 'chef', name: 'Master Chef', accessories: ['Chef Hat', 'Pan', 'Knife Set'] },
  { id: 'traveler', name: 'World Traveler', accessories: ['Backpack', 'Map', 'Camera'] },
  { id: 'business', name: 'Business Elite', accessories: ['Briefcase', 'Laptop', 'Watch'] },
  { id: 'scientist', name: 'Mad Scientist', accessories: ['Test Tube', 'Microscope', 'Lab Coat'] },
  { id: 'superhero', name: 'Superhero', accessories: ['Mask', 'Cape', 'Badge'] },
  { id: 'pirate', name: 'Space Pirate', accessories: ['Telescope', 'Sword', 'Hat'] }
]

const ACCESSORIES = [
  'Camera', 'Phone', 'Tripod', 'Controller', 'Headset', 'Keyboard', 'Mouse', 'Guitar', 'Sunglasses', 'Microphone',
  'Makeup', 'Handbag', 'Perfume', 'Dumbbells', 'Water Bottle', 'Towel', 'Paintbrush', 'Palette', 'Canvas',
  'Chef Hat', 'Pan', 'Knife Set', 'Backpack', 'Map', 'Briefcase', 'Laptop', 'Watch',
  'Test Tube', 'Microscope', 'Lab Coat', 'Mask', 'Cape', 'Badge', 'Telescope', 'Sword', 'Hat',
  'Books', 'Coffee Cup', 'Glasses', 'Necklace', 'Ring', 'Bracelet', 'Wallet', 'Keys', 'Charger'
]

// Define accessory compatibility groups for better AI generation
const ACCESSORY_COMPATIBILITY = {
  'high': [
    ['Guitar', 'Microphone', 'Sunglasses'],
    ['Camera', 'Tripod', 'Phone'],
    ['Controller', 'Headset', 'Keyboard'],
    ['Makeup', 'Handbag', 'Perfume'],
    ['Dumbbells', 'Water Bottle', 'Towel'],
    ['Paintbrush', 'Palette', 'Canvas'],
    ['Chef Hat', 'Pan', 'Knife Set'],
    ['Briefcase', 'Laptop', 'Watch'],
    ['Test Tube', 'Microscope', 'Lab Coat'],
    ['Mask', 'Cape', 'Badge'],
    ['Telescope', 'Sword', 'Hat']
  ],
  'medium': [
    ['Guitar', 'Sunglasses'],
    ['Camera', 'Phone'],
    ['Controller', 'Headset'],
    ['Makeup', 'Handbag'],
    ['Books', 'Glasses'],
    ['Coffee Cup', 'Laptop']
  ]
}

// Function to check accessory compatibility
const getAccessoryCompatibility = (accessories: string[]) => {
  if (accessories.length <= 1) return 'excellent'

  // Check if all accessories are in a high compatibility group
  for (const group of ACCESSORY_COMPATIBILITY.high) {
    if (accessories.every(acc => group.includes(acc))) {
      return 'excellent'
    }
  }

  // Check if accessories have some compatibility
  let compatiblePairs = 0
  for (let i = 0; i < accessories.length; i++) {
    for (let j = i + 1; j < accessories.length; j++) {
      const pair = [accessories[i], accessories[j]]
      const isCompatible = ACCESSORY_COMPATIBILITY.high.some(group =>
        pair.every(acc => group.includes(acc))
      ) || ACCESSORY_COMPATIBILITY.medium.some(group =>
        pair.every(acc => group.includes(acc))
      )
      if (isCompatible) compatiblePairs++
    }
  }

  const totalPairs = (accessories.length * (accessories.length - 1)) / 2
  const compatibilityRatio = compatiblePairs / totalPairs

  if (compatibilityRatio >= 0.7) return 'good'
  if (compatibilityRatio >= 0.4) return 'fair'
  return 'challenging'
}

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState<StyleData>({
    theme: '',
    accessories: [],
    boxColor: 'pink',
    label: ''
  })

  const [generationError, setGenerationError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!uploadedImage) return

    setIsGenerating(true)
    setGenerationError(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: uploadedImage,
          style: selectedStyle
        })
      })

      const data = await response.json()
      if (data.success) {
        setGeneratedImage(data.imageUrl)
      } else {
        setGenerationError(data.error || 'Generation failed. Please try again.')
      }
    } catch (error) {
      console.error('Generation failed:', error)
      setGenerationError('Network error. Please check your connection and try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Features />

      {/* Generator Section */}
      <section id="generator" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Create Your
              <span className="text-gradient block">Figure Now</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Upload your photo and customize every detail to create the perfect action figure.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Photo Upload Section */}
            <div className="w-full">
              <ImageUpload
                onImageUpload={setUploadedImage}
                uploadedImage={uploadedImage}
              />
            </div>

            {/* Theme Description */}
            <div className="glass rounded-2xl p-6 card-hover mb-8">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2 mb-6">
                <span>🎯</span>
                <span>Theme Description</span>
              </h3>
              <input
                type="text"
                value={selectedStyle.theme}
                onChange={(e) => setSelectedStyle({ ...selectedStyle, theme: e.target.value })}
                placeholder="Describe your figure theme: Sci-fi warrior, Wizard, Modern urban..."
                className="w-full p-3 bg-black/30 border border-gray-600 rounded-xl focus:outline-none focus:border-purple-400 text-white placeholder-gray-400 transition-all"
              />
              <p className="text-xs text-gray-400 mt-2">This will determine the overall style and appearance of your figure</p>
            </div>

            {/* Quick Templates */}
            <div className="glass rounded-2xl p-6 card-hover mb-8">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2 mb-6">
                <span>⚡</span>
                <span>Quick Templates</span>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Optimized for AI</span>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {STYLE_TEMPLATES.map(template => {
                  const isSelected = selectedStyle.label === template.name
                  return (
                    <button
                      key={template.id}
                      type="button"
                      onClick={() => setSelectedStyle({
                        ...selectedStyle,
                        accessories: [...template.accessories],
                        label: template.name,
                        theme: template.name.includes('Creator') ? 'content creator with modern tech setup' :
                          template.name.includes('Gamer') ? 'professional gamer with gaming gear' :
                            template.name.includes('Rockstar') ? 'rock musician performer' :
                              template.name.includes('Lifestyle') ? 'fashion lifestyle influencer' :
                                template.name.includes('Fitness') ? 'fitness trainer and athlete' :
                                  template.name.includes('Artist') ? 'creative artist with art supplies' :
                                    template.name.includes('Chef') ? 'professional chef with cooking tools' :
                                      template.name.includes('Traveler') ? 'world traveler and explorer' :
                                        template.name.includes('Business') ? 'business professional executive' :
                                          template.name.includes('Scientist') ? 'laboratory scientist researcher' :
                                            template.name.includes('Superhero') ? 'superhero with powers and costume' :
                                              template.name.includes('Pirate') ? 'space pirate adventurer' : ''
                      })}
                      className={`p-4 text-left rounded-xl transition-all ${isSelected
                        ? 'bg-purple-500/20 border-purple-400 border-2 text-purple-300'
                        : 'bg-black/20 border border-gray-600 hover:border-purple-400 hover:bg-purple-500/10 text-white hover:text-purple-300'
                        }`}
                    >
                      <div className="font-medium text-sm mb-2">{template.name}</div>
                      <div className="text-xs text-gray-400">{template.accessories.slice(0, 2).join(', ')}</div>
                    </button>
                  )
                })}
              </div>
              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-blue-300 text-sm">
                  💡 <strong>Pro Tip:</strong> These templates are specifically designed to work well with our AI model and include compatible accessory combinations.
                </p>
              </div>
            </div>

            {/* Accessories */}
            <div className="glass rounded-2xl p-6 card-hover mb-8">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2 mb-4">
                <span>🎒</span>
                <span>Accessories</span>
              </h3>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-400">
                  Choose up to 5 accessories for your figure
                </p>
                <div className="text-sm text-gray-400">
                  <span className={`${selectedStyle.accessories.length >= 5 ? 'text-yellow-400' : 'text-purple-400'}`}>
                    {selectedStyle.accessories.length}
                  </span>
                  <span className="text-gray-500">/5 selected</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {ACCESSORIES.map(accessory => {
                  const isSelected = selectedStyle.accessories.includes(accessory)
                  const isDisabled = !isSelected && selectedStyle.accessories.length >= 5

                  return (
                    <label
                      key={accessory}
                      className={`flex items-center text-sm cursor-pointer p-3 rounded-xl border transition-all ${isDisabled
                        ? 'text-gray-500 bg-black/10 border-gray-700 cursor-not-allowed opacity-50'
                        : isSelected
                          ? 'text-purple-300 bg-purple-500/20 border-purple-400 hover:bg-purple-500/30'
                          : 'text-gray-300 hover:text-white bg-black/20 border-gray-600 hover:border-purple-400 hover:bg-white/5'
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        disabled={isDisabled}
                        onChange={() => {
                          if (isDisabled) return

                          const newAccessories = isSelected
                            ? selectedStyle.accessories.filter(a => a !== accessory)
                            : [...selectedStyle.accessories, accessory]
                          setSelectedStyle({ ...selectedStyle, accessories: newAccessories })
                        }}
                        className="mr-3 w-4 h-4 text-purple-500 bg-black/30 border-gray-600 rounded focus:ring-purple-500 disabled:opacity-50"
                      />
                      <span className="font-medium">{accessory}</span>
                    </label>
                  )
                })}
              </div>

              {/* Selected Accessories Preview with Compatibility */}
              {selectedStyle.accessories.length > 0 && (
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-purple-300">Selected Accessories:</h4>
                      {(() => {
                        const compatibility = getAccessoryCompatibility(selectedStyle.accessories)
                        const compatibilityColors = {
                          'excellent': 'text-green-400 bg-green-500/20 border-green-500/30',
                          'good': 'text-blue-400 bg-blue-500/20 border-blue-500/30',
                          'fair': 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
                          'challenging': 'text-red-400 bg-red-500/20 border-red-500/30'
                        }
                        const compatibilityIcons = {
                          'excellent': '🎯',
                          'good': '✅',
                          'fair': '⚠️',
                          'challenging': '🔄'
                        }
                        return (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${compatibilityColors[compatibility]}`}>
                            {compatibilityIcons[compatibility]} {compatibility.charAt(0).toUpperCase() + compatibility.slice(1)} Match
                          </span>
                        )
                      })()}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedStyle.accessories.map((accessory, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-medium border border-purple-400/30"
                        >
                          {accessory}
                        </span>
                      ))}
                    </div>
                    {(() => {
                      const compatibility = getAccessoryCompatibility(selectedStyle.accessories)
                      const messages = {
                        'excellent': '🎯 Perfect combination! These accessories work great together and will generate clear, detailed results.',
                        'good': '✅ Good combination! These accessories are compatible and should generate well together.',
                        'fair': '⚠️ Fair combination. Consider using a template for better results, or reduce to 2-3 accessories.',
                        'challenging': '🔄 Challenging combination. Try using one of our optimized templates for better results.'
                      }
                      const colors = {
                        'excellent': 'text-green-400',
                        'good': 'text-blue-400',
                        'fair': 'text-yellow-400',
                        'challenging': 'text-red-400'
                      }
                      return (
                        <p className={`text-xs ${colors[compatibility]}`}>
                          {messages[compatibility]}
                        </p>
                      )
                    })()}
                  </div>
                </div>
              )}

              {/* Smart Suggestions for Better Combinations */}
              {selectedStyle.accessories.length > 0 && getAccessoryCompatibility(selectedStyle.accessories) === 'challenging' && (
                <div className="mt-4 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <h4 className="text-sm font-semibold text-orange-300 mb-3">🔧 Smart Suggestions</h4>
                  <p className="text-orange-200 text-sm mb-3">
                    Your current combination might be challenging for AI generation. Try these optimized alternatives:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {STYLE_TEMPLATES.filter(template =>
                      template.accessories.some(acc => selectedStyle.accessories.includes(acc))
                    ).slice(0, 3).map(template => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedStyle({
                          ...selectedStyle,
                          accessories: [...template.accessories],
                          label: template.name
                        })}
                        className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-lg hover:bg-orange-500/30 transition-colors text-xs"
                      >
                        {template.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedStyle.accessories.length >= 5 && (
                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-400 text-sm flex items-center">
                    <span className="mr-2">⚠️</span>
                    Maximum of 5 accessories reached. Unselect an item to choose a different one.
                  </p>
                </div>
              )}
            </div>

            {/* Generated Image Preview */}
            <div className="glass rounded-2xl p-6 card-hover mb-8">
              <GeneratedImage
                imageUrl={generatedImage}
                isGenerating={isGenerating}
              />

              {/* Post-generation feedback and retry options */}
              {generatedImage && selectedStyle.accessories.length > 0 && (
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-300 mb-3">🔍 Generation Review</h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Please check if all {selectedStyle.accessories.length} accessories are clearly visible in your generated figure:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedStyle.accessories.map((accessory, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded text-xs border border-blue-400/30"
                        >
                          ✓ {accessory}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors text-sm disabled:opacity-50"
                      >
                        🔄 Regenerate with Same Settings
                      </button>
                      <button
                        onClick={() => {
                          // Reduce accessories to top 3 for better results
                          const topAccessories = selectedStyle.accessories.slice(0, 3)
                          setSelectedStyle({ ...selectedStyle, accessories: topAccessories })
                        }}
                        className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg hover:bg-yellow-500/30 transition-colors text-sm"
                      >
                        ⚡ Try with Top 3 Accessories
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-300 text-sm">
                      💡 <strong>Pro Tips:</strong> If some accessories are missing, try regenerating or use one of our optimized templates for better results.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Generation Tips */}
            {selectedStyle.accessories.length > 0 && (
              <div className="glass rounded-2xl p-6 card-hover mb-8">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2 mb-4">
                  <span>💡</span>
                  <span>Generation Tips</span>
                </h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>• <strong className="text-white">Best Results:</strong> Choose 2-3 accessories for clearer details</p>
                  <p>• <strong className="text-white">Compatibility:</strong> Some accessories work better together (e.g., Guitar + Microphone + Sunglasses)</p>
                  <p>• <strong className="text-white">Theme Matching:</strong> Add a theme description that matches your accessories for better results</p>
                  <p>• <strong className="text-white">Generation Time:</strong> More accessories may take slightly longer to process</p>
                </div>
              </div>
            )}

            {/* Error Display */}
            {generationError && (
              <div className="glass rounded-2xl p-6 card-hover mb-8 border border-red-500/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <span className="text-red-400">⚠️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-red-400">Generation Error</h3>
                </div>
                <p className="text-red-300 mb-4">{generationError}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Try reducing the number of accessories (2-3 works best)</p>
                  <p>• Make sure your photo is clear and well-lit</p>
                  <p>• Check your internet connection</p>
                  <p>• Wait a moment and try again</p>
                </div>
                <button
                  onClick={() => setGenerationError(null)}
                  className="mt-4 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Generate Button */}
            <div className="text-center">
              <button
                onClick={handleGenerate}
                disabled={!uploadedImage || isGenerating}
                className="btn-primary py-4 px-12 rounded-xl text-xl font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 glow mx-auto"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span className="loading-dots">Generating your figure with {selectedStyle.accessories.length} accessories</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    Generate My Figure
                    {selectedStyle.accessories.length > 0 && (
                      <span className="text-sm opacity-80">({selectedStyle.accessories.length} accessories)</span>
                    )}
                  </>
                )}
              </button>

              {!uploadedImage && (
                <p className="text-gray-400 text-sm mt-3">
                  Please upload a photo first to generate your figure
                </p>
              )}

              {generationError && (
                <button
                  onClick={handleGenerate}
                  disabled={!uploadedImage || isGenerating}
                  className="mt-4 px-6 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors disabled:opacity-50"
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About
              <span className="text-gradient block">Action Figure Trend</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Revolutionizing digital creativity with AI-powered action figure generation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                Action Figure Trend was born from a simple idea: everyone should be able to create amazing collectible action figures from their photos. We combine cutting-edge AI technology with intuitive design to make professional-quality figure creation accessible to creators, gamers, artists, and collectors worldwide.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our platform transforms ordinary photos into extraordinary collectible figures in under 60 seconds, offering unlimited customization options and professional 4K output quality.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 card-hover">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">50K+ Active Users</h4>
                    <p className="text-gray-400">Creators worldwide trust Action Figure Trend</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">1M+ Figures Created</h4>
                    <p className="text-gray-400">Bringing imagination to life</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">4.9/5 Rating</h4>
                    <p className="text-gray-400">Loved by our community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-2xl p-6 card-hover text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                We leverage the latest AI technology to deliver cutting-edge creative tools that push the boundaries of what's possible.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 card-hover text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-gray-400">
                Our vibrant community of creators, artists, and collectors drives everything we do. Your feedback shapes our future.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 card-hover text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality</h3>
              <p className="text-gray-400">
                Every figure generated meets professional standards with 4K resolution and meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Action Figure Trend</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Action Figure Trend. All rights reserved. Made with ❤️ for creators.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}