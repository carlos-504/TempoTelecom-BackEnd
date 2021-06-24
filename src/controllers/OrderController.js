const db = require('../models');
const { Products, Orders, Users } = db;

class OrderController {
  static async insert(req, res) {
    try {
      const { products, ...data } = req.body;
      const order = await Orders.create(data);

      if (products && products.length > 0) {
        await order.setProducts(products);
      }

      const { id } = order;

      const orderProd = await Orders.findOne({
        where: { id },
        include: [
          {
            model: Products,
            as: 'products',
            through: { attributes: [] },
          },
          Users,
        ],
      });

      const totalValue = orderProd.dataValues.products
        .map((element) => element.dataValues.value)
        .reduce((previous, current) => previous + current);

      orderProd.update({ totalValue });

      return res.send(orderProd);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async show(req, res) {
    try {
      const order = await Orders.findAll({
        include: [
          {
            model: Products,
            as: 'products',
            through: { attributes: [] },
          },
          Users,
        ],
        order: [['id', 'DESC']],
      });

      return res.send(order);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async index(req, res) {
    try {
      const { id } = req.params;

      const order = await Orders.findByPk(id, {
        include: [
          {
            model: Products,
            as: 'products',
            through: { attributes: [] },
          },
          Users,
        ],
      });

      if (!order) {
        return res.status(204).send();
      }

      return res.send(order);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const order = await Orders.findOne({
        where: { id },
        include: [
          {
            model: Products,
            as: 'products',
            through: { attributes: [] },
          },
          Users,
        ],
      });

      const { products, ...data } = req.body;
      order.update(data);

      if ((products, products.length > 0)) {
        order.setProducts(products);
      }

      return res.send(order);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      await Orders.destroy({ where: { id } });

      return res.send({ message: 'Successfully delete request' });
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }
}

module.exports = OrderController;
