import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [hour, setHour] = useState("");
  const [miltHour, setMiltHour] = useState(0);
  const [initValue, setInitValue] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");
  const [day, setDay] = useState(false);

  const totalTime = hour + ":" + min + ":" + sec + ":" + day;
  const [militaryTime, setMilitaryTime] = useState("");
  const sel = document.getElementById("option");

  const getTime = (e) => {
    setMilitaryTime("");
    setMiltHour(0);
    e.preventDefault();

    console.log(initValue);
    console.log(day);
    if (
      hour < 0 ||
      hour > 12 ||
      min > 60 ||
      min < 0 ||
      sec < 0 ||
      sec > 60 ||
      initValue === ""
    ) {
      alert(
        "Please Enter Valid time ... Thank you :)... becuase no such Time exist except if your from another planet"
      );
    }
    if (hour === "12" && day === false) {
      setMilitaryTime("12" + ":" + min + ":" + sec);
      setHour("");
      setMin("");
      setSec("");
      setInitValue("");
    } else if (hour === "12" && day === true) {
      setMilitaryTime("00" + ":" + min + ":" + sec);
      setHour("");
      setMin("");
      setSec("");
      setInitValue("");
    } else if (hour !== "12" && day === false) {
      let c = 0;
      c = parseInt(hour) + 12;
      setHour("");
      setMin("");
      setSec("");
      setInitValue("");
      setMilitaryTime(c + ":" + min + ":" + sec);
    } else if (hour !== "12" && day === true) {
      setHour("");
      setMin("");
      setSec("");
      setInitValue("");
      setMilitaryTime(hour + ":" + min + ":" + sec);
    }
  };

  useEffect(() => {
    if (initValue !== "pm") {
      setDay(true);
    } else setDay(false);
  }, [initValue]);
  useEffect(() => {}, [militaryTime]);
  return (
    <div className="app">
      <div className="form-container">
        <h3 className="form-title">Military Time Changer</h3>
        <h5 className="warning">
          Please enter correct format not to recieve errors:
        </h5>
        <h4 className="warning">EX:"02:02:02:AM"</h4>
        <form onSubmit={getTime} id="user-form">
          <div>
            <input
              type="text"
              placeholder="hh"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              maxLength="2"
              size="1"
              required
            />
            :
            <input
              type="text"
              placeholder="mm"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              maxLength="2"
              size="1"
              required
            />
            :
            <input
              type="text"
              placeholder="ss"
              value={sec}
              onChange={(e) => setSec(e.target.value)}
              maxLength="2"
              size="1"
              required
            />
            :
            <input
              type="text"
              placeholder="am/pm"
              value={initValue}
              onChange={(e) => setInitValue(e.target.value)}
              maxLength="2"
              size="5"
              required
            />
          </div>

          <button className="sub-btn">Get Time</button>
        </form>
        <div className="result">
          {" "}
          New Time :<span className="new-time">{militaryTime}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
