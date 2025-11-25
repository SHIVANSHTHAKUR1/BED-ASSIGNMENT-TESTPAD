const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/ecommerce')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
