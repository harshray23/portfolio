
'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendContactMessage - A function that processes the contact message.
 * - ContactMessageInput - The input type for the sendContactMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

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
    // In a real application, you would use a service like Resend or Nodemailer
    // to send an email here. For this example, we'll just log it to the console.
    console.log('New contact message received:');
    console.log(`- Name: ${input.name}`);
    console.log(`- Email: ${input.email}`);
    console.log(`- Message: ${input.message}`);

    // You could also add a step to store the message in a database (e.g., Firebase Firestore).
  }
);
