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
