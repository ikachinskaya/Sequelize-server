//импортируем экспресс
const express = require("express");

//создаем роутер
const router = express.Router();

//импортируем userRouter
const userRouter = require("./userRouter");

//router использует userRouter
router.use("/users", userRouter);

module.exports = router;

//router==middleWare
