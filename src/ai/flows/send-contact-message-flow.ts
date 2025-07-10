
'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that processes the contact message and sends it via email.
 * - ContactMessageInput - The input type for the sendContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Resend } from 'resend';

const ContactMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The content of the message.'),
});
export type ContactMessageInput = z.infer<typeof ContactMessageInputSchema>;

export async function sendContactMessage(input: ContactMessageInput): Promise<void> {
  return sendContactMessageFlow(input);
}

const sendContactMessageFlow = ai.defineFlow(
  {
    name: 'sendContactMessageFlow',
    inputSchema: ContactMessageInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!resendApiKey) {
      console.error('Resend API key is not configured. Please set RESEND_API_KEY in your .env file.');
      throw new Error('Email service is not configured.');
    }
    if (!toEmail) {
      console.error('Recipient email is not configured. Please set RESEND_TO_EMAIL in your .env file.');
      throw new Error('Email service is not configured.');
    }

    const resend = new Resend(resendApiKey);

    try {
      await resend.emails.send({
        from: 'Portfolio Contact Form <onboarding@resend.dev>', // Must be a verified domain in Resend, but onboarding@resend.dev works for testing
        to: toEmail,
        subject: `New Message from ${input.name} via Portfolio`,
        reply_to: input.email,
        html: `<p>You have received a new message from your portfolio contact form.</p>
               <p><strong>Name:</strong> ${input.name}</p>
               <p><strong>Email:</strong> ${input.email}</p>
               <p><strong>Message:</strong></p>
               <p>${input.message}</p>`,
      });

      console.log('Contact message sent successfully via Resend.');
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('There was a problem sending the email. Please try again later.');
    }
  }
);
