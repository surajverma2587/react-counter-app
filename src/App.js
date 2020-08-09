import React from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header title="Counter App" />
      <Counter initialValue={0} />
    </div>
  );
};

export default App;
