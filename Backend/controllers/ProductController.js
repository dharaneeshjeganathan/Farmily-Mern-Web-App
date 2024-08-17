// //import the product moedl
// const Product=require("../models/ProductModels")

// exports.getProduct=async(req,res) => {
//     try{
//         const Products=await Product.find();
//         res.send(Products);
//     }catch(err){
//         console.error(err);
//     }
// };
// //req and res is used to get the http request
// //The Product.find() method is used to retrieve all documents from the products collection.
// //  The await keyword ensures that the function 
// //  waits for the database query to complete before proceeding. 
// //  The result, which is an array of products, is stored in the Products variable.

// //go to
const Product = require("../models/ProductModels");
const { v4: uuidv4 } = require('uuid');// we uuid fror retriving the data

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Corrected variable name to `products`
    res.send(products);
  } catch (err) {
    console.error(err);
    
  }
};
exports.createProduct = async (req, res) => {
  const { title, description, price, category, rating, image } = req.body;

 
    const product = new Product({
        id:uuidv4(),
      title,
      description,
      price,
      category,
      rating,
      image
    });

    // Save the product to the database
    await product.save();

    // Send a response to the client
    res.status(200).json( "Product created successfully")
};

