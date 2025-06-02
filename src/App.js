import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPageDetail from "./pages/Blog-detail";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import LoginRegisterPage from "./pages/Login-Register";
import UpdateAccountPage from "./pages/UpdateAccout";
import MyProductPage from "./pages/Product/MyListProduct";
import AddProductPage from "./pages/Product/AddProduct";
import EditProductPage from "./pages/Product/EditProduct";
import DefaultLayout from "./layouts";

function App() {
  return (
    <Router>
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
        </Route>
        <Route path="/login_register" element={<LoginRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
