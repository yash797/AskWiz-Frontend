import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/auth/Login";
import Message from "./components/message/Message";
import Quora from "./components/Quora";
import QuoraHeader from "./components/QuoraHeader";
import { login, selectUser } from "./feature/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Profile from "./components/Profile";
function App() {
  

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
        localStorage.setItem("userName",(authUser.displayName));
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
    <QuoraHeader />
    <Routes>
    {/* <div className="App"> */}
      {/* <h1>This is for testing</h1> */}
    <Route path='/' element={user ? <Quora /> : <Login />} />

      
    {/* </div>  */}
    {/* <Route index element={<Quora />} /> */}
    <Route path='/messages' element={user ?<Message /> : <Login />} />
    <Route path='/profile/:username' element={user ?<Profile /> : <Login />} />

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
