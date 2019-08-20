import React from "react";

const DateInput = props => (
  <div>
    <form className="container-form" onSubmit={props.changeDate}>
      <span>Choose a date :</span>
      <input className="inputDate" type="date" />
      <input className="submitBtn" type="submit" value="Submit" />
    </form>
    <hr />
  </div>
);

export default DateInput;
