'use client'

import { Sparkles, Zap, Palette, Download, Shield, Infinity } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description: "Advanced AI technology transforms your photos into stunning action figures with incredible detail and accuracy.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate professional-quality figures in under 60 seconds. No waiting, no delays, just instant magic.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Palette,
    title: "Unlimited Customization",
    description: "Choose from 50+ themes, 100+ accessories, and endless styling options to create your perfect figure.",
    color: "from-green-500 to-blue-500"
  },
  {
    icon: Download,
    title: "High-Quality Output",
    description: "Download 4K resolution images perfect for printing, sharing, or commercial use. Professional quality guaranteed.",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your photos are processed securely and deleted after generation. We never store or share your personal images.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Infinity,
    title: "Unlimited Generations",
    description: "Create as many figures as you want with our premium plans. No limits, no restrictions, pure creativity.",
    color: "from-indigo-500 to-cyan-500"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="text-gradient block">Creative Minds</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to create amazing action figures from your photos. 
            Professional tools, beginner-friendly interface.
          </p>
        </div>

        {/* 功能网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 card-hover group"
            >
              {/* 图标 */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* 内容 */}
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-white glow">
            Try All Features Free
          </button>
        </div>
      </div>
    </section>
  )
}