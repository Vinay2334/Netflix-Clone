import './App.css';
import React, { useEffect } from 'react'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout,login, selectUser } from './features/counter/userSlice';
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch()

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else {
        //logged out
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [dispatch])
  

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen/>
        ):(
          <Routes>
          <Route exact path="/profile"element={<ProfileScreen/>}></Route>
          <Route exact path="/"element={<HomeScreen/>}></Route>
          </Routes>
        )
}
      </Router>
    </div>
  );
}

export default App;
