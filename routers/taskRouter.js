const taskRouter = require("express").Router();

//импортируем UserController
const TaskController = require("../controllers/taskController");

//запрос на получение данных
//говорим каким методом, передаем путь и функцию, которую нужно исполнить
taskRouter.get("/", TaskController.getTasks);

//запрос на создание данных
taskRouter.post("/", TaskController.createTask);

taskRouter.patch("/:id", TaskController.updateTask);

taskRouter.post("/:id", TaskController.getTask);

taskRouter.delete("/:id", TaskController.deleteTask);

module.exports = taskRouter;
