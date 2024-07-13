const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./Config/db");
const port = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");
const Router = require("./Router/Router");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

db;
// app.get("/", (req, res) => {
//   res.send("Perfectly 👌 Backend Running in github server 😁");
// });
app.use("/api", Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
