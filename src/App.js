import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPageDetail from "./pages/Blog-detail";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import LoginRegisterPage from "./pages/Login-Register";
import DefaultLayout from "./layouts";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/blog/detail/:id" element={<BlogPageDetail />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
        <Route path="/login_register" element={<LoginRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
