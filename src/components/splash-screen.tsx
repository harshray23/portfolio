
'use client';

import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 9000); // Start fade out 1 second before disappearing

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Welcome, to my Portfolio
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
          --Harsh Ray
        </p>
      </div>
    </div>
  );
}
