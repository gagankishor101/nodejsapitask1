const Product = require('../models/productModel');

const productController = {
  getAllProducts: (req, res) => {
    Product.getAllProducts((error, results) => {
      console.log(error)
      if (error) {
        console.error('Error retrieving products:', error);
        // res.sendStatus(500);
        const result = {
          status: 0,
          code: 500,
          message: "Something went wrong!",
        }
        return res.status(500).send(result);

      }
      const result = {
        status: 1,
        code: 200,
        message: "Products list fetch successfully!",
        result: results
      }
      res.json(result);
    });
  },

  getProductById: (req, res) => {
    const productId = req.params.id;
    Product.getProductById(productId, (error, results) => {
      if (error) {
        console.error('Error retrieving product:', error);
        // res.sendStatus(500);
        res.status(500).send('Error retrieving product:',error);
        return;
      }

      if (results.length === 0) {
        res.sendStatus(404);
        return;
      }

      res.json(results[0]);
    });
  },

  createProduct: (req, res) => {
    const newProduct = req.body;
    Product.createProduct(newProduct, (error, results) => {
      if (error) {
        console.error('Error creating product:', error);
        // res.sendStatus(500);
        res.status(500).send('Error creating product:');
        return;
      }

      console.log('Product created successfully');
      // res.sendStatus(201);
      res.status(201).send('Product created successfully');
    });
  },

  updateProduct: (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;

    Product.updateProduct(productId, updatedProduct, (error, results) => {
      if (error) {
        console.error('Error updating product:', error);
        // res.sendStatus(500);
        res.status(500).send('Error updating product:');
        return;
      }

      console.log('Product updated successfully');
      // res.send("Product updated successfully");
      res.status(200).send('Product updated successfully');
    });
  },

  deleteProduct: (req, res) => {
    const productId = req.params.id;

    Product.deleteProduct(productId, (error, results) => {
      if (error) {
        console.error('Error deleting product:', error);
        // res.sendStatus(500);
        res.status(500).send('Error deleting product:');
        return;
      }

      console.log('Product deleted successfully');
      // res.sendStatus(200);
      res.status(200).send('Product deleted successfully');
    });
  },
};

module.exports = productController;
