// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require("axios");

const handler = async (event) => {
  const { symbols } = event.queryStringParameters;

  const { VITE_API_KEY } = process.env;
  const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${VITE_API_KEY}&symbols=${symbols}`;

  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
