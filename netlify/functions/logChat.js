// netlify/functions/logChat.js

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const { userMessage, aiResponse } = body;

  console.log("User:", userMessage);
  console.log("AI:", aiResponse);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Chat logged successfully." }),
  };
};
