const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Perfectly 👌 Backend Running in github server 😁");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
