const Task = require("../sequelize/models").task;

export class TaskController {
  /**
   * Retrieve all tasks
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @returns {Object} All tasks
   */

  static async all(req, res) {
    const {
      query: { order = "created", orderMethod = "DESC", page = 1, limit = 10 },
      user: { personnel_id }
    } = req;

    const perPage = parseInt(limit, 10);
    const offset = page ? (parseInt(page) - 1) * limit : 0;

    const totalTasks = await Task.count({ where: { personnel_id } });

    //  Retrieve tasks with pagination
    const tasks = await Task.findAll({
      offset,
      limit: perPage,
      order: [[order, orderMethod]],
      where: {
        personnel_id
      }
    });

    return res.status(200).send({
      totalTasks,
      page,
      perPage,
      tasks
    });
  }
}
