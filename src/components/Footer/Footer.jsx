import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className=" pt-4 ">
        <div className=" footerBg bg-opacity-80 flex text-center pt-7 ">
          <div className="w-1/3">
            <h4>Location</h4>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="w-1/3">
            <h4 className="text-lg text-white">AROUND THE WEB</h4>
            <div className="icons">
              <i className="fa-brands fa-facebook text-white fa-2 p-3 m-1 border rounded-full"></i>
              <i class="fa-brands fa-twitter text-white fa-2 p-3 border rounded-full"></i>
              <i class="fa-brands fa-linkedin text-white fa-2 p-3 border rounded-full"></i>
              <i class="fa-solid fa-globe text-white fa-2 p-3 border rounded-full"></i>
            </div>
          </div>
          <div className="w-1/3 p-3">
            <h4>ABOUT FREELANCER</h4>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <div className="underFooter text-center">
          <p className="p-7">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
