import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weather-forecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />{" "}
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="weather-forecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}