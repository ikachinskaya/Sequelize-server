//ЛОГИКА ДЛЯ СОЗДАНИЯ СЕРВЕРА

//импортируем из ноды модуль для создания сервера
const http = require("http");

//импортируем приложение
const app = require("./app");

//создаем сервер и запускаем приложение - экспресс
const server = http.createServer(app);

//создаем порт, берем из переменной окружения || 3000
const PORT = process.env.PORT || 3000;

//запускаем сервер, функция отрабабтывает, когда сервер запускается
server.listen(PORT, () => {
  console.log(`Server is active on ${PORT}`);
});
