import { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import About from "./components/About";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been set", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been set", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      text: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <HashRouter>
        <Navbar
          title="Converter"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About Us"
        />
        <Alert msg={alert} />


        <div className="container">
          <div
            className={`container  mt-4 text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
        <Routes>
          <Route path="/" element={<TextArea mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
            
            
            <div className="text-center mt-4">
              This is a Client-Side Web Scripting Tool that converts Numbers
              from one Base to all other Bases in real time, without having to
              convert at each input.
            </div>
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
