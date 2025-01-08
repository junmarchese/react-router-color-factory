import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,  Navigate } from "react-router-dom";
import Colors from "./Colors";
import ColorDetails from "./ColorDetails";
import AddColor from "./AddColor";

function App() {
  const [colors, setColors] = useState([
    { name: "red", colorValue: "#FF0000" },
    { name: "green", colorValue: "#00FF00"},
    { name: "blue", colorValue: "#0000FF" }
  ]);

  const addColor = (colorName, colorValue) => {
    const newColor = { name: colorName, colorValue };
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/colors" element={<Colors colors={colors} />} />
            <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
            <Route path="/colors/new" element={<AddColor addColor={addColor} />} />
            <Route path="*" element={<Navigate to="/colors" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
