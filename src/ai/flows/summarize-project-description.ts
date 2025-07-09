// Summarizes project descriptions using generative AI, with a tool for intelligent truncation.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectDescriptionInputSchema = z.object({
  description: z.string().describe('The full project description to summarize.'),
  maxLength: z.number().default(150).describe('The maximum length of the summary in words.'),
});
export type SummarizeProjectDescriptionInput = z.infer<typeof SummarizeProjectDescriptionInputSchema>;

const SummarizeProjectDescriptionOutputSchema = z.object({
  summary: z.string().describe('The summarized project description.'),
});
export type SummarizeProjectDescriptionOutput = z.infer<typeof SummarizeProjectDescriptionOutputSchema>;

export async function summarizeProjectDescription(input: SummarizeProjectDescriptionInput): Promise<SummarizeProjectDescriptionOutput> {
  return summarizeProjectDescriptionFlow(input);
}

const truncateText = ai.defineTool(
  {
    name: 'truncateText',
    description: 'Intelligently truncates text to a specified maximum length in words, preserving meaning.',
    inputSchema: z.object({
      text: z.string().describe('The text to truncate.'),
      maxLength: z.number().describe('The maximum length of the truncated text in words.'),
    }),
    outputSchema: z.string(),
  },
  async input => {
    const words = input.text.split(' ');
    if (words.length <= input.maxLength) {
      return input.text;
    }
    return words.slice(0, input.maxLength).join(' ') + '...';
  }
);

const summarizeProjectDescriptionPrompt = ai.definePrompt({
  name: 'summarizeProjectDescriptionPrompt',
  tools: [truncateText],
  input: {schema: SummarizeProjectDescriptionInputSchema},
  output: {schema: SummarizeProjectDescriptionOutputSchema},
  prompt: `Summarize the following project description in a concise manner, highlighting the key aspects and goals of the project. Use the truncateText tool to ensure the summary does not exceed {{maxLength}} words.\n\nProject Description: {{{description}}}`,
});

const summarizeProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'summarizeProjectDescriptionFlow',
    inputSchema: SummarizeProjectDescriptionInputSchema,
    outputSchema: SummarizeProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await summarizeProjectDescriptionPrompt(input);
    return output!;
  }
);
