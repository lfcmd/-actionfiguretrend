'use client'

import { FileText, Scale, AlertTriangle, CreditCard, Shield, Users } from 'lucide-react'
import Navbar from '../components/Navbar'

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of
              <span className="text-gradient block">Service</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using Action Figure Trend services.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: December 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Acceptance of Terms */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>By accessing and using Action Figure Trend ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>
                <p>If you do not agree to abide by the above, please do not use this service. These terms apply to all visitors, users, and others who access or use the service.</p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                  <p className="text-blue-300 text-sm">
                    <strong>Important:</strong> By creating an account or using our service, you confirm that you are at least 13 years old and have the legal capacity to enter into this agreement.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Description */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Service Description</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>Action Figure Trend is an AI-powered platform that allows users to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transform photos into custom action figure designs using artificial intelligence</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Customize figures with various themes, accessories, and styling options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Download high-resolution images of generated figures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access additional features based on subscription tier</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>When using Action Figure Trend, you agree to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Own or have rights</strong> to all photos you upload</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Not upload</strong> inappropriate, offensive, or copyrighted content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Respect</strong> the intellectual property rights of others</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Use the service</strong> only for lawful purposes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Not attempt</strong> to reverse engineer, hack, or abuse the service</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Prohibited Content */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold text-white">Prohibited Content</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>You may not upload or generate content that:</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contains nudity, sexual content, or is otherwise inappropriate</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Promotes violence, hatred, or discrimination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Infringes on copyrights, trademarks, or other intellectual property</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contains personal information of others without consent</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Is used for illegal activities or fraud</span>
                  </li>
                </ul>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
                  <p className="text-red-300 text-sm">
                    <strong>Violation Notice:</strong> Accounts found violating these terms may be suspended or terminated without notice.
                  </p>
                </div>
              </div>
            </section>

            {/* Payment and Subscriptions */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <CreditCard className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Payment and Subscriptions</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Free Tier</h3>
                  <p>Our free tier provides limited access to basic features with usage restrictions.</p>
                </div>

              </div>
            </section>

            {/* Intellectual Property */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Your Content</h3>
                  <p>You retain ownership of photos you upload. By using our service, you grant us a limited license to process your images for figure generation.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Generated Figures</h3>
                  <p>You own the generated figure images created from your photos. However, you cannot claim ownership of the underlying AI models or generation technology.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Platform</h3>
                  <p>Action Figure Trend, our logo, and all related technology are owned by us and protected by intellectual property laws.</p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>Action Figure Trend is provided "as is" without warranties of any kind. We are not liable for:</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Service interruptions or technical issues</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Loss of data or generated content</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Indirect, incidental, or consequential damages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Issues arising from user-generated content</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Changes to Terms</h2>
              </div>
              <div className="space-y-4 text-gray-400">
                <p>We reserve the right to modify these terms at any time. When we do:</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>We will notify users via email and in-app notifications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Changes take effect 30 days after notification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Continued use constitutes acceptance of new terms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You may terminate your account if you disagree with changes</span>
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