const db = require('../models');
const { Products, Requests } = db;

class RequestController {
  static async insert(req, res) {
    try {
      const { products, ...data } = req.body;
      const request = await Requests.create(data);

      if (products && products.length > 0) {
        await request.setProducts(products);
      }

      const { id } = request;

      const requestProd = await Requests.findOne({
        where: { id },
        include: [
          {
            model: Products,
            as: 'products',
            through: { attributes: [] },
          },
        ],
      });

      return res.send(requestProd);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async show(req, res) {
    try {
      const request = await Requests.findAll({
        include: [
          {
            model: Products,
            as: 'products',
            through: { attributes: [] },
          },
        ],
      });

      return res.send(request);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const request = await Requests.findOne({
        where: { id },
        include: [
          {
            model: Products,
            as: 'products',
            through: { attributes: [] },
          },
        ],
      });

      const { products, ...data } = req.body;
      request.update(data);

      if ((products, products.length > 0)) {
        request.setProducts(products);
      }

      return res.send(request);
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      await Requests.destroy({ where: { id } });

      return res.send({ message: 'Successfully delete request' });
    } catch (err) {
      return res.status(400).send({ err: err.message });
    }
  }
}

module.exports = RequestController;
