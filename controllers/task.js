const Task = require("../models/Task");
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    //return res.status(200).json({
    //  success: true,
    //  count: tasks.length,
    //  data: tasks,
    //});
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addTask = async (req, res, next) => {
  try {
    //const { text, day, reminder } = req.body;

    const task = await Task.create(req.body);

    //return res.status(201).json({
    //  success: true,
    //  data: task,
    //});
    return res.status(201).json(task);
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        error: "No task found",
      });
    }

    await task.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
