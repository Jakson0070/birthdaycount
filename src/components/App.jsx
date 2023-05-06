import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  // get total seconds between the times

  useEffect(() => {
    setTimeout(setTime(new Date()), 1000);
  }, [time]);

  var delta = (new Date(2023, 11, 12) - time) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = Math.floor(delta);

  return (
    <div className="container">
      <h1>Countdown to my birthday</h1>
      <div className="timer">
        <div className="box days">
          <div className="numbers">{days}</div>days
        </div>
        <div className="box hours">
          <div className="numbers">{hours}</div>
          hours
        </div>
        <div className="box minutes">
          <div className="numbers">{minutes}</div>minutes
        </div>
        <div className="box seconds">
          <div className="numbers">{seconds}</div>seconds
        </div>
      </div>
    </div>
  );
}

export default App;
