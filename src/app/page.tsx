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
  Github
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ProjectCard } from '@/components/project-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

// Static data for the portfolio
const personalDetails = {
  name: "Harsh Ray",
  title: "Full-Stack Developer & AI Enthusiast",
  bio: "Crafting elegant solutions to complex problems. Passionate about building intelligent applications and user-centric interfaces.",
  email: "alex.doe@email.com",
  linkedin: "https://linkedin.com/in/alex-doe",
  github: "https://github.com/alex-doe",
  resumeUrl: "/resume.pdf", // User should place their resume in the public folder
};

const aboutMe = {
  introduction: "Hello! I'm Alex, a developer with a knack for turning ideas into reality. With a background in computer science and a passion for continuous learning, I've spent years honing my skills in web development, machine learning, and software architecture. My goal is to build products that are not only functional and efficient but also beautiful and enjoyable to use. When I'm not coding, you can find me exploring the latest in tech, contributing to open-source projects, or hiking in the great outdoors.",
};

const skills = [
  { name: 'Python', icon: <Code className="h-5 w-5" /> },
  { name: 'Java', icon: <Code className="h-5 w-5" /> },
  { name: 'C', icon: <Code className="h-5 w-5" /> },
  { name: 'Firebase', icon: <Cloud className="h-5 w-5" /> },
  { name: 'MySQL', icon: <Database className="h-5 w-5" /> },
  { name: 'Data Structures', icon: <BrainCircuit className="h-5 w-5" /> },
];

const projects = [
  {
    title: "AI-Powered Code Reviewer",
    description: "A tool that uses large language models to automatically review pull requests on GitHub. It checks for common errors, suggests improvements for code style and logic, and helps enforce repository-specific guidelines. This project aims to streamline the development workflow, reduce the time developers spend on manual code reviews, and improve overall code quality by catching potential issues before they are merged into the main branch. The system is built with a microservices architecture, utilizing Python for the AI backend and a React-based frontend for the dashboard.",
    githubUrl: "https://github.com/alex-doe/ai-code-reviewer",
  },
  {
    title: "Interactive Data Visualization Platform",
    description: "A web-based platform that allows users to upload datasets and generate interactive visualizations such as charts, graphs, and maps. The application provides a user-friendly drag-and-drop interface to build custom dashboards without writing any code. It supports various data sources, including CSV files and direct database connections. The backend is powered by Node.js and Express, with D3.js and React driving the frontend visualizations. This was a challenging project that required deep knowledge of data handling and frontend performance optimization.",
    githubUrl: "https://github.com/alex-doe/data-viz-platform",
  },
  {
    title: "E-commerce Recommendation Engine",
    description: "Developed a personalized recommendation engine for an e-commerce website, resulting in a 15% increase in user engagement and a 10% uplift in sales. The system uses collaborative filtering and content-based filtering techniques to suggest products to users based on their browsing history, purchase behavior, and similarities between items. The model was built using Python with libraries like Scikit-learn and Pandas, and integrated into the existing e-commerce platform via a REST API.",
    githubUrl: "https://github.com/alex-doe/ecomm-recommender",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex-1">
        <section id="hero" className="container grid grid-cols-1 md:grid-cols-5 gap-12 items-center justify-center py-24 md:py-32">
          <div className="md:col-span-3 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {personalDetails.name}
            </h1>
            <h2 className="text-2xl font-headline text-accent">{personalDetails.title}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">{personalDetails.bio}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <a href={personalDetails.resumeUrl} download>
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Alex Doe"
              width={400}
              height={400}
              className="rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/20"
              data-ai-hint="portrait professional"
            />
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">About Me</h2>
            <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground">
              {aboutMe.introduction}
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-headline font-bold text-center mb-8">My Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="outline" className="text-base bg-background border-primary/30 py-2 px-4 flex items-center gap-2 hover:bg-primary/10 transition-colors">
                    {skill.icon} {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">Projects Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-headline font-bold mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
            </p>
            <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap">
              <Button variant="link" asChild className="text-lg text-accent-foreground hover:text-primary transition-colors">
                <a href={`mailto:${personalDetails.email}`}>
                  <Mail className="mr-2" /> {personalDetails.email}
                </a>
              </Button>
              <Button variant="link" asChild className="text-lg text-accent-foreground hover:text-primary transition-colors">
                <a href={personalDetails.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2" /> LinkedIn
                </a>
              </Button>
              <Button variant="link" asChild className="text-lg text-accent-foreground hover:text-primary transition-colors">
                <a href={personalDetails.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2" /> GitHub
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
      />
    </>
  );
}
