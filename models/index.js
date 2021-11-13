//'ПОЗВОЛЯЕТ ЭКСПОРТИРОВАТЬ ИЗ ПАПКИ MODELS ЛЮБЫЕ ФАЙЛЫ, ОКАНЧИВАЮЩИЕСЯ НА .js
"use strict";

//берем из ноды модуль файловой системы, потому что будет работать с файлами
const fs = require("fs");

//берем из ноды модуль пути (home, user  и т.д.)
const path = require("path");

//достаем библиотеку
const Sequelize = require("sequelize");

//находим последнюю часть пути, т.е. index.js
const basename = path.basename(__filename); //__filename - путь к текущему файлу

//переменная окружения, говорит в каком режиме работаем
const env = process.env.NODE_ENV || "development";

//достаем конфигурацию
//__dirname = путь - index.js
//вышли из models, зашли в config
//[env] - свойство в объекте, т.е. "development" из config
const config = require(__dirname + "/../config/config.json")[env];

//пустой объект, в котором лежат все модели
const db = {};

//экземпляр для связи с БД
let sequelize;

//так создают экземпляр
//если в config есть свойство use_env_variable
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

//читаем директорию синхронно
//запускается, когда запустится сервер
//единственное место, в котором при запуске сервера можно делать синхронно
//получим массив с именами файлом, которые есть в models
//файл не должен начинаться с точки
//файл не должен называться basename, т.е. index.js
//файл должен быть .js
//вернули новый массив с этими файлами
//перебираем полученный массив
//создаем модель
//передаем путь к текущей директории и имя файла
//импортируем эти файлы
//запускаем эти файлы и передаем в них sequelize, Sequelize.DataTypes
//в db создаем свойство и именем этой модели и передаем в него модель
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

//у db вызываем Object.keys, вернет массив со строками, которые являются ключами объекта
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//в db добавляем экземпляр
db.sequelize = sequelize;

//в db добавляем библиотеку
db.Sequelize = Sequelize;

//экспортируем db
module.exports = db;
