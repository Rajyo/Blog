import React from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
import Regsiter from "./pages/register/Regsiter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailsPages } from "./pages/detailsBlog/DetailsPages";
import Account from "./pages/account/Account";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import DetailsCategory from "./pages/detailsCategory/DetailsCategory";
import CreatePost from "./pages/createPost/CreatePost";
import About from "./pages/about/About";
import Logout from "./pages/logout/Logout";
import PrivateRoute from "./PrivateRoute";
import MyBlogs from "./pages/myBlogs/MyBlogs";
import EditBlog from "./pages/editBlog/EditBlog";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/blog" element={<Blog />} />
            <Route path="/createBlog" element={<CreatePost />} />
            <Route path="/details/:id" element={<DetailsPages />} />
            <Route
              path="/category/:categoryParam"
              element={<DetailsCategory />}
            />
            <Route path="/account" element={<Account />} />
            <Route path="/myBlogs" element={<MyBlogs />} />
            <Route path="/editBlog/:id" element={<EditBlog />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Regsiter />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
