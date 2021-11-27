//ЛОГИКА ДЛЯ ЭКСПРЕССА
//ЗАДАЧА: получать запросы от клиента и кидать их контроллеру
//импортируем экспресс
const express = require("express");

const router = require("./routers");

//создаем экспресс-приложение
const app = express();

const { errorHandler } = require("./middlewares/errorHandlers");

//специальная промежуточная функция(middleWare), которая знает, как обрабатывать полученные JSON-данные
const bodyParser = express.json(); //data stream->JSON->JS объект->req.body

//подключаем. use передаст эту функцию всем методам
app.use(bodyParser);
//теперь сервер умеет работать с JSON-файлами

//для предоставления статических файлов
app.use(express.static("public"));

//подключаем роутер
app.use("/api", router);

//обработчик ошибок
app.use(errorHandler);

//экспортируем приложение
module.exports = app;
