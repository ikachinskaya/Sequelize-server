//импортируем экспресс
const express = require("express");

//создаем роутер
const router = express.Router();

//импортируем userRouter
const userRouter = require("./userRouter");
const taskRouter = require("./taskRouter");

//router использует userRouter
router.use("/users", userRouter);

router.use("/tasks", taskRouter);

module.exports = router;

//router==middleWare
