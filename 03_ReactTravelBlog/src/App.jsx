import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import data from "./data.js";

function App() {
  const section = data.map((item) => {
    return <Section key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Header />
      {section}
    </div>
  );
}

export default App;
