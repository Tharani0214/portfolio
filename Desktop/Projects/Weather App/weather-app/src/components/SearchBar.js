"use client";
import { useState } from "react";

const API_KEY = "ea770b5f686c5a88320aba6668f7bac1";
const SearchBar = ({ setWeather, setLoading, setError }) => {
    const [city, setCity] = useState("");
  
    const handleSearch = async () => {
      if (!city) {
        setError("Please enter a valid city name.");
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();
        const weatherData = {
          country: data.sys.country,
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
        };
        setWeather(weatherData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch weather data.");
      }
      setLoading(false);
    };
  
    return (
      <div>
       <input
  type="text"
  placeholder="Enter city"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="p-2 border-2 border-gray-300 rounded w-full text-center text-white bg-transparent"
/>

        <button onClick={handleSearch} className="bg-gray-700 text-white px-4 py-2 rounded mt-2">
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBar;