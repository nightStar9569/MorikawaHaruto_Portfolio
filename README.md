# Haruto Morikawa Portfolio

This is a modern, animated portfolio website for Haruto Morikawa, a full-stack developer and UI/UX designer. The site is built with React, TypeScript, and Tailwind CSS, and features multi-language support (English/Japanese), smooth animations, and a clean, responsive design.

## Features
- Animated hero and section transitions (Framer Motion)
- Multi-language support (EN/JA)
- Responsive and mobile-friendly
- Modern UI with Tailwind CSS
- Easy navigation and smooth scrolling

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building for Production
```bash
npm run build
# or
yarn build
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## Project Structure
- `src/components/` — React components
- `src/contexts/` — Context providers (language, theme)
- `src/assets/` — Images and static assets

## Customization
- Update translations in `src/contexts/LanguageContext.tsx`
- Change theme or styles in Tailwind config or CSS files

## License
MIT 