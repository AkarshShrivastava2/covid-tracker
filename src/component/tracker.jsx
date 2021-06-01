import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card' ;
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
