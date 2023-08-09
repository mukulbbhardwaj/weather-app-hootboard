import React from "react";
import "./styles/result.css";
import backicon from "../assets/backicon.png";
import temp from "../assets/temp.png";
import humidity from "../assets/humidity.png";

const Result = ({ data, setData }) => {
  const iconId = data?.weather[0].icon;
  const icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
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
      <span id="temperature">{Math.floor(data.main?.temp - 273.15)} °C</span>
      <span id="weather-type"> {data?.weather[0].main}</span>
      <span id="location">
        {data.name},{data.sys?.country}
      </span>
      <div className="footer-container">
        <div className="footer-item">
          <img src={temp} width={"32px"} height={"32px"} />
          <span id="feels-like-temp">
            {Math.floor(data.main?.feels_like - 273.15)} °C
          </span>
        </div>
        <div className="footer-item">
          <img src={humidity} width={"32px"} height={"32px"} />
          <span id="humidity">84%</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
