// const ProductController=require('../controllers/ProductController')
// const express=require('express');
// const router=express.Router();

// router.get("Products",ProductController.getProducts)
// module.exports=router
// //model->data
// //controller->api logic
// //root
// //go to index.js
// const express = require('express');
// const router = express.Router();
// const ProductController = require('../controllers/ProductController');

// // Define routes
// router.get("/", ProductController.getProducts);
// router.post("/", ProductController.createProduct);
// module.exports = router;
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const auth=require("../middlewares/auth");

// Define routes
router.get("/", ProductController.getProducts);
router.post("/",auth, ProductController.createProduct);
//router.delete("/:id", ProductController.deleteProduct); // Route for deleting a product by ID

module.exports = router;

