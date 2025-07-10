"use client";

import { useEffect, useState } from "react";
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

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  webUrl?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fallback to a truncated version of the original description
    const words = project.description.split(' ');
    const truncatedDescription = words.slice(0, 30).join(' ') + (words.length > 30 ? '...' : '');
    setSummary(truncatedDescription);
    setIsLoading(false);
  }, [project.description]);

  return (
    <Card className="flex flex-col h-full bg-card/50 border-border/60 hover:border-primary/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
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
        <Button asChild variant="outline" className="w-full hover:bg-primary/90 hover:text-primary-foreground">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        {project.webUrl && (
          <Button asChild variant="outline" className="w-full hover:bg-primary/90 hover:text-primary-foreground">
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
