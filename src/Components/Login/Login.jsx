import axios  from "axios";
import Joi from "joi";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import img from "./img/registr.png";
import style from "./Login.module.css";

export default function Login(props) {


  let navigate = useNavigate();
  let [errorList, setErrorList] = useState([]);
  let [error, setError] = useState("");
  let [loading, setLoading] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });


  function getUser(e) {
    // copy from user best bracktes
    let myUser = { ...user }; //spread operator
    //    get name dainamc from input = value
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }


  function validateForm() 
  {
    let schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net", "eg"] } }),
      password: Joi.string().required().pattern(new RegExp("^[a-z][0-9]{3}$")),
    });
    return schema.validate(user, { abortEarly: false });
  }


  async function submitForm(e) {
    e.preventDefault();
    let validationResult = validateForm();

    if (validationResult.error)
    {
      setErrorList(validationResult.error.details);
    }

    else
    {
      setLoading(true);
      let { data } = await axios.post(
        "https://route-egypt-api.herokuapp.com/signin",
        user
      );

      if (data.message === "success")
      {
        let token = data.token;
        localStorage.setItem("token", token);
        props.getUserData();
        navigate("/home");
        setLoading(false); 
      }
      else 
      {
        setError(data.message);
        setLoading(false);
      }
    }
  }

  return (
    <div className="py-5 container">
      <div className="row justify-content-between">
        <div className="col-md-8">
          <h1>Login Form</h1>
          <form onSubmit={submitForm}>
            {errorList.map((error, index) => (
              <li key={index} className="text-danger">
                {error.message}
              </li>
            ))}
            {error ? <li className="text-danger">{error}</li> : ""}

            <div className="py-2">
              <label htmlFor="email">Email</label>
              <input
                onChange={getUser}
                type="text"
                className="form-control"
                name="email"
              />
            </div>

            <div className="py-2">
              <label htmlFor="password">Password</label>
              <input
                onChange={getUser}
                type="text"
                className="form-control"
                name="password"
              />
            </div>

            <button type="submit" className="py-2 btn btn-light">
              {loading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
            </button>
          </form>
        </div>

        <div className="col-md-4 text-center">
          <img src={img} alt="404" className={`${style.img404} py-5`} />
        </div>
      </div>
    </div>
  );
}
