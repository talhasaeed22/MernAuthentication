import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Signup" element={<Signup />}>
          </Route>
          <Route exact path="/" element={<Login />}>
          </Route>
          <Route exact path="/Home" element={<Home />}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App