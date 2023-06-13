import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Basics/Home";
import Login from "./Components/Basics/Login";
import Photo from "./Components/Basics/Photo";
import Register from "./Components/Basics/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Login />
        <Photo />

        {/* {/* <Route path="/" exact component={Home} /> */}
      </Router>
    </>
  );
}

export default App;
