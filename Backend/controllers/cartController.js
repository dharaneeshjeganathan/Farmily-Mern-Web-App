const Cart = require("../models/CartModel");

exports.createcart = async (req, res) => {
    const { user_id } = req.user; // Get user id from auth
    const { product_id, quantity } = req.body;
    let cart = await Cart.findOne({ user_id });
  
    if (!cart) { // If there is no cart then create one
      cart = new Cart({
        user_id,
        products: [{
          product_id,
          quantity,
        }],
      });
    } else {
      const ProductIndex = cart.products.findIndex(
        (prod) => prod.product_id === product_id
      );
      if (ProductIndex > -1) {
        cart.products[ProductIndex].quantity = quantity;
      } else {
        cart.products.push({ product_id, quantity });
      }
    }
  
    await cart.save(); // Save the cart
    res.status(200).json({ message: "Product added/updated in cart", cart });
  };
  