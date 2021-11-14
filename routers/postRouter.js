const postRouter = require("express").Router();

//импортируем UserController
const PostController = require("../controllers/postController");

//запрос на получение данных
//говорим каким методом, передаем путь и функцию, которую нужно исполнить
postRouter.get("/", PostController.getPosts);

//запрос на создание данных
postRouter.post("/", PostController.createPost);

//postRouter.patch("/:id", PostController.updatePost);

//postRouter.post("/:id", PostController.getPost);

//postRouter.delete("/:id", PostController.deletePost);

postRouter.get("/", PostController.getUserPosts);

postRouter.delete("/", PostController.deletePostsUser);

module.exports = postRouter;
