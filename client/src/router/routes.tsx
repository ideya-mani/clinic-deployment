// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TopHeader from "./components/TopHeader";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../other components/Services";
import TimelinePost from "../other components/Blog";
import Contact from "../pages/Contact";
import Login from "../pages/login";
import AdminDashboard from "../pages/AdminDashboard";
import PrivateRoute from "../router/PrivateRoute"
import Register from "../other components/register";
import "../styles/App.css"
const RouteApp = () => {
  return (
    <div className="app-container">
    <div className="responsive-container">
    <Router>
      {/* <TopHeader /> */}
      <Header />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/TimelinePost" element={<TimelinePost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Use PrivateRoute for the protected admin dashboard route */}
          <Route
            path="/admin-dashboard"
            element={<PrivateRoute element={<AdminDashboard />} />}
          />
        </Routes>
      </div>
    </Router>
    </div>
    </div>
  );
};

export default RouteApp;
