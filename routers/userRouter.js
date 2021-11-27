const userRouter = require("express").Router();

//импортируем UserController
const UserController = require("../controllers/userController");

const { findUser } = require("../middlewares/userMW");

const postRouter = require("./postRouter");

const { paginate } = require("../middlewares/paginationMW");

//запрос на получение данных
//говорим каким методом, передаем путь и функцию, которую нужно исполнить
userRouter.get("/", paginate, UserController.getUsers);

//запрос на создание данных
userRouter.post("/", UserController.createUser);

userRouter.patch("/:id", UserController.updateUser);

userRouter.post("/:id", UserController.getUser);

userRouter.delete("/:id", UserController.deleteUser);

userRouter.use("/:userId/posts", findUser, postRouter);

module.exports = userRouter;
