
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface TimelineItem {
  title: string;
  company?: string;
  institution?: string;
  date: string;
  description: string;
  icon: LucideIcon;
}

interface ExperienceTimelineProps {
  title: string;
  items: TimelineItem[];
}

export function ExperienceTimeline({ title, items }: ExperienceTimelineProps) {
  return (
    <div>
      <h3 className="text-2xl font-headline font-semibold mb-6">{title}</h3>
      <div className="relative border-l-2 border-primary/20 pl-6 space-y-10">
        {items.map((item, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125" />
            <item.icon className="absolute -left-[43px] top-0 h-8 w-8 p-1.5 bg-background rounded-full text-primary transition-transform duration-300 group-hover:rotate-12" />
            
            <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <p className="text-sm text-muted-foreground">{item.date}</p>
                <h4 className="font-semibold text-lg mt-1">{item.title}</h4>
                <p className="text-md text-primary font-medium">{item.company || item.institution}</p>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
