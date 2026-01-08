# AI Coding Agent Instructions

## Architecture Overview

This is a React application built with Vite, featuring a single-page layout with routing. The app uses a nested routing structure where `Layout` wraps all pages, containing a persistent `Navbar` and an `Outlet` for page content.

- **Routing**: Uses React Router DOM v7 with `createBrowserRouter`. Routes are defined in `src/routes/index.jsx`.
- **Layout**: `src/Layout/Layout.jsx` provides the app shell with navbar and main content area.
- **Pages**: Currently only `Home` page in `src/Pages/Home.jsx`, which composes multiple components.
- **Components**: Reusable UI pieces in `src/Components/`, including Hero, About, OurService (note: "Servise" is a typo in filename).

## Key Technologies & Patterns

- **Styling**: Tailwind CSS v4 with custom classes (e.g., `h-125`, `md:h-150` for hero height).
- **UI Components**: Ant Design (e.g., `Card` with `Meta` for service cards).
- **Animations**: Framer Motion with staggered animations using `containerVariants` and `cardVariants`.
- **Icons**: React Icons (e.g., `IoMdArrowDropdown` from `react-icons/io`).
- **RTL Support**: Use `dir="rtl"` on sections for Arabic text, as seen in `OurService` component.
- **Data Structure**: Services as arrays of objects with `id`, `src` (image path), `title`.

## Component Patterns

- Wrap animated elements in `motion.div` with `variants`, `initial="hidden"`, `animate="visible"`.
- Use `whileHover` and `whileTap` for interactive effects (e.g., scale on hover).
- Grid layouts: `grid grid-cols-1 lg:grid-cols-3 gap-12` for responsive service cards.
- Image paths: Reference assets as `'src/assets/filename.jpg'` (Vite handles bundling).

## Development Workflow

- **Start dev server**: `npm run dev` (Vite with HMR).
- **Build**: `npm run build` (outputs to `dist/`).
- **Lint**: `npm run lint` (ESLint with React rules, ignores `dist/`).
- **Preview**: `npm run preview` after build.

## Conventions

- Component names: PascalCase (e.g., `OurService`, `ServiseCard`).
- Imports: Relative paths (e.g., `../Components/Navbar`).
- Unused vars: Allowed if start with uppercase or underscore (ESLint rule).
- File structure: Components/, Pages/, Layout/, routes/.
- Animation variants: Define as const objects outside component.

## Common Pitfalls

- Avoid duplicating `Navbar` import in pages (already in Layout).
- Ensure image paths are correct relative to `src/assets/`.
- Use `motion.div` for animations, not regular `div`.
- For RTL, apply `dir="rtl"` to container elements.
