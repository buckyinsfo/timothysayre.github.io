# Timothy Sayre Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features an interactive project showcase, resume modal, and integrated analytics.

**Live Site:** [timothysayre.com](https://www.timothysayre.com)

## Features

- **Interactive Experience Sections** - About, Resume, Projects, Skills
- **Project Showcase** - Sliding carousel with 4 featured projects
- **Resume Modal** - PDF viewer with overlay modal
- **Responsive Design** - Mobile-first approach with breakpoints
- **Modern Stack** - React 18, TypeScript, Vite, Emotion CSS
- **Analytics Ready** - Google Analytics 4 integration
- **Automated Deployment** - GitHub Pages with custom domain

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** CSS3 + Emotion (styled components)
- **Icons:** FontAwesome (React components)
- **Modal:** React Modal
- **Analytics:** React GA4
- **Deployment:** GitHub Pages
- **Font:** Josefin Sans (Google Fonts)

## Project Structure

```
src/
├── components/
│   ├── experience.tsx    # Main portfolio sections
│   ├── projects.tsx      # Project carousel
│   ├── layout.tsx        # Page layout wrapper
│   └── sampleText.ts     # Content data
├── utils/
│   └── analytics.ts      # GA4 tracking utilities
├── main.tsx             # App entry point
└── App.tsx              # Root component

public/
├── css/main.css         # Global styles
├── assets/              # Images and icons
├── content/             # Resume PDF
└── CNAME               # Custom domain config
```

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Clone the repository
git clone https://github.com/timothysayre/timothysayre.github.io.git
cd timothysayre.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run deploy   # Deploy to GitHub Pages
```

## Analytics Setup

The site includes Google Analytics 4 integration. To enable:

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Update `src/utils/analytics.ts`:
   ```typescript
   ReactGA.initialize('G-YOUR-MEASUREMENT-ID', {
     debug: process.env.NODE_ENV === 'development',
   });
   ```

### Tracked Events
- Section navigation (About, Resume, Projects, Skills)
- Project views and interactions
- External link clicks (GitHub, live demos)
- Resume modal opens

## Features Deep Dive

### Interactive Sections
Four main sections accessible via circular navigation:
- **About Me** - Personal introduction and background
- **Resume** - PDF modal viewer with download capability
- **Projects** - Interactive carousel showcasing 4 projects
- **Skills** - Technology stack with visual icons

### Projects Carousel
- Auto-advancing slides (3-second intervals)
- Manual navigation with arrow controls
- Dot navigation indicators
- Hover to pause auto-advance
- Mobile-responsive layout

### Responsive Design
- **Desktop:** Full-featured layout with sidebar navigation
- **Tablet:** Adapted spacing and typography
- **Mobile:** Stacked layout with touch-optimized navigation

## Deployment

### Automatic Deployment
Pushes to `main` branch automatically deploy via GitHub Actions:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
```

### Manual Deployment
```bash
npm run build
npm run deploy
```

Deploys to `gh-pages` branch and updates live site.

### Custom Domain
Site uses custom domain `timothysayre.com` configured via:
- `public/CNAME` file
- GitHub Pages settings
- DNS A records pointing to GitHub Pages IPs

## Configuration Files

### Vite Config (`vite.config.ts`)
- React plugin configuration
- TypeScript support
- Build optimizations

### TypeScript Config (`tsconfig.json`)
- Strict type checking
- Modern ES target
- React JSX support

### ESLint Config (`eslint.config.mjs`)
- React hooks rules
- TypeScript integration
- Code quality standards

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is personal portfolio code. Feel free to use as inspiration for your own portfolio.

## Contact

- **Website:** [timothysayre.com](https://www.timothysayre.com)
- **GitHub:** [@timothysayre](https://github.com/buckyinsfo)
- **LinkedIn:** [Timothy Sayre](https://linkedin.com/in/timothysayre)

---

Built by Timothy Sayre