import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import Tvshows from "./Components/Tvshows/Tvshows";
import People from "./Components/People/People";
import Footer from "./Components/Footer/Footer";
import Notfound from "./Components/Notfound/Notfound";
import { Route, Routes } from "react-router";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import {useNavigate } from "react-router-dom";

function App() {
  let [loginData, setLoginData] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData();
    }
    console.log("test from abdo");
  },[]);

  function getUserData() {
    let decoded = jwt_decode(localStorage.getItem("token"));
    setLoginData(decoded);
  }

  function logout() {
    localStorage.clear();
    // localStorage.removeItem("userData");
    setLoginData(null);
    navigate("/login");
  }

  return (
    <>
      <Navbar loginData={loginData} logout={logout} />
      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />

          {loginData != null ? (
            <>
              <Route path="Movies" element={<Movies />} />
              <Route path="Tvshows" element={<Tvshows />} />
              <Route path="People" element={<People />} />
              <Route path="*" element={<Notfound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route
                path="Login"
                element={<Login getUserData={getUserData} />}
              />
              <Route path="Register" element={<Register />} />
              <Route path="*" element={<Notfound />} />
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
