//импортируем экспресс
const express = require("express");

//импортируем роутер
const router = express.Router();

//импортируем UserController
const UserController = require("../controllers/userControllers");

//запрос на получение данных
//говорим каким методом, передаем путь и функцию, которую нужно исполнить
router.get("/users", UserController.getUsers);

//запрос на создание данных
router.post("/user", UserController.createUser);

router.patch("/user/:id", UserController.updateUser);

router.post("/user/:id", UserController.getUser);

router.delete("/user/:id", UserController.deleteUser);

module.exports = router;

//router==middleWare
