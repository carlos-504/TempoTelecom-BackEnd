const db = require('../models');
const { Users } = db;

class UserController {
  static async insert(req, res) {
    try {
      const user = await Users.create(req.body);

      return res.send(user);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async show(req, res) {
    try {
      const users = await Users.findAll();

      return res.send(users);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;

      await Users.update(req.body, { where: { id } });

      const user = await Users.findByPk(id);

      return res.send(user);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      await Users.destroy({ where: { id } });

      return res.send({ message: 'Successfully delete user' });
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }
}

module.exports = UserController;
