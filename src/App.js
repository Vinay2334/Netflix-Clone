import './App.css';
import React, { useEffect } from 'react'
import HomeScreen from './HomeScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './LoginScreen';
import { auth } from './firebase';
function App() {
  const user=null;

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //Logged in
      }else {
        //logged out
      }
    })

    return unsubscribe;
  }, [])
  

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ):(
          <Routes>
          <Route exact path="/"element={<HomeScreen/>}></Route>
          </Routes>
        )
}
      </Router>
    </div>
  );
}

export default App;
