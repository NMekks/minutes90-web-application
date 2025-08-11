import "./App.css";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Feed from "./pages/Feed";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import MessagingPage from "./pages/MessagingPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  // For now, we'll pretend a user is logged in.
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <div className="App min-vh-100 d-flex align-items-center justify-content-center">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Protected Routes */}
          <Route
            path="/feed"
            element={isAuthenticated ? <Feed /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile/:userId"
            element={
              isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/search"
            element={
              isAuthenticated ? <SearchPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/messages"
            element={
              isAuthenticated ? <MessagingPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/subscription"
            element={
              isAuthenticated ? <SubscriptionPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/admin"
            element={
              isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />
            }
          />

          {/* Default route */}
          <Route path="/" element={<Navigate to="/feed" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
