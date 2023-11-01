import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/common/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* 메뉴 */}
      <Nav />

      {/* 본문 */}
      <Home />
    </div>
  );
}

export default App;
