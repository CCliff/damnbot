const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const replacement = req.body.text;
  const responseText = `
    ${replacement}:turbodaaamn::turbodaaamn:${replacement}${replacement}${replacement}:turbodaaamn:${replacement}${replacement}${replacement}:turbodaaamn::turbodaaamn::turbodaaamn:${replacement}${replacement}:turbodaaamn:${replacement}${replacement}:turbodaaamn:${replacement}
    ${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn::turbodaaamn:${replacement}:turbodaaamn:${replacement}
    ${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn::turbodaaamn::turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn::turbodaaamn:${replacement}
    ${replacement}:turbodaaamn::turbodaaamn:${replacement}${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}${replacement}${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}${replacement}:turbodaaamn:${replacement}
  `;
  
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
    text: response,
  };

  res.send(response);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));