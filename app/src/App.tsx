import { useState } from "react";
import { Navbar } from "./components";
import { Features, Footer, Header, WhySuite } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App gradient__bg">
      <Navbar />
      <Header />
      <WhySuite />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
