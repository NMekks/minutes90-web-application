import "./App.css";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
          <div className="App min-vh-100 d-flex align-items-center justify-content-center">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;
