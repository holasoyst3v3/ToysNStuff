const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./database/sequelize");
const bcrypt = require("bcrypt");
require('dotenv').config();
const app = express();
const PORT =  3001;
const { connect } = require("./testConnection");



app.use(express.json());
app.use(cors());

app.get("/getItems", async (req, res) => {
  let data = await sequelize.query(`SELECT * FROM posts`);
  res.status(200).send(data);
});

sequelize.authenticate();


app.post("/register", async (req, res) => {
  const { firstname, lastname, username, password } = req.body;
  const checkUser = await sequelize.query(`
  SELECT * FROM users WHERE username = '${username}'
  `);
  if (checkUser[1].rowCount !== 0) {
    res.status(500).send("Username taken");
  } else {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    await sequelize.query(`
    INSERT INTO users(firstname, lastname, username, password)
    VALUES (
      '${firstname}',
      '${lastname}',
      '${username}',
      '${passwordHash}'
    )`).catch(err => console.log(err))
    const userInfo = await sequelize.query(`
      SELECT user_id, username, firstname FROM users WHERE username = '${username}'
    `);
    res.status(200).send(userInfo);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const validUser = await sequelize
    .query(
      `
    SELECT * FROM users WHERE username = '${username}'
  `
    )
    .catch((err) => console.log(err));
  console.log(validUser);
  if (validUser[1].rowCount === 1) {
    if (bcrypt.compareSync(password, validUser[0][0].password)) {
      let object = {
        id: validUser[0][0].id,
        name: validUser[0][0].name,
        username,
      };
      res.status(200).send(object);
    } else {
      res.status(401).send("Password invalid");
    }
  } else {
    res.status(401).send("Username invalid");
  }
});

connect();

app.listen(PORT, () => console.log(`Virtual Server running on port ${PORT}`));