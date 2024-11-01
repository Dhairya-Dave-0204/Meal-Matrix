import React from "react";
import { Navbar, Sidebar } from "./components/component_index";
import { Routes, Route } from "react-router-dom";
import { Add, List, Orders } from "./pages/page_indes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const url = "http://localhost:4000"

  return (
    <>
      <div>
        <ToastContainer />
        <Navbar />
        <hr className="border-none h-[2px] bg-secondary" />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/add" element={<Add url={url}/>} />
            <Route path="/orders" element={<Orders url={url}/>} />
            <Route path="/list" element={<List url={url}/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
