import axios from "axios";
import { useState } from "react";

export const WeatherBox = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [weatherIcon, setWeatherIcon] = useState("");

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const getWeatherIcon = (iconCode) => {
        return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    };

    const getWeather = async () => {
        const key = "082dce32b931ef01a168285780deab1d"; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

        try {
            let res = await axios.get(url);
            console.log("API Response:", res.data); 
            if (res.data && res.data.weather && res.data.weather.length > 0) {
                const weatherData = res.data;
                setWeather(weatherData);
                setWeatherIcon(getWeatherIcon(weatherData.weather[0].icon));
                setError(""); 
            } else {
                setError("No weather data found for the city.");
                setWeather(null);
                setWeatherIcon(""); 
            }
        } catch (err) {
            setError("City not found or API key issue. Please try again.");
            setWeather(null);
            setWeatherIcon(""); 
        }
    };

    return (
        <div className="h-[450px] w-full border-2 border-slate-600 rounded-lg p-4 bg-[#08090A] mx-auto">
            <div className="flex flex-col items-center">
                <input
                    required
                    placeholder="Enter City"
                    onChange={handleCityChange}
                    value={city}
                    className="mt-4 sm:mb-0 w-[280px] px-2 py-1 border rounded border-[#262626] text-slate-200 bg-[#08090A] focus:outline-none focus:border-[#4A4A4A] focus:ring-1 focus:ring-[#4A4A4A] transition duration-300 ease-in resize-none"
                />
                <button 
                    onClick={getWeather}
                    className="mt-8 px-4 py-2 bg-[#262626] text-white rounded-lg hover:bg-slate-200 hover:text-slate-900 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#4A4A4A] focus:ring-opacity-50"
                >
                    Get Weather
                </button>
                
                { weather ? (
                   <div className=" text-slate-200 text-center flex flex-col items-center space-y-6">
                   {weatherIcon && (
                     <img
                       src={weatherIcon}
                       alt="Weather Icon"
                       className="w-24 h-20 sm:w-32 sm:h-32 object-contain "
                     />
                   )}
                   <div className="text-sm sm:text-base space-y-2">
                     <p className="text-lg sm:text-xl font-semibold">
                       Temperature: <span className="text-[#ffbb00]">{weather.main.temp}°C</span>
                     </p>
                     <p className="text-lg sm:text-xl font-semibold">
                       Weather: <span className="text-[#00aaff] capitalize">{weather.weather[0].description}</span>
                     </p>
                     <p className="text-lg sm:text-xl font-semibold">
                       City: <span className="text-[#ff6f61]">{weather.name}</span>
                     </p>
                     <p className="text-lg sm:text-xl font-semibold">
                       Country: <span className="text-[#4caf50]">{weather.sys.country}</span>
                     </p>
                   </div>
                 </div>
                 
                ) : (
                    error && <p className="text-red-500 mt-4 text-center">{error}</p>
                )}
            </div>
        </div>
    );
};
