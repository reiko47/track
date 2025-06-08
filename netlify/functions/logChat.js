export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { message, user } = JSON.parse(event.body);
    console.log(`Chat from ${user || 'anonymous'}: ${message}`);
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'Logged successfully' }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid request' }),
    };
  }
}
