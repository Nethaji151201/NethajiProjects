# Premium Freelance Portfolio & Services Showcase

A modern, high-performance web application designed to showcase freelance web development services, single-page applications (SPA), and business websites. Built to maximize client trust and lead conversions.

## 🚀 Features

- **Premium UI/UX Design**: Elegant aesthetics inspired by modern SaaS and Awwwards-winning websites.
- **Dynamic Theming**: Integrated system-aware and toggleable Light/Dark mode.
- **Framer Motion Animations**: Smooth, scroll-triggered micro-animations that establish a high-end feel.
- **WhatsApp Integration**: A streamlined contact form that securely transfers client inquiries directly to WhatsApp.
- **Projects & Services Showcase**: Dedicated sections to highlight built SPAs, e-commerce templates, and UX design capabilities.
- **Optimized Performance**: Built with React and Vite for lightning-fast loads and an optimized SEO baseline.

## 🛠️ Tech Stack

- **Framework**: [React.js](https://reactjs.org/) (Functional Components + Hooks)
- **Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Material UI](https://mui.com/) (Used strictly for high-quality Skeleton loading states)

## 📁 Project Structure

The project emphasizes scalability and clean architecture:
- `src/common/constants/`: Centralized configurations (`config.js`, `theme.js`). All project data, services, and color tokens are managed here.
- `src/components/`: Reusable, modular UI components (`Hero.jsx`, `Navbar.jsx`, `Services.jsx`, etc.).
- `src/theme/`: Context providers for managing the global Light/Dark mode state.

## ⚙️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## 🤝 Contributing & Customization
To customize the portfolio for your own needs, simply navigate to `src/common/constants/config.js` and replace the exported constants (`PROJECT_DETAILS`, `PROJECTS`, `SERVICES`, `WHY_CHOOSE_ME`) with your own information.

---
*Developed by [Nethaji](https://nethaji-portfolio-one.vercel.app)*
