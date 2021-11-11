//ЛОГИКА ДЛЯ ЭКСПРЕССА
//ЗАДАЧА: получать запросы от клиента и кидать их контроллеру
//импортируем экспресс
const express = require("express");

const router = require("./routers");

//создаем экспресс-приложение
const app = express();

//специальная промежуточная функция(middleWare), которая знает, как обрабатывать полученные JSON-данные
const bodyParser = express.json(); //data stream->JSON->JS объект->req.body

//подключаем. use передаст эту функцию всем методам
app.use(bodyParser);
//теперь сервер умеет работать с JSON-файлами

//подключаем роутер
app.use("/api", router);

//экспортируем приложение
module.exports = app;
