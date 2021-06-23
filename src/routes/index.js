const user = require('./user');
const product = require('./product');
const request = require('./request');

module.exports = (app) => {
  app.use(user);
  app.use(product);
  app.use(request);
};
