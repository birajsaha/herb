const categoryController = require('../controllers').categories;
const itemController = require('../controllers').items;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the category API!',
  }));

  app.post('/api/categories', categoryController.create);
  app.get('/api/categories', categoryController.list);
  app.get('/api/categories/:categoryId', categoryController.retrieve);
  app.put('/api/categories/:categoryId', categoryController.update);
  app.delete('/api/categories/:categoryId', categoryController.destroy);
  app.post('/api/categories/:categoryId/items', itemController.create);
  app.put('/api/categories/:categoryId/items/:itemId', itemController.update);
  app.delete('/api/categories/:categoryId/items/:itemId', itemController.destroy);
};