"use client";

import Image from "next/image";
import { Github, Globe, ArrowLeft, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { personalDetails } from "@/lib/data";

type Project = {
  title: string;
  description: string;
  summary: string;
  problemStatement: string;
  thoughtProcess: string;
  challengesFaced: string;
  toolsUsed: string[];
  githubUrl: string;
  webUrl?: string;
  imageUrl: string;
};

export function ProjectDetail({ project }: { project: Project }) {
    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalDetails.resumeUrl;
    link.download = 'Harsh-Ray-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex-1 py-16 md:py-24">
      <div className="container">
        <Button variant="ghost" asChild className="mb-8">
            <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
            </Link>
        </Button>

        <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">
                    {project.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">{project.description}</p>
                
                <div className="space-y-8 prose prose-invert max-w-none">
                    <div>
                        <h2 className="text-2xl font-headline font-bold mb-4 border-b pb-2">Problem Statement</h2>
                        <p>{project.problemStatement}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-headline font-bold mb-4 border-b pb-2">Thought Process</h2>
                        <p>{project.thoughtProcess}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-headline font-bold mb-4 border-b pb-2">Challenges Faced</h2>
                        <p>{project.challengesFaced}</p>
                    </div>
                </div>

            </div>

            <div className="md:col-span-2 space-y-8">
                <div className="relative aspect-video overflow-hidden rounded-lg border shadow-lg">
                    <Image
                        src={project.imageUrl}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover"
                    />
                </div>
                
                <div className="p-6 rounded-lg bg-card border">
                    <h3 className="text-xl font-headline font-bold mb-4">Tech Stack & Links</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.toolsUsed.map((tool) => (
                        <Badge key={tool} variant="secondary">
                            {tool}
                        </Badge>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3">
                        <Button asChild variant="secondary" className="w-full">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub Repository
                            </a>
                        </Button>
                        {project.webUrl && (
                        <Button asChild variant="outline" className="w-full">
                            <a href={project.webUrl} target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2 h-4 w-4" />
                            Live Website
                            </a>
                        </Button>
                        )}
                         <Button onClick={handleDownload} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            <Download className="mr-2 h-5 w-5" /> Download Resume
                        </Button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
