import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPageDetail from "./pages/Blog-detail";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import DefaultLayout from "./layouts";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/blogdetail" element={<BlogPageDetail />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
