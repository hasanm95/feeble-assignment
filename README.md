# coup. - iMessage Automation Landing Page

This project is a modern, responsive landing page for **coup.**, an iMessage automation tool for teams and AI workflows. It has been converted from a static HTML/CSS/JS site to a optimized React application powered by Vite and Tailwind CSS v4.

## 🚀 Tech Stack

- **React**: For building a modular, component-based user interface.
- **Vite**: For ultra-fast development and optimized production bundling.
- **Tailwind CSS v4**: For utility-first styling, featuring the new CSS-first configuration and OKLCH color support.
- **General Sans**: A premium custom font family used for consistent branding.

## 🛠️ Implementation Notes

### 1. Tailwind CSS v4 Integration
- **CSS-First Configuration**: This project uses the new Tailwind v4 approach where the theme is defined directly in `src/index.css` using the `@theme` block.
- **Vite Plugin**: Utilizes `@tailwindcss/vite` for seamless integration without a separate `tailwind.config.js`.

### 2. Asset Management
- **Public Assets**: All static images (SVGs) and custom fonts are located in the `public/` directory for direct access.
- **Component Based**: The layout is split into logical components (`Header`, `Hero`) to improve maintainability.

### 3. Animations
- **CSS Keyframes**: All custom bird animations (fly-in, fly-across) were ported to Tailwind v4 theme variables to allow for easy reuse as utility classes like `animate-bird-fly-in`.
- **Staggered Delays**: Bird entry animations use JIT arbitrary value classes (e.g., `[animation-delay:0.3s]`) for precise timing.

## 📋 Assumptions

- **Mobile First**: All components follow a mobile-first responsive design strategy, with breakpoints optimized for tablet (768px) and desktop (1024px+).
- **Z-Indexing**: Custom z-index layers were defined to ensure the flying birds pass under/over the correct UI layers as intended in the original design.
- **Interactivity**: The mobile menu toggle uses React's `useState` for state management, replacing the original imperative DOM manipulation.

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
# feeble-assignment
