#!/bin/bash

# Action Figure Trend - Deployment Script
echo "🚀 Deploying Action Figure Trend to Vercel..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git remote add origin https://github.com/lfcmd/-actionfiguretrend.git
fi

# Add all files
echo "📁 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: Action Figure Trend - Ready for Vercel deployment

✨ Features:
- Complete Next.js 14 application with TypeScript
- AI figure generation with Replicate API
- Modern UI with Tailwind CSS and glass morphism
- Responsive design for all devices
- FAQ page with interactive Q&A
- Privacy Policy and Terms of Service
- Optimized for Vercel deployment

🔧 Configuration:
- Vercel.json configuration
- Environment variables setup
- Next.js optimization
- Image domains configured
- Build scripts ready

📱 Pages:
- Landing page with hero section
- AI figure generator
- FAQ with contact support
- Privacy policy
- Terms of service

🎨 Brand: Action Figure Trend
📧 Contact: fan405141@gmail.com"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Deployment complete!"
echo ""
echo "🔗 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Import your GitHub repository"
echo "3. Set REPLICATE_API_TOKEN environment variable"
echo "4. Deploy!"
echo ""
echo "📧 Need help? Contact: fan405141@gmail.com"