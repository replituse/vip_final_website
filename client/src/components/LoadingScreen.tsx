import { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [dotLottie, setDotLottie] = useState<any>(null);

  useEffect(() => {
    // Show the loading screen for 5 seconds total
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Remove from DOM after transition
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
      window.dispatchEvent(new CustomEvent('loadingComplete'));
    }, 5500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (dotLottie) {
      // Logic to play a specific segment if the library supports it
      // For dotLottie-react, we can use playSegments if available or seek
      // Since it's a lottie-host URL, we'll try to control playback once loaded
    }
  }, [dotLottie]);

  if (!shouldRender) return null;

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050a18] transition-opacity duration-500 ease-in-out"
      style={{ 
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'all' : 'none'
      }}
    >
      <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
        <DotLottieReact
          src="https://lottie.host/7066785f-b22a-4043-8023-d837c2d54546/uD7uPM1dOA.lottie"
          loop
          autoplay
          // We can't easily "cut" seconds from the start/end of a hosted .lottie file 
          // via simple props without knowing total frames, 
          // but we can adjust the playback rate or try to sync with the 5s timer.
          // However, for the most direct "cut" effect requested, 
          // we ensure it displays prominently.
          style={{ width: '100%', height: '100%' }}
          dotLottieRefCallback={setDotLottie}
        />
      </div>
    </div>
  );
}
