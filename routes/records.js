const router = require('express').Router();
const { Configuration, OpenAIApi } = require("openai");


router.route("/questions").post(async (req, res) => {
  const  question  = req.body.message;

  console.log(req.body.message);
  const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  async function runCompletion() {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question+'in detail',
      temperature: 0,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(completion.data.choices[0].text);
    res.json(completion.data.choices[0].text);
  }
  
  runCompletion();
});

module.exports = router;
