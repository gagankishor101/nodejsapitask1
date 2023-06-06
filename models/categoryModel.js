const connection = require('../config/dbConfig');

const Category = {
  getAllCategories: (callback) => {
    const query = 'SELECT * FROM category';
    connection.query(query, callback);
  },

  getCategoryById: (categoryId, callback) => {
    const query = 'SELECT * FROM category WHERE id = ?';
    connection.query(query, [categoryId], callback);
  },

  createCategory: (newCategory, callback) => {
    const query = 'INSERT INTO category SET ?';
    connection.query(query, newCategory, callback);
  },

  updateCategory: (categoryId, updatedCategory, callback) => {
    const query = 'UPDATE category SET ? WHERE id = ?';
    connection.query(query, [updatedCategory, categoryId], callback);
  },

  deleteCategory: (categoryId, callback) => {
    const query = 'DELETE FROM category WHERE id = ?';
    connection.query(query, [categoryId], callback);
  },
};

module.exports = Category;
