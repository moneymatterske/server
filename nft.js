const { Configuration, OpenAIApi } = require("openai");


require("dotenv").config({ path: "./config.env" });

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion () {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "list some good tour destinations in nairobi",
  });
  console.log(completion.data.choices[0].text);
  }


  runCompletion();