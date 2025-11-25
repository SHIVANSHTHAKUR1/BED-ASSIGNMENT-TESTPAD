const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: "Wireless Headphones",
        price: 99.99,
        category: "Electronics",
        description: "High-quality wireless headphones with noise cancellation.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Smart Watch",
        price: 199.99,
        category: "Electronics",
        description: "Advanced smart watch with health tracking features.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Running Shoes",
        price: 79.99,
        category: "Fashion",
        description: "Comfortable running shoes for daily use.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Leather Jacket",
        price: 149.99,
        category: "Fashion",
        description: "Stylish leather jacket for men.",
        image: "https://images.unsplash.com/photo-1551028919-ac76c9085b67?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Home",
        description: "Automatic coffee maker for perfect brew.",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Gaming Mouse",
        price: 39.99,
        category: "Electronics",
        description: "Ergonomic gaming mouse with RGB lighting.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Backpack",
        price: 59.99,
        category: "Fashion",
        description: "Durable backpack for travel and school.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Desk Lamp",
        price: 29.99,
        category: "Home",
        description: "Adjustable desk lamp with LED light.",
        image: "https://images.unsplash.com/photo-1507473888900-52e1ad1459ce?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Bluetooth Speaker",
        price: 69.99,
        category: "Electronics",
        description: "Portable bluetooth speaker with deep bass.",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Sunglasses",
        price: 89.99,
        category: "Fashion",
        description: "Classic aviator sunglasses.",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Plant Pot",
        price: 19.99,
        category: "Home",
        description: "Ceramic plant pot for indoor plants.",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Laptop Stand",
        price: 34.99,
        category: "Electronics",
        description: "Aluminum laptop stand for better ergonomics.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Water Bottle",
        price: 15.99,
        category: "Home",
        description: "Stainless steel water bottle.",
        image: "https://images.unsplash.com/photo-1602143407151-11115cd4e69b?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Yoga Mat",
        price: 25.99,
        category: "Home",
        description: "Non-slip yoga mat for exercise.",
        image: "https://images.unsplash.com/photo-1592432678010-c59121c2f987?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Wrist Watch",
        price: 129.99,
        category: "Fashion",
        description: "Elegant wrist watch for formal occasions.",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Camera",
        price: 499.99,
        category: "Electronics",
        description: "DSLR camera for professional photography.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Sneakers",
        price: 89.99,
        category: "Fashion",
        description: "Trendy sneakers for casual wear.",
        image: "https://images.unsplash.com/photo-1560769629-975e13f0c470?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Throw Pillow",
        price: 24.99,
        category: "Home",
        description: "Soft throw pillow for sofa.",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Headset",
        price: 59.99,
        category: "Electronics",
        description: "Gaming headset with microphone.",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Denim Jeans",
        price: 49.99,
        category: "Fashion",
        description: "Classic denim jeans.",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Wall Clock",
        price: 39.99,
        category: "Home",
        description: "Modern wall clock.",
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Tablet",
        price: 299.99,
        category: "Electronics",
        description: "High-performance tablet for work and play.",
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Hoodie",
        price: 44.99,
        category: "Fashion",
        description: "Warm hoodie for winter.",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&auto=format&fit=crop&q=60"
    },
    {
        name: "Vase",
        price: 14.99,
        category: "Home",
        description: "Glass vase for flowers.",
        image: "https://images.unsplash.com/photo-1581783342308-f792ca438912?w=500&auto=format&fit=crop&q=60"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ecommerce');
        console.log('MongoDB Connected for Seeding');

        await Product.deleteMany({});
        console.log('Deleted old products');

        await Product.insertMany(products);
        console.log('Database Seeded');

        await mongoose.connection.close();
        process.exit(0);
    } catch (err) {
        console.error('Seed Error:', err);
        process.exit(1);
    }
};

seedDB();
