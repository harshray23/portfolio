import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  name: string;
  github: string;
  linkedin: string;
  email: string;
}

export function Footer({ name, github, linkedin, email }: FooterProps) {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${email}`} className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
