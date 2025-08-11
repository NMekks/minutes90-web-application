import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Feed from "./pages/Feed";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import MessagingPage from "./pages/MessagingPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar"; // Will create this next

function App() {
  // Will manage this with Context API later. For now, pretend we are logged in.
  const isAuthenticated = true; 

  return (
    <BrowserRouter>
      {/* Conditionally render Navbar if authenticated */}
      {isAuthenticated && <Navbar />}

      <div className={isAuthenticated ? "pt-5 mt-4" : ""}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route path="/feed" element={isAuthenticated ? <Feed /> : <Navigate to="/login" />} />
          <Route path="/profile/:userId" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
          <Route path="/search" element={isAuthenticated ? <SearchPage /> : <Navigate to="/login" />} />
          <Route path="/messages" element={isAuthenticated ? <MessagingPage /> : <Navigate to="/login" />} />
          <Route path="/subscription" element={isAuthenticated ? <SubscriptionPage /> : <Navigate to="/login" />} />
          <Route path="/admin" element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />} />
          
          {/* Default route */}
          <Route path="/" element={<Navigate to="/feed" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;