const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.post('/', (req, res) => {
  console.log(JSON.stringify(req.body));
  const replacement = req.body.text;
  response = `${replacement}:turbodaaamn::turbodaaamn:${replacement}${replacement}${replacement}:turbodaaamn:${replacement}${replacement}${replacement}:turbodaaamn::turbodaaamn::turbodaaamn:${replacement}${replacement}:turbodaaamn:${replacement}${replacement}:turbodaaamn:${replacement}
${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn::turbodaaamn:${replacement}:turbodaaamn:${replacement}
${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn::turbodaaamn::turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn::turbodaaamn:${replacement}
${replacement}:turbodaaamn::turbodaaamn:${replacement}${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}${replacement}${replacement}:turbodaaamn:${replacement}:turbodaaamn:${replacement}${replacement}:turbodaaamn:${replacement}`;
  res.send(response);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));