import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NoticeDetails from "./pages/NoticeDetails";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Notice Details Page */}
        <Route
          path="/notice"
          element={<NoticeDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;