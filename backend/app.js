const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const sequelize = require("./data/database");
const Sequelize = require("sequelize");

const orderrouter = require("./router/order");

const app = express();
app.use(cors());

app.use(bodyparser.json());

app.use(orderrouter);

sequelize
  .sync()
  .then((result) => {
    app.listen(3003);
  })
  .catch((err) => {
    console.log(err);
  });
