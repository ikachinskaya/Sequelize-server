const { User } = require("../models");

//вернуть определенные аттрибуты
// module.exports.getUsers = async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       attributes: ["firstName", "lastName", "email"],
//     });
//     res.send(users);
//   } catch (error) {
//     next(error);
//   }
// };
//===================================================================
//вернуть всё, кроме пароля
module.exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.send(users);
  } catch (error) {
    next(error);
  }
};
//===================================================================
//вернуть одного пользователя
module.exports.getUser = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const user = await User.findAll({
      where: { id },
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const [updatedRows, [updatedUser]] = await User.update(body, {
      where: { id },
      returning: true,
      //returning: ["first_name" , "last_name"]
    });

    //1 способ
    // const temp = updatedUser.get();
    // delete temp.password;

    //2 способ
    updatedUser.password = undefined;

    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    // const foundUser = await User.findAll({
    //   where: { id },
    // });

    //недостаток: стучимся в БД 2 раза
    const foundUser = await User.findByPk(id);
    await foundUser.destroy();

    res.send(foundUser);
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.createUser = async (req, res, next) => {
  try {
    //body- JSON с юзером
    const { body } = req;
    const newUser = await User.create(body);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
};

//===================================================================
//findByPk - ищет по первичному ключу
