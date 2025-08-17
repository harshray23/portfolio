
"use client";

import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  name: string;
  github: string;
  linkedin: string;
  email: string;
  instagram?: string;
}

const socialLinks = [
  { key: 'github', icon: Github, label: 'GitHub' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'email', icon: Mail, label: 'Email' },
  { key: 'instagram', icon: Instagram, label: 'Instagram' },
];

export function Footer(props: FooterProps) {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} {props.name}. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const url = props[social.key as keyof FooterProps] as string;
            if (!url) return null;
            const Icon = social.icon;
            
            return (
              <div key={social.key} className="relative group">
                <a 
                  href={social.key === 'email' ? `mailto:${url}` : url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground transition-colors hover:text-primary" 
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  );
}
