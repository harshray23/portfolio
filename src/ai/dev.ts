import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-project-description.ts';
import '@/ai/flows/send-contact-message-flow.ts';
import '@/ai/flows/portfolio-chatbot-flow.ts';
