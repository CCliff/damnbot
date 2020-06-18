const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(JSON.stringify(req));
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));