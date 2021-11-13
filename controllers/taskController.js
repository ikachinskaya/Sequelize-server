const { Task } = require("../models");

module.exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.send(tasks);
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.getTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const task = await Task.findAll({
      where: { id },
    });
    res.send(task);
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    const [updatedRows, [updatedTask]] = await Task.update(body, {
      where: { id },
      returning: true,
    });
    res.send(updatedTask);
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const foundTask = await Task.findByPk(id);
    await foundTask.destroy();

    res.send(foundTask);
  } catch (error) {
    next(error);
  }
};
//===================================================================
module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;
    const newTask = await Task.create(body);
    res.send(newTask);
  } catch (error) {
    next(error);
  }
};

//===================================================================
//findByPk - ищет по первичному ключу
