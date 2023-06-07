const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const connection = require('./config/dbConfig');
const dotenv = require("dotenv").config();
const port = process.env.port || 3000;
// const port = process.env.PORT || 3000;


const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);


// Start the server
app.listen(3000, () => {
    console.log(` app listening on port http://localhost:${port}`)
});

