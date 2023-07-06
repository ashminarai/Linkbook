import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Basics/Home";
import Login from "./Components/Basics/Login";
import Photo from "./Components/Basics/Photo";
import Register from "./Components/Basics/Register";
import Topload from "./Components/Basics/Topload";
import Timeline from "./Components/Basics/Timeline";
import '@fortawesome/fontawesome-free/css/all.css';
import Messenger from "./Components/Basics/Messenger";
import Profile from "./Components/Basics/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/mainfeed" element={<Topload />}></Route>
          <Route path="/mainfeed" element={<Timeline />}></Route>
          <Route path="/messengerchatbox" element={<Messenger />}></Route>
          <Route path="/userprofile" element={<Profile />}></Route>
        </Routes>
        <Login />
        <Photo />

        {/* {/* <Route path="/" exact component={Home} /> */}
      </Router>
    </>
  );
}

export default App;
