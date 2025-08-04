
"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Globe, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  githubUrl: string;
  webUrl?: string;
  imageUrl: string;
  dataAiHint?: string;
  toolsUsed: string[];
};

export function ProjectCard({ project }: { project: Project }) {

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
        <Card className="flex flex-col h-full bg-card border-border/60 group-hover:border-primary/80 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-primary/10 overflow-hidden">
            <div className="relative overflow-hidden">
                <Image 
                    src={project.imageUrl} 
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.dataAiHint}
                />
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                <CardDescription>{project.summary}</CardDescription>
                <div className="flex flex-wrap gap-2">
                    {project.toolsUsed.slice(0, 4).map((tool) => (
                        <Badge key={tool} variant="secondary">{tool}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-auto pt-4 border-t">
                <span className="text-sm font-medium text-primary flex items-center gap-1">
                    View Details <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary">
                        <Github className="h-5 w-5" />
                    </a>
                    {project.webUrl && (
                        <a href={project.webUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-primary">
                            <Globe className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </CardFooter>
        </Card>
    </Link>
  );
}
