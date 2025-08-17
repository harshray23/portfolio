
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
import { personalDetails } from '@/lib/data.tsx';
import { sendContactMessage } from '@/ai/flows/send-contact-message-flow';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const socialLinks = [
  { key: 'github', icon: Github, label: 'GitHub' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'email', icon: Mail, label: 'Email' },
  { key: 'instagram', icon: Instagram, label: 'Instagram' },
];


export default function ContactPage() {
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
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-headline font-bold text-center mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-12 text-center">
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
            
            <div className="flex items-center justify-center gap-6 mt-16">
                {socialLinks.map((social) => {
                    const url = personalDetails[social.key as keyof typeof personalDetails] as string;
                    const image = personalDetails[`${social.key}Image` as keyof typeof personalDetails] as string | undefined;
                    if (!url) return null;
                    const Icon = social.icon;
                    
                    return (
                    <div key={social.key} className="relative group">
                        {image && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ y: -10, scale: 1.1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="w-20 h-20 rounded-lg shadow-2xl absolute bottom-full mb-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        >
                            <Image
                                src={image}
                                alt={`${social.label} logo`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </motion.div>
                        )}
                        <a 
                        href={social.key === 'email' ? `mailto:${url}` : url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground transition-colors hover:text-primary" 
                        aria-label={social.label}
                        >
                        <Icon size={24} />
                        </a>
                    </div>
                    )
                })}
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
