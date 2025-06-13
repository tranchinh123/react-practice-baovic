import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPageDetail from "./pages/Blog-detail";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import LoginRegisterPage from "./pages/Login-Register";
import UpdateAccountPage from "./pages/UpdateAccout";
import MyProductPage from "./pages/MyProduct/MyListProduct";
import AddProductPage from "./pages/MyProduct/AddProduct";
import EditProductPage from "./pages/MyProduct/EditProduct";
import ProductDetailPage from "./pages/Product-detail";
import CartPage from "./pages/Cart";
import DefaultLayout from "./layouts";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/blog/detail/:id" element={<BlogPageDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/account/update" element={<UpdateAccountPage />} />
            <Route path="/account/product/list" element={<MyProductPage />} />
            <Route path="/account/product/add" element={<AddProductPage />} />
            <Route
              path="/account/product/edit/:id"
              element={<EditProductPage />}
            />
            <Route path="/product_detail/:id" element={<ProductDetailPage />} />
          </Route>
          <Route path="/login_register" element={<LoginRegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
