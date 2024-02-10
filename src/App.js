import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Home";
import { Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [value, setValue] = useState(0);
  let arr = ["a", "b"];
  useEffect(() => {
    console.log("runing");
    arr.push("qwertyui");

    setValue((prev) => {
      return prev + 1;
    });
  }, []);

  console.log(value);
  return (
    <>
      <Link to="home">Home</Link>
      <Routes>
        <Route path="home" element={<Home title="Anmol" />} />
      </Routes>
    </>
  );
}

export default App;
