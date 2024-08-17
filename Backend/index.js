const express = require("express");
const mongoose = require('mongoose');
const ProductRoutes = require('./routes/ProductRoutes');
const UserRoutes = require('./routes/UserRoute');
const CartRoutes = require('./routes/CartRoutes');
const cors = require('cors');

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
// Routes
app.use("/cart", CartRoutes); 
app.use("/products", ProductRoutes); 
app.use("/users", UserRoutes); 
// Route for user-related endpoints
// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
