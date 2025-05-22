
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { isPWAInstallable, isRunningAsPWA } from '@/serviceWorkerRegistration';
import { toast } from '@/components/ui/use-toast';

// Interface for the BeforeInstallPromptEvent which is not included in the standard TypeScript types
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPWA: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Initial check if the app is installable or already installed
    setIsInstallable(isPWAInstallable() && !isRunningAsPWA());
    
    // Store the install prompt event for later use
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('Before install prompt fired');
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app was successfully installed
    window.addEventListener('appinstalled', () => {
      console.log('PWA was installed');
      setIsInstallable(false);
      toast({
        title: "App Installed!",
        description: "Khizar Luxury Market is now installed on your device.",
      });
    });

    // Clean up event listeners
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', () => {});
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      // Fallback for browsers where beforeinstallprompt might not have fired yet
      toast({
        title: "Installation Info",
        description: "To install, use your browser's 'Add to Home Screen' or 'Install' option in the menu.",
      });
      return;
    }
    
    // Show the install prompt
    await installPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const choiceResult = await installPrompt.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    
    // Reset the installPrompt after it's been used
    setInstallPrompt(null);
  };

  if (!isInstallable) return null;

  return (
    <Button
      onClick={handleInstallClick}
      variant="outline"
      className="flex items-center gap-2 animate-pulse"
    >
      <Download className="h-4 w-4" />
      <span>Install App</span>
    </Button>
  );
};

export default InstallPWA;
