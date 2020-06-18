const express = require('express');
const bodyParser = require('body-parser')

const font = require('./fonts/5byN.js');
const FontParser = require('./FontParser.js');

const app = express();
const port = process.env.PORT || 3000;

const fontParser = new FontParser({font});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const emojiMatch = req.body.text.match(/(:.+?:)/g) || [];
  const c = emojiMatch[0] || ':turbodaaamn:'; // the character to write with
  const w = emojiMatch[1] || ':blank:'; // the "whitespace"
  const textMatch = req.body.text.match(/(?<!:[a-z0-9]*)[a-z0-9]+(?![a-z0-9]*:)/g) || [];
  const text = textMatch[0] || 'damn';

  const responseText = fontParser.parse(text, c, w);

  // const response = {
  //   "token":"5fIuiNjxlyVukYEteEvhsmDR",
  //   "team_id":"T03EPHHTC",
  //   "team_domain":"barbariangroup",
  //   "channel_id":"GR85G94S0",
  //   "channel_name":"privategroup",
  //   "user_id":"UAV003VP0",
  //   "user_name":"mmahmud",
  //   "command":"/damn",
  //   "text":":emoji:",
  //   "response_url":"https://hooks.slack.com/commands/T03EPHHTC/1205586279457/tRmLkdl4LsQyeLToGLYxRw4E",
  //   "trigger_id":"1193170848019.3499595930.e8daf2d6da28bc96c517873585f11761"
  // }

  const response = {
    response_type: "in_channel",
    as_user: true,
    text: responseText,
  };

  res.send(response);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));