// App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavPill from "./Components/NavPill";
import Sidebar from "./Components/SideBar";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <NavPill />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
