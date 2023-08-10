import React, { useEffect, useState } from "react";
import Result from "./Result";
import axios from "axios";

const Home = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);
  const [location, setLocation] = useState({
    lat: "",
    long: "",
  });
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
  };

  const showPosition = (data) => {
    setLocation({
      lat: data.coords.latitude,
      long: data.coords.longitude,
    });
  };

  const showError = (err) => {
    console.log("err");
    console.log(err.message);
  };
  const weatherDetailsByLocation = async () => {
    const query = `${location.lat},${location.long}`;
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`;
    await axios.get(apiURL).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const weatherDetails = async () => {
    if (!cityName) return;
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;
    await axios
      .get(apiURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err.message);
        alert("Enter a Valid City Name");
      });
  };
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      weatherDetails();
      console.log("data", data);
    }
  };

  return (
    <>
      <div className="main-container">
        {typeof data.current !== "undefined" ? (
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
            <button onClick={weatherDetailsByLocation} className="btn">
              Get Device Location
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
