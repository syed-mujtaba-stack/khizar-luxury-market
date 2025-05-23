
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/theme.css'
import { registerServiceWorker } from './serviceWorkerRegistration'
import { ThemeProvider } from './context/ThemeContext'
import { TooltipProvider } from '@radix-ui/react-tooltip'

// Register service worker for PWA functionality
registerServiceWorker();

// Create the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Create the root
const root = ReactDOM.createRoot(rootElement);

// Render with proper React context
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </ThemeProvider>
  </React.StrictMode>
);
