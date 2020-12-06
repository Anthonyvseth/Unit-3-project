import React from "react";
import Button from "../components/Button";

export default (props) => {
  return (
    <div className="landing-container">
      <h1>Make Your Day</h1>
      <p>lorem ipsum dsfj woeiaslkdj skdf asdkjfasdlkjsdjf kaslf</p>
      <div className="landing-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          add Focus
        </Button>
      </div>
    </div>
  );
};