const userRouter = require("express").Router();

//импортируем UserController
const UserController = require("../controllers/userControllers");

//запрос на получение данных
//говорим каким методом, передаем путь и функцию, которую нужно исполнить
userRouter.get("/", UserController.getUsers);

//запрос на создание данных
userRouter.post("/", UserController.createUser);

userRouter.patch("/:id", UserController.updateUser);

userRouter.post("/:id", UserController.getUser);

userRouter.delete("/:id", UserController.deleteUser);

module.exports = userRouter;
