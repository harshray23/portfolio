
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { summarizeProjectDescription } from "@/ai/flows/summarize-project-description";

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  webUrl?: string;
  imageUrl: string;
  dataAiHint?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateSummary = async () => {
      try {
        setIsLoading(true);
        const result = await summarizeProjectDescription({
          description: project.description,
          maxLength: 25,
        });
        setSummary(result.summary);
      } catch (error) {
        console.error("Error generating summary:", error);
        // Fallback to a truncated version if AI fails
        const words = project.description.split(' ');
        const truncatedDescription = words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '');
        setSummary(truncatedDescription);
      } finally {
        setIsLoading(false);
      }
    };

    generateSummary();
  }, [project.description]);

  return (
    <Card className="flex flex-col h-full bg-card border-border/60 hover:border-primary/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
        <Image 
            src={project.imageUrl} 
            alt={`${project.title} screenshot`}
            width={600}
            height={400}
            className="w-full object-cover"
            data-ai-hint={project.dataAiHint}
        />
      <CardHeader>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <CardDescription>{summary}</CardDescription>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="secondary" className="w-full">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        {project.webUrl && (
          <Button asChild variant="outline" className="w-full">
            <a href={project.webUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-4 w-4" />
              Website
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
