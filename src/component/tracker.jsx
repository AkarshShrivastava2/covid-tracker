import React, { useState, useEffect } from "react";
import Subtracker from './subtracker';


const Tracker = () => {
  return (
    <>
      <div className=" col-lg-10 col-md-9 col-sm-10 container mx-auto text-center">
        <h1> INDIA Covid-19 Dashboard </h1>
        <Subtracker />
      </div>
    </>
  );
};

export default Tracker;
