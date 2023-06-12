import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Basics/Home';
import Login from './Components/Basics/Login';
import Photo from './Components/Basics/Photo';


function App() {
  return(
    <>
     <Router>
     <Home/>
     <Login/>
     <Photo/>
     {/* {/* <Route path="/" exact component={Home} /> */} 
    </Router>
  
    
    </>
  )
 
}

export default App;
