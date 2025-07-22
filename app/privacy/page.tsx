'use client'

import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy
              <span className="text-gradient block">Policy</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your privacy is our priority. Learn how we protect and handle your data.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Information We Collect */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Photos and Images</h3>
                  <p>We temporarily process the photos you upload to generate your custom action figures.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Account Information</h3>
                  <p>When you create an account, we collect your email address, username, and encrypted password. We may also collect optional profile information you choose to provide.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
                  <p>We collect information about how you use Action Figure Trend, including features accessed, figures created, and technical data like IP address and browser type for security and improvement purposes.</p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <UserCheck className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">AI Processing:</strong> Your uploaded photos are processed by our AI models to generate custom action figures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Service Delivery:</strong> To provide, maintain, and improve our figure generation services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Communication:</strong> To send you service updates, security alerts, and respond to your inquiries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Security:</strong> To detect, prevent, and address technical issues and fraudulent activity</span>
                  </li>
                </ul>
              </div>
            </section>



            {/* Data Sharing */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold text-white">Data Sharing</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p className="text-white font-semibold">We do NOT sell, rent, or share your personal information with third parties for marketing purposes.</p>
                <p>We may share limited data only in these specific circumstances:</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Service Providers:</strong> With trusted partners who help us operate our service (e.g., cloud hosting, payment processing)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights and users' safety</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets</span>
                  </li>
                </ul>
              </div>
            </section>




          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <a 
              href="/"
              className="btn-primary px-8 py-3 rounded-xl font-semibold text-white inline-flex items-center space-x-2 glow"
            >
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}