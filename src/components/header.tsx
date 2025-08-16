
'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center text-primary">
            <div className="relative flex items-center justify-center pt-2">
                <div className="font-serif text-5xl font-bold tracking-wider">HARSH</div>
                <div 
                    className="font-script absolute text-4xl font-normal"
                    style={{ transform: 'rotate(-15deg)' }}
                >
                    Ray
                </div>
            </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
           <Button variant="ghost" asChild>
            <Link href="/projects">Projects</Link>
          </Button>
           <Button variant="ghost" asChild>
            <Link href="/#skills">Skills</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 p-4">
                 <Link href="/" className="flex items-center text-primary mb-4" onClick={closeSheet}>
                     <div className="relative flex items-center justify-center pt-2">
                        <div className="font-serif text-5xl font-bold tracking-wider">HARSH</div>
                        <div 
                            className="font-script absolute text-4xl font-normal"
                            style={{ transform: 'rotate(-15deg)' }}
                        >
                            Ray
                        </div>
                    </div>
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={closeSheet}>About</Link>
                <Link href="/projects" className="text-lg font-medium" onClick={closeSheet}>Projects</Link>
                <Link href="/#skills" className="text-lg font-medium" onClick={closeSheet}>Skills</Link>
                <Link href="#contact" className="text-lg font-medium" onClick={closeSheet}>Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
