import OpenAI from "openai";
import { CHATGPT_TOKEN } from "./constants";

const openai = new OpenAI({
  apiKey: CHATGPT_TOKEN, // Встав свій API-токен тут
  dangerouslyAllowBrowser: true,
});

export async function getAnswer(query: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },

        {
          role: "user",
          content: query,
        },
      ],
      store: true,
    });

    if (!completion) throw new Error("Some problem with get data");

    return completion.choices[0].message.content;
  } catch (err) {
    console.error(err);
  }
}
getAnswer("2+2");
