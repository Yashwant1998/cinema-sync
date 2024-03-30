import OpenAI from "openai";
import { OpenAI_KEY } from "./constants";

export const openai = new OpenAI({
  apiKey: OpenAI_KEY,
  dangerouslyAllowBrowser: true,
});
