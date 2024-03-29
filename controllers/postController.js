const { User, Post } = require("../models");

module.exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.send({ data: posts });
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.getPost = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const post = await Post.findAll({
      where: { id },
    });
    res.send({ data: post });
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.updatePost = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const [updatedRows, [updatedPost]] = await Post.update(body, {
      where: { id },
      returning: true,
    });
    res.send(updatedPost);
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.deletePost = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const foundPost = await Post.findByPk(id);
    await foundPost.destroy();

    res.send({ data: foundPost });
  } catch (error) {
    next(error);
  }
};
//===================================================================
// module.exports.createPost = async (req, res, next) => {
//   try {
//     const {
//       body,
//       params: { userId },
//     } = req;
//     const newPost = await Post.create({ ...body, userId });
//     res.send(newPost);
//   } catch (error) {
//     next(error);
//   }
// };
//===================================================================
//создание поста с магическим методом
module.exports.createPost = async (req, res, next) => {
  try {
    const { body, userInstance } = req;

    const newPost = await userInstance.createPost(body);

    res.send({ data: newPost });
  } catch (error) {
    next(error);
  }
};
//===================================================================
//все посты юзера
// module.exports.getUserPosts = async (req, res, next) => {
//   try {
//     const {
//       params: { userId },
//     } = req;

//     const userWithPosts = await User.findOne({
//       where: {
//         id: userId,
//       },
//       include: Post,
//     });

//     res.send(userWithPosts);
//   } catch (error) {
//     next(error);
//   }
// };
//===================================================================
//все посты юзера с магическим методом
module.exports.getUserPosts = async (req, res, next) => {
  try {
    const {
      userInstance,
    } = req;
   
    const userPosts = await userInstance.getPosts();
    const userWithPosts = { userInstance, userPosts };

    res.send({ data: userWithPosts });
  } catch (error) {
    next(error);
  }
};
//===================================================================
//удалить все посты юзера. (магический метод не работает)
module.exports.deletePostsUser = async (req, res, next) => {
  try {
    const {
      userInstance
    } = req;
  
    const userPosts = await userInstance.getPosts();
    deletedItems = await Post.destroy({
      where: { userId: user.id },
    });

    res.send({ data: userPosts });
  } catch (error) {
    next(error);
  }
};
//findByPk - ищет по первичному ключу
//include - левый join
