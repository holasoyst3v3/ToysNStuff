const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./database/sequelize");
const bcrypt = require("bcrypt");
require("dotenv").config();
const app = express();
const PORT = 3001;
const { connect } = require("./testConnection");

app.use(express.json());
app.use(cors());

sequelize.authenticate();

app.get("/getItems", async (req, res) => {
  let data = await sequelize.query(`SELECT * FROM posts`);
  res.status(200).send(data);
});

app.delete("/favorites", async (req, res) => {
  console.log(req.body)
  let data = await sequelize.query(`DELETE FROM favorites WHERE user_id = '${req.body.user_id}' AND post_id = '${req.body.post_id}'`);
  res.status(200).send(data);
})

app.get("/getFavorites/:user_id", async (req, res) => {
  let data = await sequelize.query(`SELECT * FROM posts WHERE post_id IN (SELECT post_id FROM favorites WHERE user_id = '${req.params.user_id}') `);
  console.log(req.params.username)
  res.status(200).send(data);
});

app.post("/favorites/", async (req, res) => {
  let data = await sequelize.query(`INSERT INTO favorites (post_id, user_id, username) VALUES ( '${req.body.post_id}', '${req.body.user_id}', '${req.body.username}') `);
  res.status(200).send(data);
});

app.post("/upload", async (req, res) => {
  const { post_title, post_desc, post_price, post_media } = req.body;
  const uploadPost = await sequelize
    .query(
      `
    INSERT INTO posts(post_title, post_desc, post_price, post_media)
    VALUES (
      '${post_title}',
      '${post_desc}',
      '${post_price}',
      '${post_media}'
    )`
    )
    .catch((err) => console.log(err.message));
  res.status(200).send(uploadPost);
});

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
    await sequelize
      .query(
        `
    INSERT INTO users(firstname, lastname, username, password)
    VALUES (
      '${firstname}',
      '${lastname}',
      '${username}',
      '${passwordHash}'
    )`
      )
      .catch((err) => console.log(err.message));
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
    .catch((err) => console.log(err.data));
  if (validUser[1].rowCount === 1) {
    if (bcrypt.compareSync(password, validUser[0][0].password)) {
      let object = {
        id: validUser[0][0].user_id,
        name: validUser[0][0].username,
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
