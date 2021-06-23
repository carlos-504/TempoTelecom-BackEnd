const db = require('../models');
const { Products } = db;

class ProductController {
  static async insert(req, res) {
    try {
      const product = await Products.create(req.body);

      return res.send(product);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async show(req, res) {
    try {
      const products = await Products.findAll();

      return res.send(products);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;

      await Products.update(req.body, { where: { id } });

      const product = await Products.findByPk(id);

      return res.send(product);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      await Products.destroy({ where: { id } });

      return res.send({ message: 'Successfully delete product' });
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }
}

module.exports = ProductController;
