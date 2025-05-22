
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/theme.css'
import { registerServiceWorker } from './serviceWorkerRegistration'
import { ThemeProvider } from './context/ThemeContext'
import { Toaster } from '@/components/ui/toaster'

// Register service worker for PWA functionality
registerServiceWorker();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
    <Toaster />
  </ThemeProvider>
);
