import Image from 'next/image';
import Link from 'next/link';
import {
  Download,
  Code,
  BrainCircuit,
  Database,
  Cloud,
  Mail,
  Linkedin,
  Github,
  Instagram
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { personalDetails, aboutMe } from '@/lib/data';

const skills = [
  { name: 'Python', icon: <Code className="h-5 w-5" /> },
  { name: 'Java', icon: <Code className="h-5 w-5" /> },
  { name: 'C', icon: <Code className="h-5 w-5" /> },
  { name: 'Firebase', icon: <Cloud className="h-5 w-5" /> },
  { name: 'MySQL', icon: <Database className="h-5 w-5" /> },
  { name: 'Data Structures', icon: <BrainCircuit className="h-5 w-5" /> },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <section id="hero" className="container grid grid-cols-1 md:grid-cols-5 gap-12 items-center justify-center py-24 md:py-40">
          <div className="md:col-span-3 space-y-6 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 animate-fade-up">
              {personalDetails.name}
            </h1>
            <h2 className="text-2xl font-headline text-muted-foreground animate-fade-up animation-delay-200">{personalDetails.title}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-up animation-delay-300">{personalDetails.bio}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up animation-delay-400">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={personalDetails.resumeUrl} download>
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center animate-scale-in">
            <Image
              src="/profile.jpg"
              alt="Harsh Ray"
              width={400}
              height={400}
              className="rounded-full border-4 border-primary/20 shadow-2xl shadow-primary/20"
            />
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-card/90">
          <div className="container animate-fade-in">
            <h2 className="text-3xl font-headline font-bold text-center mb-12 animate-fade-up">About Me</h2>
            <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground animate-fade-up animation-delay-200">
              {aboutMe.introduction}
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-headline font-bold text-center mb-8 animate-fade-up animation-delay-300">My Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary" 
                    className="text-base py-2 px-4 flex items-center gap-2 animate-fade-up"
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    {skill.icon} {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container text-center animate-fade-in">
            <h2 className="text-3xl font-headline font-bold mb-4 animate-fade-up">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8 animate-fade-up animation-delay-200">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
            </p>
            <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap animate-fade-up animation-delay-300">
              <Button variant="link" asChild className="text-lg text-muted-foreground hover:text-primary transition-colors">
                <a href={`mailto:${personalDetails.email}`}>
                  <Mail className="mr-2" /> {personalDetails.email}
                </a>
              </Button>
              <Button variant="link" asChild className="text-lg text-muted-foreground hover:text-primary transition-colors">
                <a href={personalDetails.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2" /> LinkedIn
                </a>
              </Button>
              <Button variant="link" asChild className="text-lg text-muted-foreground hover:text-primary transition-colors">
                <a href={personalDetails.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2" /> GitHub
                </a>
              </Button>
              <Button variant="link" asChild className="text-lg text-muted-foreground hover:text-primary transition-colors">
                <a href={personalDetails.instagram} target="_blank" rel="noreferrer">
                  <Instagram className="mr-2" /> Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
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
