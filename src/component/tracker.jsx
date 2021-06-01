import React, { useState, useEffect } from "react";
import Subtracker from './subtracker';


const Tracker = () => {
  return (
    <>
      <div className=" col-lg-10 col-md-9 col-sm-12 container mx-auto my-4 text-center">
        <h1> INDIA Covid-19 Dashboard </h1>
        <Subtracker />
      </div>
    </>
  );
};

export default Tracker;
