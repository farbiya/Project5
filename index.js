const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const PORT = process.env.PORT || 3000;
app.listen(PORT);