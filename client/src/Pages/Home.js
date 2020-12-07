import React from "react";
import Button from "../components/Button";
import DateTime from '../components/DateTime'


export default (props) => {
  return (
    <div className="landing-container">
      <h1>Make Your Day</h1>
      <h1>
        <DateTime></DateTime>
      </h1>
      <div>
        
      </div>
    </div>
  );
};