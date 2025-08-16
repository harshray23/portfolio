
"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
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
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { personalDetails, aboutMe, skills } from '@/lib/data.tsx';
import { sendContactMessage } from '@/ai/flows/send-contact-message-flow';
import { SkillsSection } from './skills-section';


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

  return (
    <>
      <Header />
      <div className="flex-1">
        <section id="hero" className="container grid grid-cols-1 md:grid-cols-5 gap-12 items-center justify-center py-24 md:py-32">
          <div className="md:col-span-3 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <span className="block text-muted-foreground">I am</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                {personalDetails.name}
              </span>
            </h1>
            <h2 className="text-2xl font-headline text-muted-foreground">{personalDetails.title}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">{personalDetails.bio}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/resume">View Resume</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
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
          <div className="container text-center">
            <h2 className="text-3xl font-headline font-bold mb-4">About Me</h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
              {aboutMe.summary}
            </p>
            <Button asChild>
                <Link href="/about">Read More</Link>
            </Button>
          </div>
        </section>

        <SkillsSection />

        <section id="contact" className="py-16 md:py-24 bg-card/90">
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
