const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;
const app = express();
app.use(express.json());

const MERKLE_ROOT = "f198bc558af07d626af6be9dc68cf78c8a925b0520ddf175512a32712f63f9f9";

app.post('/gift', (req, res) => {
  const {proof, address} = req.body;
  const isInTheList = verifyProof(proof, address, MERKLE_ROOT);

  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
