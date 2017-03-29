const item = require('../models').item;

module.exports = {
  create(req, res) {
    return item
      .create({
        name: req.body.name,
        categoryId: req.params.categoryId,
      })
      .then(item => res.status(201).send(item))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return item
      .find({
        where: {
          id: req.params.itemId,
          categoryId: req.params.categoryId,
        },
      })
      .then(item => {
        if (!item) {
          return res.status(404).send({
            message: 'Item Not Found',
          });
        }

        return item
          .update({
            name: req.body.name || item.name,
            isValid: req.body.isValid || item.isValid,
          })
          .then(updatedItem => res.status(200).send(updatedItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return item
      .find({
        where: {
          id: req.params.itemId,
          categoryId: req.params.categoryId,
        },
      })
      .then(item => {
        if (!item) {
          return res.status(404).send({
            message: 'Item Not Found',
          });
        }

        return item
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
