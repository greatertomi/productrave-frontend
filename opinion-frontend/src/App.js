import React from "react";
import './styles/App.scss';
import './styles/utilities.scss';
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
