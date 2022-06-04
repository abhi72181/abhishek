import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="productslist/*" element={<ProductList />}>
        <Route path=":id" element={<Product />} />

        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
