const user = require('./user');
const product = require('./product');
const order = require('./order');

module.exports = (app) => {
  app.use(user);
  app.use(product);
  app.use(order);
};
