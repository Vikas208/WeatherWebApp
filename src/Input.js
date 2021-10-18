import React, { useState } from "react";
import "./Input.css"
import axios from "axios";
import Weather from "./Weather";
function Input() {

    const [cityName, setCityName] = useState('');
    const [data, setData] = useState(null);
    const API_KEY = "64302739539c2a2f0b435d12a587ea6a";

    async function ShowWeather() {

        const link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

        await axios(link).then(res => {
            setData(res.data);
        }).catch((error) => {
            alert("Please Enter Valid City name");
            document.getElementById('name').value = "";
        })
    }

    return <div>
        <form className="box">
            <input type="text" id="name" placeholder="Enter City Name"
                value={cityName} onChange={(e) => {
                    setCityName(e.target.value);
                }}
            />
            <br />
            <button type="submit" onClick={
                (e) => {
                    e.preventDefault();

                    cityName !== '' ? ShowWeather() : alert("Enter City name");
                }
            }
            >Search</button>
        </form>
        {data !== null ? <Weather data={data} /> : ""}
    </div>;
}

export default Input;
