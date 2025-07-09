"use client";

import { useEffect, useState } from "react";
import { Github } from "lucide-react";

import { summarizeProjectDescription } from "@/ai/flows/summarize-project-description";
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
};

export function ProjectCard({ project }: { project: Project }) {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSummary = async () => {
      setIsLoading(true);
      try {
        const result = await summarizeProjectDescription({
          description: project.description,
          maxLength: 30,
        });
        setSummary(result.summary);
      } catch (error) {
        console.error("Failed to summarize project description:", error);
        // Fallback to a truncated version of the original description
        const words = project.description.split(' ');
        setSummary(words.slice(0, 30).join(' ') + (words.length > 30 ? '...' : ''));
      } finally {
        setIsLoading(false);
      }
    };

    getSummary();
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
      <CardFooter>
        <Button asChild variant="outline" className="w-full hover:bg-primary/90 hover:text-primary-foreground">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
