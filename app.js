//ЛОГИКА ДЛЯ ЭКСПРЕССА
//ЗАДАЧА: получать запросы от клиента и кидать их контроллеру
//импортируем экспресс
const express = require("express");

//создаем экспресс-приложение
const app = express();

//импортируем UserController
const UserController = require("./controllers/userControllers");

//специальная промежуточная функция(middleWare), которая знает, как обрабатывать полученные JSON-данные
const bodyParser = express.json(); //data stream->JSON->JS объект->req.body

//подключаем. use передаст эту функцию всем методам
app.use(bodyParser);
//теперь сервер умеет работать с JSON-файлами

//запрос на получение данных
//говорим каким методом, передаем путь и функцию, которую нужно исполнить
app.get("/users", UserController.getUsers);

//запрос на создание данных
app.post("/user", UserController.createUser);

app.patch("/user/:id", UserController.updateUser);

app.post("/user/:id", UserController.getUser);

app.delete("/user/:id", UserController.deleteUser);

//экспортируем приложение
module.exports = app;
