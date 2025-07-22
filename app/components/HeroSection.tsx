'use client'

import { ArrowRight, Star, Users, Zap } from 'lucide-react'

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景动画 */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* 浮动元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 社会证明 */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-gray-400 text-sm">Trusted by 50K+ creators</span>
        </div>

        {/* 主标题 */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Create Your
          <span className="text-gradient block">Dream Figure</span>
          with AI Magic
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform any photo into stunning collectible action figures. 
          Professional quality, unlimited creativity, powered by cutting-edge AI.
        </p>

        {/* 统计数据 */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">50K+ Users</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300">1M+ Figures Created</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">4.9/5 Rating</span>
          </div>
        </div>

        {/* CTA 按钮 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#generator" className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold text-white flex items-center space-x-2 glow">
            <span>Start Creating Free</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* 产品预览 */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 card-hover">
            <div className="grid md:grid-cols-3 gap-6">
              {/* 原始照片示例 */}
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2">
                  <img 
                    src="/images/Original Photo.jpg" 
                    alt="Original Photo Example"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-400">Upload your photo</p>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-purple-400" />
              </div>
              
              {/* AI 生成图片示例 */}
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-green-500/20 p-2">
                  <img 
                    src="/images/Get your custom figure.jpg" 
                    alt="AI Generated Figure Example"
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                <p className="text-sm text-gray-400">Get your custom figure</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}