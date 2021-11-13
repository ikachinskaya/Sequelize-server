//импортируем экспресс
const express = require("express");

//создаем роутер
const router = express.Router();

//импортируем userRouter
const userRouter = require("./userRouter");
const taskRouter = require("./taskRouter");
const postRouter = require("./postRouter");

//router использует userRouter
router.use("/users", userRouter);

router.use("/tasks", taskRouter);

router.use("/posts", postRouter);

module.exports = router;

//router==middleWare
