import { BrowserRouter, Routes, Router,Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product"
import Productshow from "./Pages/showProduct";
import LogIn from "./Pages/logIn";
function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/> }/>
    <Route path="/products" element={<Product/>}/>
    <Route path="/show/:id" element={<Productshow/>}/>
    <Route path="/login" element={<LogIn/>} />
  </Routes>
  </BrowserRouter>
  );
}
export default App;
