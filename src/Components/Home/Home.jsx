import React from "react";
import img from "./Img/tv2.gif";
import mobile from "./Img/mobile.gif";
import cartoon from "./Img/cartoon.png";

export default function Home() {
  return (
    <div>
      <div className="container">
        <hr className="py-1 m-5" />
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img className="w-100 py-5" src={img} alt="" />
          </div>
          <div className="col-md-6">
            <h1 className="fs-1">Enjoy on your TV.</h1>
            <p className="fs-4">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <hr className="py-1 m-5" />
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
             <div className="col-md-6">
            <h1 className="fs-1">Download your shows to watch offline.</h1>
            <p className="fs-4">
              Save your favorites easily and always have something to watch.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img className="w-50 py-5" src={mobile} alt="" />
          </div>
         
          <hr className="py-1 m-5" />
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
            <img className="w-100 py-5" src={cartoon} alt="" />
          </div>
          <div className="col-md-6">
            <h1 className="fs-1">Create profiles for kids.</h1>
            <p className="fs-4">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          <hr className="py-1 m-5" />
        </div>
      </div>


    </div>
  );
}
