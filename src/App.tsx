import React, { useState } from "react";

import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import Sigin from "./pages/Signin";
import Login from "./pages/Login";
import User from "./pages/UserPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/userPage" element={<User />} />
          <Route path="/sigin" element={<Sigin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
