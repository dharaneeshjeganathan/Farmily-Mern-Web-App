import Products from "./components/Products";
import Header from "./Header";
import Searchbar from "./components/Searchbar";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Cart from "./components/Cart"
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App =()=>
  {
    return(
      <> 
      <ToastContainer/>
      <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Products  />}/>
        <Route path="/products/:productId" element={<ProductDetails  />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login  />}/>
        <Route path="/signup" element={<Signup  />}/>
      </Routes>
      </BrowserRouter>
      </>
    );
  };

export default App;