# Petrozin Corporate Website

A modern, professional corporate website for Petrozin, built with Next.js 15, React 18, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Professional corporate aesthetic with Petrozin's brand colors
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth Framer Motion animations and transitions
- **SEO Optimized**: Built with Next.js 15 App Router and proper metadata
- **Performance**: Optimized for speed with modern web standards
- **Accessibility**: WCAG 2.2 AA compliant design

## 🎨 Design System

### Colors
- **Primary Navy**: #0B1F3A
- **Royal Gold**: #FFD700
- **Sky Blue**: #2CA9E1
- **Light Gray**: #F4F4F4

### Typography
- **Headings**: Poppins Bold
- **Body**: Inter Regular

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Inter)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── about/            # About page
│   └── contact/          # Contact page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   └── sections/         # Page section components
└── styles/               # Global styles and Tailwind config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd petrozin-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages

### Home Page (`/`)
- Hero section with animated text reveal
- Introduction to Petrozin services
- Why choose Petrozin features
- Our promise section
- Call-to-action banner

### Services Page (`/services`)
- Comprehensive service overview
- Detailed service descriptions
- Industry specializations
- Service highlights

### About Page (`/about`)
- Company vision and mission
- Core company values
- Company timeline/milestones
- Team section with photos

### Contact Page (`/contact`)
- Contact form with validation
- Contact information cards
- Office location and map
- Business hours and details

## 🎯 Key Components

- **Header**: Sticky navigation with mobile menu
- **Hero**: Animated hero sections for each page
- **Service Cards**: Interactive service overview cards
- **Contact Form**: Form with validation and success handling
- **Footer**: Comprehensive footer with links and social media

## 🔧 Customization

### Colors
Update colors in `tailwind.config.ts` and `globals.css`

### Content
Modify content in component files under `src/components/sections/`

### Images
Replace placeholder images in the `public/` directory

## 📊 Performance

- Lighthouse Performance Score: 90+
- Mobile-first responsive design
- Optimized images and animations
- Lazy loading for offscreen components

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy
The site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## 📝 Content Management

To update content:
1. Navigate to the relevant component file
2. Update the text content
3. Replace images in the `public/` directory
4. Update contact information and business details

## 🔒 Environment Variables

Create a `.env.local` file for any API keys or environment-specific configurations:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## 📞 Support

For technical support or questions about the website, please contact the development team.

## 📄 License

This project is proprietary to Petrozin. All rights reserved.

---

**Built with ❤️ for Petrozin**
# Petrozin
