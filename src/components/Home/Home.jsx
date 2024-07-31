import React from "react";
import HomePic from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col b text-center ">
        <img src={HomePic} className="w-72 mx-auto pt-7  h-90" alt="" />
        <h4 className="p-3">Start Framework</h4>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
