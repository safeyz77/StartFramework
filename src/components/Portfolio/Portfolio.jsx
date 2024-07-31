import React from "react";
import pic1 from "../../assets/poert1.png";
import pic2 from "../../assets/port2.png";
import pic3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="container mt-40">
        <h1 className="uppercase text-4xl font-bold ">portfolio component</h1>
        <div className="row m-7 ">
          <div className="w-1/3 p-7 ">
            <img src={pic1} alt="" className="rounded-xl" />
          </div>
          <div className="w-1/3 p-7 ">
            <img src={pic2} alt="" className="rounded-xl" />
          </div>
          <div className="w-1/3 p-7 ">
            <img src={pic3} alt="" className="rounded-xl" />
          </div>
          <div className="w-1/3 p-7 ">
            <img src={pic1} alt="" className="rounded-xl" />
          </div>
          <div className="w-1/3 p-7 ">
            <img src={pic2} alt="" className="rounded-xl" />
          </div>
          <div className="w-1/3 p-7 ">
            <img src={pic3} alt="" className="rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
}
