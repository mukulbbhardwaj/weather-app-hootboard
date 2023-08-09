import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

const Home = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const weatherDetails = async () => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      " &appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      weatherDetails();
      console.log(data);
    }
  };

  const getLocation = () => {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   setLocation(position);
    //   console.log(location);
    // });
  };

  return (
    <>
      <div className="main-container">
        {typeof data.main !== "undefined" ? (
          <Result data={data} setData={setData} />
        ) : (
          <div className="home-container">
            <div className="header">
              <p className="title"> Weather App</p>
            </div>
            <input
              placeholder="Enter City Name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              onKeyDown={handleKeydown}
              className="input-box"
            ></input>
            <p className="or-divider">------or------</p>
            <button onClick={getLocation} className="btn">
              Get Device Location
            </button>
          </div>
        )}
      </div>
   
    </>
  );
};

export default Home;
