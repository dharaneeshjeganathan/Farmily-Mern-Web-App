const mongoose = require('mongoose');

// Define the schema
const ProductSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    price: Number,
    category: String,
    image: String, // Store image URL as a string
    rating: {
      count: Number,
      rate: Number
    }
  });
  
  // Create a model from the schema
  const Product = mongoose.model("Product", ProductSchema);
  
  module.exports = Product; // Export the model
  //when we create a product we create 