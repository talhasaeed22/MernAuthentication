import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Signup" element={<Signup />}>
          </Route>
          <Route exact path="/Login" element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App