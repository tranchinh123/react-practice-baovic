import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPageDetail from "./pages/Blog-detail";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import LoginRegisterPage from "./pages/Login-Register";
import UpdateAccountPage from "./pages/UpdateAccout";
import DefaultLayout from "./layouts";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/blog/detail/:id" element={<BlogPageDetail />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/account" element={<UpdateAccountPage />} />
        </Route>
        <Route path="/login_register" element={<LoginRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
