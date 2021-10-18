import React from "react";
import "./Weather.css"

function Weather({ data }) {

    const IMG = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    return (
        <div className="weather">
            <div className="weather-box">
                <p className="name">{data.name}, {data.sys.country}</p>
                <img className="img" src={IMG} alt="img" />

                <p className="degree">{Math.floor(data.main.temp - 273.15)} &#8451;</p>
                <p>{data.weather[0].main}</p>
            </div>
            <div className="more-info">
                <p>Feels Like {data.main.feels_like}</p>
                <p>wind {data.wind.speed}</p>
                <p>visibility {data.visibility / 1000}km/h</p>
                <p>humidity {data.main.humidity}%</p>
            </div>
        </div>
    );
}

export default Weather;
