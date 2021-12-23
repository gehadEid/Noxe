import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <section className={`${style.content}`} id="footer">
        <div className="container text-center text-white py-5">
          <div className="row">
            <div className="col-md-4">
              <h4 className="py-3"> LOCATION</h4>
              <p className="fs-5 py-1">
                2215 John DanielDrive
                <br />
                Clark, MO 65243
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="py-3">AROUND THE WEB</h4>


              <div className= {`${style.icon} py-1 `}>
                <a href="http://google.com" className= "px-1  ">
                  <i className={`${style.btnSocial} fab fa-facebook-f  fs-5 btn btn-outline-light rounded-circle`}></i>
                </a>
                <a href="http://google.com" className="px-1">
                  <i className={`${style.btnSocial} fab fa-twitter  fs-5 btn btn-outline-light  rounded-circle`}></i>
                </a>
                <a href="http://google.com" className="px-1">
                  <i className={`${style.btnSocial} fab fa-linkedin-in  fs-5 btn btn-outline-light rounded-circle`}></i>
                </a>
                <a href="http://google.com" className="px-1">
                  <i className={`${style.btnSocial} fab fa-github fs-5 btn btn-outline-light rounded-circle`}></i>
                </a>
              </div>
 

            </div>
            <div className="col-md-4">
              <h4 className="py-3">ABOUT FREELANCER</h4>
              <p className="fs-5  py-1">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by .
              </p>
            </div>
          </div>
        </div>
        <div className={`${style.copyRight} py-4 text-white text-center`}>
          Copyright © Your Website 2021
        </div>
      </section>
    </div>
  );
}

