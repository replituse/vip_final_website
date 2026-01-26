import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface InternalLoadingScreenProps {
  onComplete: () => void;
}

export function InternalLoadingScreen({ onComplete }: InternalLoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show the loading screen for 2 seconds (faster as requested)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Remove from DOM after transition
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className="absolute inset-x-0 top-0 z-[100] flex items-center justify-center bg-transparent transition-opacity duration-500 ease-in-out pointer-events-none"
      style={{ 
        opacity: isVisible ? 1 : 0,
        height: 'min(600px, 80vh)' // Covers the hero/heading section specifically
      }}
    >
      <div className="relative w-full max-w-[250px] aspect-square flex items-center justify-center">
        <DotLottieReact
          src="https://lottie.host/c451e98a-f8df-43aa-b114-bbeb0edcb2e1/wn3ITYDvGx.lottie"
          loop
          autoplay
          speed={2.0}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
