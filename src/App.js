import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (type, messge) => {
    setAlert(
      {
        type: type,
        message: messge
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("success", "Dark mode is enabled")
      document.title = "TextUtils App | Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("danger", "Dark mode is disabled")
      document.title = "TextUtils App | Light Mode";
    }
  }
  return (

    <Router>
      <Navbar Home="TextUtils" about="About" mode={mode}    toggleMode={changeMode} />
      <Alert alert={alert} />
      <div className="container" >
      <Routes>
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} toggleMode={changeMode} />    } />
      <Route path="/about"  element={<About mode={mode}  />}  />
      </Routes>
      </div>
    </Router>

  );
}
export default App;
