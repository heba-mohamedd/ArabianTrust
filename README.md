# 🌊 Facility Management Website

A modern, responsive React application for a facility management company specializing in desalination plants, BMS systems, and system integration services. Built with cutting-edge technologies for optimal performance and user experience.

![React](https://img.shields.io/badge/React-19.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.5-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-38B2AC.svg)
![Ant Design](https://img.shields.io/badge/Ant_Design-6.1.4-red.svg)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.24.8-black.svg)

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Installation](#-installation)
- [📖 Usage](#-usage)
- [🏗️ Project Structure](#️-project-structure)
- [🎨 Components Overview](#-components-overview)
- [📊 Pages](#-pages)
- [🔧 Development](#-development)
- [📝 Scripts](#-scripts)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

- **🌐 Multi-language Support**: Primarily Arabic with RTL layout support
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎭 Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **🎨 Modern UI**: Clean design using Tailwind CSS and Ant Design components
- **🚀 Fast Performance**: Built with Vite for lightning-fast development and builds
- **🧭 Single Page Application**: Seamless navigation with React Router DOM
- **📊 Interactive Components**: Statistics, timelines, service cards, and more
- **🖼️ Rich Media**: Integrated images and icons for visual appeal

## 🛠️ Technologies Used

### Core Framework

- **React 19.2.0** - Modern JavaScript library for building user interfaces
- **Vite 7.2.5** - Next-generation frontend tooling for fast development

### Styling & UI

- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Ant Design 6.1.4** - Enterprise UI component library
- **Framer Motion 12.24.8** - Production-ready motion library for React

### Routing & Icons

- **React Router DOM 7.11.0** - Declarative routing for React
- **React Icons 5.5.0** - Popular icon library

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript Types** - Type definitions for better development experience

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📖 Usage

The application is a single-page website with the following main sections:

- **Home**: Hero section, company overview, services showcase, statistics, and client testimonials
- **About Us**: Detailed company information and mission
- **Services**: Facility management, desalination plants, BMS systems, system integration
- **Sectors**: Different industry sectors served
- **Certificates**: Company certifications and credentials
- **Financial**: Financial services and solutions
- **Contact Us**: Contact information and quote request forms

## 🏗️ Project Structure

```
my-project/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   ├── FacilityManagementImages/
│   │   ├── ourClients/
│   │   └── Steps/
│   ├── Components/        # Reusable UI components
│   │   ├── ui/           # Basic UI elements
│   │   └── *.jsx         # Feature components
│   ├── data/             # Static data and constants
│   ├── Layout/           # App layout wrapper
│   ├── Pages/            # Page components
│   └── routes/           # Routing configuration
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Components Overview

### Core Components

- **Hero**: Landing section with call-to-action
- **About**: Company introduction
- **OurService**: Service offerings with animated cards
- **Statistics**: Key performance indicators
- **Clients**: Client logos and testimonials
- **RequestQuote**: Quote request form
- **Navbar**: Navigation menu
- **Footer**: Site footer with links

### UI Components

- **ServiceCard**: Individual service display
- **CircleCard**: Circular information cards
- **PrimaryButton**: Styled action buttons
- **Title**: Consistent heading components

## 📊 Pages

- **Home**: Main landing page
- **AboutUs**: Company background and values
- **FacilityManagement**: Facility management services
- **SystemIntegration**: System integration solutions
- **Sectors**: Industry sectors served
- **Certificates**: Certifications and credentials
- **Financial**: Financial services
- **ContactUs**: Contact and inquiry forms

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Code Style

- Uses ESLint for code quality
- Follows React best practices
- Component names in PascalCase
- Relative imports for better maintainability

### Animation Patterns

- Uses Framer Motion for smooth transitions
- Container variants for staggered animations
- Hover and tap effects on interactive elements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using React & Vite**
