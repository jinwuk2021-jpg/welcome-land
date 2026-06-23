# Void Breach Game Website

A sci-fi themed game website with interactive features and stunning visuals.

## Deployment to Render

### Option 1: Deploy via Render Dashboard (Recommended)

1. **Push code to GitHub** ✅ (Already done)
   - Code is already on: https://github.com/jinwuk2021-jpg/welcome-land.git

2. **Connect to Render**
   - Go to https://render.com
   - Sign up or log in with your GitHub account
   - Click "New +" button → "Web Service"
   - Connect your GitHub account and authorize it
   - Select the `welcome-land` repository

3. **Configure Deployment**
   - **Name:** `void-breach-game` (or your preferred name)
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Runtime:** Node 18
   - Click "Create Web Service"

4. **Wait for Deployment**
   - Render will automatically build and deploy
   - Your site will be live at: `https://your-service-name.onrender.com`

### Option 2: Deploy via Render CLI

```bash
# Install Render CLI (optional)
npm install -g render-cli

# Deploy
render deploy
```

### Local Development

```bash
# Install dependencies
npm install

# Start server (runs on http://localhost:3000)
npm start
```

### Project Structure

```
├── Void Breach.dc.html    # Main HTML file
├── novel-ch1.js           # Game logic
├── support.js             # Support utilities
├── server.js              # Express server
├── package.json           # Node.js dependencies
├── render.yaml            # Render config
├── assets/                # Images, sprites, backgrounds
│   ├── backgrounds/
│   ├── card/
│   ├── sprites/
│   └── story/
└── _check/                # Additional assets
```

## Features

- Responsive web design
- Interactive game interface
- High-performance animations
- Dark theme with neon accents
- Cross-browser compatible

## Notes

- The site uses custom web components and animations
- All assets are included in the repository
- Render provides automatic SSL certificates for HTTPS
- Dont push .env file
---

**Live URL:** (Will be provided by Render after deployment)
