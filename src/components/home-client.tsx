
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { personalDetails, aboutMe } from '@/lib/data.tsx';
import { SkillsSection } from './skills-section';

export function HomeClient() {

  return (
    <>
      <Header />
      <div className="flex-1">
        <section id="hero" className="container grid grid-cols-1 md:grid-cols-5 gap-12 items-center justify-center py-24 md:py-32">
          <div className="md:col-span-3 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <span className="block text-muted-foreground">I am</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                {personalDetails.name}
              </span>
            </h1>
            <h2 className="text-2xl font-headline text-muted-foreground">{personalDetails.title}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">{personalDetails.bio}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/resume">View Resume</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 shadow-2xl shadow-primary/20">
              </div>
              <Image
                src="/profile.jpg"
                alt="Harsh Ray"
                width={400}
                height={400}
                quality={100}
                className="relative rounded-full"
                priority
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-card/90">
          <div className="container text-center">
            <h2 className="text-3xl font-headline font-bold mb-4">About Me</h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
              {aboutMe.summary}
            </p>
            <Button asChild>
                <Link href="/about">Read More</Link>
            </Button>
          </div>
        </section>

        <SkillsSection />

      </div>
      <Footer 
        name={personalDetails.name}
        email={personalDetails.email}
        github={personalDetails.github}
        linkedin={personalDetails.linkedin}
        instagram={personalDetails.instagram}
      />
    </>
  );
}
