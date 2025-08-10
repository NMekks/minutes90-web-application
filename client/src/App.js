import "./App.css";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
