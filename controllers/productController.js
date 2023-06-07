const generateData = require('../component/result');
const Product = require('../models/productModel');

const productController = {
  getAllProducts: (req, res) => {
    Product.getAllProducts((error, results) => {
      console.log(error)
      if (error) {
        // console.error('Error retrieving products:', error);
        // res.sendStatus(500);
        // const result = {
        //   status: 0,
        //   code: 500,
        //   message: "Something went wrong!",
        // }
        const jsonData = generateData(500,0,"Something went wrong!",error);
        return res.status(500).json(jsonData);
        // return res.status(500).send(result);

      }
      // const result = {
      //   status: 1,
      //   code: 200,
      //   message: "Products list fetch successfully!",
      //   result: results
      // }
      // res.json(result);
      const jsonData = generateData(200,1,"Products list fetch successfully!",error,results);
      res.json(jsonData);
      
    });
  },

  getProductById: (req, res) => {
    const productId = req.params.id;
    Product.getProductById(productId, (error, results) => {
      if (error) {
        console.error('Error retrieving product:', error);
        // res.sendStatus(500);
        // res.status(500).send('Error retrieving product:',error);
        const jsonData = generateData(500,0,"Error retrieving product:",error,results);
        return res.json(jsonData);
        // return;
      }

      if (results.length === 0) {
        // res.sendStatus(404);
        const jsonData = generateData(404,0,"No product found:",error,results);
        res.status(404).json(jsonData);
        return;
      }

      // res.json(results);
      const jsonData = generateData(200,1,"product found:",error,results[0]);
      res.json(jsonData);
    });
  },

  createProduct: (req, res) => {
    const newProduct = req.body;
    Product.createProduct(newProduct, (error, results) => {
      if (error) {
        console.error('Error creating product:', error);
        // res.sendStatus(500);
        // res.status(500).send('Error creating product:');
        const jsonData = generateData(500,0,"Error creating product:",error,results);
        return res.status(500).json(jsonData);
        // return;
      }

      console.log('Product created successfully');
      // res.sendStatus(201);
      // res.status(201).send('Product created successfully');
      const jsonData = generateData(200,1,"Product created successfully");
      res.json(jsonData);
    });
  },

  updateProduct: (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;

    Product.updateProduct(productId, updatedProduct, (error, results) => {
      if (error) {
        console.error('Error updating product:', error);
        // res.sendStatus(500);
        // res.status(500).send('Error updating product:');
        const jsonData = generateData(500,0,"Error updating product:",error,results);
        return res.status(500).json(jsonData);
        // return;
      }

      console.log('Product updated successfully');
      // res.send("Product updated successfully");
      // res.status(200).send('Product updated successfully');
      const jsonData = generateData(200,1,"Product updated successfully");
      res.json(jsonData);
    });
  },

  deleteProduct: (req, res) => {
    const productId = req.params.id;

    Product.deleteProduct(productId, (error, results) => {
      if (error) {
        console.error('Error deleting product:', error);
        // res.sendStatus(500);
        // res.status(500).send('Error deleting product:');
        // return;
        const jsonData = generateData(500,0,"Error deleting product:",error);
        return res.status(500).json(jsonData);
      }

      console.log('Product deleted successfully');
      // res.sendStatus(200);
      // res.status(200).send('Product deleted successfully');
      const jsonData = generateData(200,1,"Product deleted successfully");
      res.json(jsonData);
    });
  },
};

module.exports = productController;
