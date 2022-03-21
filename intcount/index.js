const fs = require('fs/promises');
const express = require('express');

const app = express();

const port = 5000;

app.use(express.json());

app.post('/', async (req, res) => {
  const { integer } = req.body;

  const integers = await fs.readFile('./intcount.json', 'utf-8');
  const parsedInt = JSON.parse(integers);

  if (parsedInt.hasOwnProperty(integer) == true) {
    parsedInt[integer] += 1;
  } else {
    parsedInt[integer] = 1;
  }

  const stringedInt = JSON.stringify(parsedInt);
  fs.writeFile('./intcount.json', stringedInt, 'utf-8');

  const resData = {
    message: `The number ${integer} has been requested ${parsedInt[integer]} time(s)`,
    integerTracker: parsedInt,
  };

  res.send(resData);
});

app.listen(port, () => console.log(`The server is running on port ${port}`));
