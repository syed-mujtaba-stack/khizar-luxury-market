
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/theme.css'
import { registerServiceWorker } from './serviceWorkerRegistration'
import { ThemeProvider } from './context/ThemeContext'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

// Register service worker for PWA functionality
registerServiceWorker();

// Create the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Create the root first
const root = createRoot(rootElement);

// Then render with proper React context
root.render(
  <React.StrictMode>
    <TooltipPrimitive.Provider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TooltipPrimitive.Provider>
  </React.StrictMode>
);
