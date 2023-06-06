const Category = require('../models/categoryModel');

const categoryController = {
  getAllCategories: (req, res) => {
    Category.getAllCategories((error, results) => {
      if (error) {
        console.error('Error retrieving categories:', error);
        // res.sendStatus(500);
        res.status(500).send('Error retrieving categories:',error);

        return;
      }

      res.json(results);
    });
  },

  getCategoryById: (req, res) => {
    const categoryId = req.params.id;
    Category.getCategoryById(categoryId, (error, results) => {
      if (error) {
        console.error('Error retrieving category:', error);
        // res.sendStatus(500);
        res.status(500).send('Error retrieving category:',error);

        return;
      }

      if (results.length === 0) {
        res.sendStatus(404);
        return;
      }

      res.json(results[0]);
    });
  },

  createCategory: (req, res) => {
    const newCategory = req.body;
    Category.createCategory(newCategory, (error, results) => {
      if (error) {
        console.error('Error creating category:', error);
        // res.sendStatus(500);
        res.status(500).send('Error creating category:');

        return;
      }

      console.log('Category created successfully');
      // res.sendStatus(201);
      res.status(201).send('Category created successfully');

    });
  },

  updateCategory: (req, res) => {
    const categoryId = req.params.id;
    const updatedCategory = req.body;

    Category.updateCategory(categoryId, updatedCategory, (error, results) => {
      if (error) {
        console.error('Error updating category:', error);
        // res.sendStatus(500);
        res.status(500).send('Error updating category:',results);

        return;
      }

      console.log('Category updated successfully');
      // res.sendStatus(200);
      res.status(200).send('Category updated successfully');

    });
  },

  deleteCategory: (req, res) => {
    const categoryId = req.params.id;

    Category.deleteCategory(categoryId, (error, results) => {
      if (error) {
        console.error('Error deleting category:', error);
        // res.sendStatus(500);
        res.status(500).send('Error deleting category:', error);

        return;
      }

      console.log('Category deleted successfully');
      // res.sendStatus(200);
      res.status(200).send('Category deleted successfully');

    });
  },
};

module.exports = categoryController;
