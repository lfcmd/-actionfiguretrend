# 🚀 Vercel Deployment Guide

This guide will help you deploy Action Figure Trend to Vercel with automatic deployments from GitHub.

## 📋 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Replicate API Token**: Get your token from [replicate.com/account/api-tokens](https://replicate.com/account/api-tokens)

## 🔧 Step-by-Step Deployment

### 1. Push to GitHub

First, push your code to GitHub. You can use the provided deployment script:

```bash
./deploy.sh
```

Or manually:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Find and select your repository: `lfcmd/-actionfiguretrend`
5. Click **"Import"**

### 3. Configure Environment Variables

In the Vercel deployment settings, add the following environment variable:

| Name | Value |
|------|-------|
| `REPLICATE_API_TOKEN` | Your Replicate API token |

### 4. Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your app will be live at `https://your-project-name.vercel.app`

## 🔄 Automatic Deployments

Once connected, Vercel will automatically:

- **Deploy on every push** to the main branch
- **Generate preview deployments** for pull requests
- **Provide deployment logs** and analytics

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Go to your project settings in Vercel
2. Click **"Domains"**
3. Add your custom domain
4. Follow the DNS configuration instructions

## 📊 Monitoring

Vercel provides built-in monitoring:

- **Analytics**: Track page views and performance
- **Functions**: Monitor API route performance
- **Logs**: Debug issues with real-time logs

## 🔧 Configuration Files

The project includes these Vercel-optimized files:

- `vercel.json`: Vercel configuration
- `next.config.js`: Next.js optimization
- `.env.example`: Environment variables template
- `deploy.sh`: Automated deployment script

## 🆘 Troubleshooting

### Build Errors

If you encounter build errors:

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify environment variables are set correctly

### API Errors

If the AI generation fails:

1. Verify `REPLICATE_API_TOKEN` is set correctly
2. Check Replicate API quota and billing
3. Review function logs in Vercel dashboard

### Image Loading Issues

If images don't load:

1. Check `next.config.js` image domains
2. Verify images are in the `public` folder
3. Ensure proper image paths (starting with `/`)

## 📞 Support

Need help? Contact: fan405141@gmail.com

## 🎉 Success!

Once deployed, your Action Figure Trend app will be live and ready to transform photos into amazing action figures!

Visit your deployed app and start creating! 🎨