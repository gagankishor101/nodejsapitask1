const connection = require('../config/dbConfig');

const Product = {
  getAllProducts: (callback) => {
    const query = 'SELECT * FROM products';
    connection.query(query, callback);
  },

  getProductById: (productId, callback) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    connection.query(query, [productId], callback);
  },

  createProduct: (newProduct, callback) => {
    const query = 'INSERT INTO products SET ?';
    connection.query(query, newProduct, callback);
  },

  updateProduct: (productId, updatedProduct, callback) => {
    const query = 'UPDATE products SET ? WHERE id = ?';
    connection.query(query, [updatedProduct, productId], callback);
  },

  deleteProduct: (productId, callback) => {
    const query = 'DELETE FROM products WHERE id = ?';
    connection.query(query, [productId], callback);
  },
};

module.exports = Product;
