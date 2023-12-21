import OpenAI from 'openai';
import { OPENAI_APIKEY } from './constants';

export const openai = new OpenAI({
  apiKey: OPENAI_APIKEY,
  dangerouslyAllowBrowser: true
});