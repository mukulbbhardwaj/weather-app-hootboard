import React from "react";
import "./styles/result.css";
import backicon from "../assets/backicon.png";
import temp from "../assets/temp.png";
import humidity from "../assets/humidity.png";

const Result = ({ data}) => {

  const icon = data?.current.condition.icon;
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="main-container result-box">
      <div className="header">
        <img
          src={backicon}
          width={"24px"}
          height={"24px"}
          color="blue"
          onClick={refreshPage}
        ></img>
        <p className="title"> Weather App</p>
      </div>
      <img src={icon} id="weather-img"></img>
      <span id="temperature">{data?.current.temp_c}</span>
      <span id="weather-type">{data?.current.condition.text}</span>
      <span id="location">{data?.location.name }</span>
      <div className="footer-container">
        <div className="footer-item">
          <img src={temp} width={"32px"} height={"32px"} />
          <span id="feels-like-temp">
            {data.current.feelslike_c}
          </span>
        </div>
        <div className="footer-item">
          <img src={humidity} width={"32px"} height={"32px"} />
          <span id="humidity">{data.current.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
