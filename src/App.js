import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Basics/Home';
import Login from './Components/Basics/Login';


function App() {
  return(
    <>
     <Router>
     <Home/>
     <Login/>
     {/* <Route path="/" exact component={Home} />
      <Route path="/about" component={About} /> */}
    </Router>
  
    
    </>
  )
 
}

export default App;
