// const myMethod = require('../component/result');
// const { default: result } = require('../component/result');
const generateData = require('../component/result');
const Category = require('../models/categoryModel');

const categoryController = {
  getAllCategories: (req, res) => {
    Category.getAllCategories((error, results) => {
      if (error) {
        console.error('Error retrieving categories:', error);
        // res.sendStatus(500);
        // res.status(500).send('Error retrieving categories:',error);
        const jsonData = generateData(500,0,"Something went wrong!",error,results);
        res.json(jsonData);
        return;
      }
      
      const jsonData = generateData(200,1,"Category list fetch successfully!",error,results);
      res.json(jsonData);
      // console.log(jsonData)
    });
  },

  getCategoryById: (req, res) => {
    const categoryId = req.params.id;
    Category.getCategoryById(categoryId, (error, results) => {
      if (error) {
        console.error('Error retrieving category:', error);
        // res.sendStatus(500);
        // res.status(500).send('Error retrieving category:',error);
        const jsonData = generateData(500,0,"Error retrieving category:",error,results);
        res.json(jsonData);
        return;
      }

      if (results.length === 0) {
        // res.sendStatus(404);
        const jsonData = generateData(404,0,"No category found:",error,results);
        res.json(jsonData);
        return;
      }
      const jsonData = generateData(200,1,"category found:",error,results[0]);
      res.json(jsonData);
      // res.json(results);
    });
  },

  createCategory: (req, res) => {
    const newCategory = req.body;
    Category.createCategory(newCategory, (error, results) => {
      if (error) {
        console.error('Error creating category:', error);
        // res.sendStatus(500);
        // res.status(500).send('Error creating category:');
        const jsonData = generateData(500,0,"Error creating category:",error,results);
        res.json(jsonData);

        return;
      }

      console.log('Category created successfully');
      // res.sendStatus(201);
      const jsonData = generateData(201,1,"Category created successfully",error,results);
      res.json(jsonData);
      // res.status(201).send('Category created successfully');

    });
  },

  updateCategory: (req, res) => {
    const categoryId = req.params.id;
    const updatedCategory = req.body;

    Category.updateCategory(categoryId, updatedCategory, (error, results) => {
      if (error) {
        console.error('Error updating category:', error);
        // res.sendStatus(500);
        // res.status(500).send('Error updating category:',results);
        const jsonData = generateData(500,0,"Error updating category:",error,results);
        res.json(jsonData);

        return;
      }

      console.log('Category updated successfully');
      // res.sendStatus(200);
      // res.status(200).send('Category updated successfully');
      const jsonData = generateData(200,1,'Category updated successfully',error,results);
      res.json(jsonData);

    });
  },

  deleteCategory: (req, res) => {
    const categoryId = req.params.id;

    Category.deleteCategory(categoryId, (error, results) => {
      if (error) {
        console.error('Error deleting category:', error);
        // res.sendStatus(500);
        // res.status(500).send('Error deleting category:', error);
        const jsonData = generateData(500,0,'Error deleting category:',error,results);
        res.json(jsonData);

        return;
      }

      console.log('Category deleted successfully');
      // res.sendStatus(200);
      // res.status(200).send('Category deleted successfully');
      const jsonData = generateData(200,1,'Category deleted successfully',error,results);
      res.json(jsonData);

    });
  },
};

module.exports = categoryController;
