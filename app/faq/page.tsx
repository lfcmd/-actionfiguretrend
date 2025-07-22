'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Camera, Palette, Download, CreditCard, Shield } from 'lucide-react'
import Navbar from '../components/Navbar'

const faqData = [
  {
    category: "Getting Started",
    icon: <Sparkles className="w-5 h-5" />,
    questions: [
      {
        question: "What is Action Figure Trend?",
        answer: "Action Figure Trend is an AI-powered platform that transforms your photos into stunning collectible action figures. Using cutting-edge artificial intelligence, we create professional-quality figure designs complete with packaging, accessories, and custom themes."
      },
      {
        question: "How does the AI figure generation work?",
        answer: "Simply upload your photo, choose your preferred theme and accessories, and our AI will process your image to create a custom action figure design."
      },
      {
        question: "Do I need to create an account to use the service?",
        answer: "No account is required to try our basic features! You can upload a photo and generate your first figure immediately. However, creating an account allows you to save your creations and access additional features."
      }
    ]
  },
  {
    category: "Photo Requirements",
    icon: <Camera className="w-5 h-5" />,
    questions: [
      {
        question: "What type of photos work best?",
        answer: "For best results, use clear, well-lit photos where the person is facing forward. Portrait-style photos with good contrast work excellently. Avoid blurry, dark, or heavily filtered images."
      },

      {
        question: "Can I use photos of other people?",
        answer: "You should only upload photos that you own or have permission to use. For photos of other people, make sure you have their consent before creating figures."
      }
    ]
  },
  {
    category: "Customization & Features",
    icon: <Palette className="w-5 h-5" />,
    questions: [
      {
        question: "How many accessories can I add to my figure?",
        answer: "You can select up to 5 accessories per figure. We recommend choosing 2-3 accessories for the clearest and most detailed results. Our AI works best with compatible accessory combinations."
      },
      {
        question: "What themes are available?",
        answer: "We offer 12+ optimized themes including Content Creator, Gamer Pro, Rockstar, Fitness Master, Creative Artist, Master Chef, Business Elite, Superhero, and more. Each theme comes with pre-selected compatible accessories."
      },
      {
        question: "Can I customize the packaging design?",
        answer: "Yes! Your figure comes with authentic-looking collectible packaging. You can add custom labels and choose from different packaging styles that match your selected theme."
      },
      {
        question: "What if some accessories don't appear in my generated figure?",
        answer: "If accessories are missing, try regenerating with the same settings or reduce to your top 3 accessories. Our optimized templates provide the best results for accessory visibility."
      }
    ]
  },
  {
    category: "Output & Downloads",
    icon: <Download className="w-5 h-5" />,
    questions: [

      {
        question: "How long does generation take?",
        answer: "Most figures are generated in under 60 seconds. Complex designs with multiple accessories may take slightly longer, but rarely exceed 2 minutes."
      },
      {
        question: "Can I download my created figures?",
        answer: "Yes! Once your figure is generated, you can download it immediately in high resolution. The download includes the full figure with packaging design."
      },

    ]
  },
  {
    category: "Technical Support",
    icon: <Shield className="w-5 h-5" />,
    questions: [
      {
        question: "Why is my image generation failing?",
        answer: "Common issues include: poor image quality, unsupported file format, or network connectivity problems. Try using a clearer photo, check your internet connection, or reduce the number of accessories."
      },
      {
        question: "The generated figure doesn't look like my photo. What can I do?",
        answer: "Ensure your photo is clear, well-lit, and shows the face clearly. Avoid heavily filtered or edited photos. If issues persist, try uploading a different photo or contact our support team."
      },
      {
        question: "Is my uploaded photo data secure?",
        answer: "Yes, we take privacy seriously. Uploaded photos are processed securely and are not stored permanently on our servers. We use industry-standard encryption to protect your data."
      },

    ]
  },

]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [showContactInfo, setShowContactInfo] = useState(false)

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked
              <span className="text-gradient block">Questions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about Action Figure Trend and our AI-powered figure generation service.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemId)
                    
                    return (
                      <div key={faqIndex} className="border border-gray-700 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                        >
                          <span className="font-semibold text-white pr-4">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-700 pt-4">
                              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-gray-400 mb-6">
                Can't find the answer you're looking for? Our support team is here to help you get the most out of Action Figure Trend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/#generator"
                  className="btn-primary px-6 py-3 rounded-xl font-semibold text-white inline-flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Try It Now</span>
                </a>
                <button 
                  onClick={() => setShowContactInfo(!showContactInfo)}
                  className="glass px-6 py-3 rounded-xl font-semibold text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>Contact Support</span>
                </button>
              </div>
              
              {/* Contact Information */}
              {showContactInfo && (
                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Contact Information</h4>
                  <p className="text-gray-400 mb-2">If you have any questions, please contact us at:</p>
                  <p className="text-white">
                    <strong>Email:</strong> fan405141@gmail.com
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <a 
              href="/"
              className="text-gray-400 hover:text-white transition-colors inline-flex items-center space-x-2"
            >
              <span>← Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}