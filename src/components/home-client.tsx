
"use client";

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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { personalDetails, aboutMe } from '@/lib/data';
import { sendContactMessage } from '@/ai/flows/send-contact-message-flow';

const skills = [
  { name: 'Python', icon: <Code className="h-5 w-5" /> },
  { name: 'Java', icon: <Code className="h-5 w-5" /> },
  { name: 'C', icon: <Code className="h-5 w-5" /> },
  { name: 'C++', icon: <Code className="h-5 w-5" /> },
  { name: 'HTML', icon: <Code className="h-5 w-5" /> },
  { name: 'CSS', icon: <Code className="h-5 w-5" /> },
  { name: 'Firebase', icon: <Cloud className="h-5 w-5" /> },
  { name: 'MySQL', icon: <Database className="h-5 w-5" /> },
  { name: 'Data Structures', icon: <BrainCircuit className="h-5 w-5" /> },
];

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function HomeClient() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      await sendContactMessage(values);
      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem sending your message. Please try again.',
      });
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalDetails.resumeUrl;
    link.download = 'Harsh-Ray-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <div className="flex-1">
        <section id="hero" className="container grid grid-cols-1 md:grid-cols-5 gap-12 items-center justify-center py-24 md:py-40">
          <div className="md:col-span-3 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              {personalDetails.name}
            </h1>
            <h2 className="text-2xl font-headline text-muted-foreground">{personalDetails.title}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">{personalDetails.bio}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={handleDownload} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 shadow-2xl shadow-primary/20">
              </div>
              <Image
                src="/profile.jpg"
                alt="Harsh Ray"
                width={400}
                height={400}
                className="relative rounded-full"
                priority
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-card/90">
          <div className="container">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">About Me</h2>
            <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground">
              {aboutMe.introduction}
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-headline font-bold text-center mb-8">My Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary" 
                    className="text-base py-2 px-4 flex items-center gap-2"
                  >
                    {skill.icon} {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-headline font-bold text-center mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8 text-center">
              Have a question, a project proposal, or just want to say hi? Use the form below or connect with me on social media.
            </p>
            <div className="max-w-xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Let's build something amazing together!" className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
            <div className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap mt-12">
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
