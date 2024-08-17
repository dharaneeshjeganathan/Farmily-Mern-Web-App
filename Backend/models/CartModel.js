const mongoose = require('mongoose');

// Define the schema
const CartSchema = new mongoose.Schema({
    user_id: String,
  
    products:[
         {
    product_id: String,
      quantity: Number
    },
]
  });
  
  // Create a model from the schema
  const Cart = mongoose.model("cart", CartSchema);
  
  module.exports = Cart; // Export the model
  //when we create a product we create 