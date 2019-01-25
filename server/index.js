const express = require("express");
const PORT = 8020;
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/../build")));

// const Server = require("http").Server(app);
// Server.listen(`${PORT}`, () => console.log(`<===Listening on ${PORT}===>`));
app.listen(`${PORT}`, () => {
  console.log(`Listening on ${PORT}`);
});
