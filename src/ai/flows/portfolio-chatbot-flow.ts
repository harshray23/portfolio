
'use server';
/**
 * @fileOverview A chatbot that can answer questions about the portfolio.
 *
 * - portfolioChatbot - A function that handles the chatbot conversation.
 * - PortfolioChatbotInput - The input type for the portfolioChatbot function.
 * - PortfolioChatbotOutput - The return type for the portfolioChatbot function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { personalDetails, aboutMe, projects, skills } from '@/lib/data';

const PortfolioChatbotInputSchema = z.object({
  message: z.string().describe('The user\'s message to the chatbot.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).optional().describe('The conversation history.'),
});
export type PortfolioChatbotInput = z.infer<typeof PortfolioChatbotInputSchema>;

const PortfolioChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.'),
});
export type PortfolioChatbotOutput = z.infer<typeof PortfolioChatbotOutputSchema>;

export async function portfolioChatbot(input: PortfolioChatbotInput): Promise<PortfolioChatbotOutput> {
  return portfolioChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioChatbotPrompt',
  input: { schema: PortfolioChatbotInputSchema },
  output: { schema: PortfolioChatbotOutputSchema },
  prompt: `You are a helpful and friendly chatbot assistant for a personal portfolio website. Your name is "Portfolio Pal". Your goal is to answer questions about the portfolio owner, Harsh Ray, and his projects.

You have access to the following information about Harsh and his portfolio:
---
**Personal Details:**
- Name: ${personalDetails.name}
- Title: ${personalDetails.title}
- Bio: ${personalDetails.bio}
- Email: ${personalDetails.email}
- LinkedIn: ${personalDetails.linkedin}
- GitHub: ${personalDetails.github}

**About Me:**
${aboutMe.introduction}

**Skills:**
${skills.map(skill => skill.name).join(', ')}

**Projects:**
${projects.map(p => `- **${p.title}**: ${p.description} (GitHub: ${p.githubUrl})`).join('\n')}
---

**Your Instructions:**
1.  **Be Conversational:** Engage with the user in a natural, friendly tone.
2.  **Use Provided Data:** Base your answers strictly on the information provided above. Do not make up information.
3.  **Handle Greetings:** If the user says "hello" or "hi," greet them back warmly and introduce yourself.
4.  **Answer Questions:** Answer questions about Harsh's skills, experience, projects, and contact information.
5.  **Be Honest if You Don't Know:** If the user asks a question you cannot answer with the given information, politely say that you don't have that information. For example: "I don't have information about that, but you can reach out to Harsh directly to ask."
6.  **Keep Responses Concise:** Provide clear and brief answers.
7.  **Do not output Markdown:** Format your response as plain text.

**Conversation History:**
{{#if history}}
{{#each history}}
{{role}}: {{{content}}}
{{/each}}
{{/if}}

**User's new message:**
{{{message}}}
`,
});

const portfolioChatbotFlow = ai.defineFlow(
  {
    name: 'portfolioChatbotFlow',
    inputSchema: PortfolioChatbotInputSchema,
    outputSchema: PortfolioChatbotOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
