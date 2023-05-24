import React, { useState } from "react";
import { BrowserRouter as Router,  Route, Routes,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [button, setButton] = useState("light");
  const [text, setText] = useState("Toggle Mode");
  const [color, setColor] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const classRemove = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };

  const toggleMode = (cls) => {
    console.log(cls);
    classRemove();
    if (cls !== "dark" && cls !== "light") {
      document.body.classList.add("bg-" + cls);
      document.title = "TextUtils - " + cls + " mode";
      setText(
        "Enabled " + cls.charAt(0).toUpperCase() + cls.slice(1) + " Mode!!!"
      );
      showAlert(
        "Hurray !!! " +
          cls.charAt(0).toUpperCase() +
          cls.slice(1) +
          " has been Enabled",
        cls
      );
      setMode("light");
      console.log(mode);
      setButton(cls);
      setColor("black");
      // setInterval(()=> {
      //   document.title = "TextUtils - An amazing App!"
      // },2000);
      // setInterval(()=> {
      //   document.title = "Download TextUtils Now!!"
      // },1500);
    } else if (cls === "dark") {
      document.body.classList.add("bg-" + cls);
      document.title = "TextUtils - " + cls + " mode";
      setText(
        "Enabled " + cls.charAt(0).toUpperCase() + cls.slice(1) + " Mode!!!"
      );
      setColor("white");
      showAlert(
        "Hurray !!! " +
          cls.charAt(0).toUpperCase() +
          cls.slice(1) +
          " has been Enabled",
        cls
      );
      setMode("dark");
      setButton(cls);
    } else if (cls === "light") {
      document.body.classList.add("bg-" + cls);
      document.title = "TextUtils - " + cls + " mode";
      setText(
        "Enabled " + cls.charAt(0).toUpperCase() + cls.slice(1) + " Mode!!!"
      );
      showAlert(
        "Hurray !!! " +
          cls.charAt(0).toUpperCase() +
          cls.slice(1) +
          " has been Enabled",
        cls
      );
      setColor("black");
      setMode("light");
      setButton(cls);
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="Text Utils"
        aboutText="About us"
        mode={mode}
        text={text}
        colors={color}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
         <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} >

            </Route>

            <Route exact path="/" element={<TextForm heading="Enter the Text Below to Analyze" mode={mode} showAlert = {showAlert} toggleMode={toggleMode} button = {button}/>}>

            </Route>
          </Routes>
      <div className="container my-3">
      </div>
      </Router>
    </>
  );
}

export default App;
