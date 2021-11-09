const express = require("express");
const UserController = require("./controllers/userControllers");
const app = express();

//для работы с JSON файлами
const bodyParser = express.json(); //data stream->JSON->JS объект->req.body
app.use(bodyParser);

app.get("/users", UserController.getUsers);

app.post("/user");
module.exports = app;
