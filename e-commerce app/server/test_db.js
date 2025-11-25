const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce')
    .then(() => {
        console.log('Connected successfully');
        process.exit(0);
    })
    .catch(err => {
        console.error('Connection error:', err);
        process.exit(1);
    });
