const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function sendMessageToGroq(messages) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages,
    }),
  });

  const data = await res.json();
  return data.choices[0].message.content.trim();
}
