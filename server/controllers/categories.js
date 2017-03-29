const category = require('../models').category;
const item = require('../models').item;

module.exports = {
  create(req, res) {
    return category
      .create({
        name: req.body.name
      })
      .then(category => res.status(201).send(category))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return category
      .findAll({
        include: [{
          model: item,
          as: 'categoryItems',
        }],
      }).then(category => res.status(200).send(category))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return category
      .findById(req.params.categoryId, {
        include: [{
          model: item,
          as: 'categoryItems',
        }],
      })
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'category Not Found',
          });
        }
        return res.status(200).send(category);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return category
      .findById(req.params.categoryId, {
        include: [{
          model: item,
          as: 'categoryItems',
        }],
      })
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'categoryId Not Found',
          });
        }
        return category
          .update({
            title: req.body.name || category.name,
            isValid: req.body.isValid || category.isValid,
          })
          .then(() => res.status(200).send(category))  // Send back the updated category.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return category
      .findById(req.params.categoryId)
      .then(category => {
        if (!category) {
          return res.status(400).send({
            message: 'Category Not Found',
          });
        }
        return category
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};
