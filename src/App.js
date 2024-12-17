import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import "./App.css";
import MainDahboard from "./components/Dashboard";
import ScreenProvider, { DasboardScreenProvider } from "./components/Context";
import MenuProvider from "./components/Context/MenuContext";
function App() {

  return (
    <div className="App">
      <ScreenProvider>
        <MenuProvider>
          <Router>
            <Routes>
              <Route path="/user-dashboard" element={<MainDahboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </MenuProvider>
      </ScreenProvider>
    </div>
  );
}

export default App;
