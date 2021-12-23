import React from "react";
import { NavLink} from "react-router-dom";
import style from "./Navbar.module.css";



export default function Navbar({loginData,logout}) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark p-4 fw-bold justify-content-between  align-items-center  ${style.mine}`}
      >
        <div className="container">
          <NavLink className={`navbar-brand me-5 ${style.logo}`} to="/home">
            Noxe
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {loginData != null ?<>
            
            <li className="nav-item">
               <NavLink className="nav-link" to="/Home">
                 Home
               </NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link" to="/Movies">
                 Movies
               </NavLink>
             </li>
            
             <li className="nav-item">
               <NavLink className="nav-link" to="/Tvshows">
                 Tv shows
               </NavLink>
             </li>

             <li className="nav-item">
               <NavLink className="nav-link" to="/People">
                 People
               </NavLink>
             </li>


           </> : ""}

            </ul>

            {loginData!=null?
             <h3 >Hello :{loginData.first_name +" "+ loginData.last_name }</h3>:"Hello Guys"
            }
            

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  align-items-center ">
              <a href="http://google.com">
                <i className={`${style.btnSocial} fab fa-twitter btn`}></i>
              </a>
              <a href="http://google.com">
                <i className={`${style.btnSocial} fab fa-linkedin-in btn `}></i>
              </a>

              <a href="http://google.com">
                <i className={`${style.btnSocial} fab fa-facebook  btn`}></i>
              </a>

              {loginData != null ? (
               
                   <NavLink className="nav-link" to="/home">
                      <li className="nav-item" onClick={logout} >logout</li>
                    </NavLink>
                
              ) :
              
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">
                      register
                    </NavLink>
                  </li>
                </>

              }
      
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
