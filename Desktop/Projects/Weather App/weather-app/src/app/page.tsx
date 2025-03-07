"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import "./globals.css";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen p-8">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center">
          Weather App
        </h1>
        <SearchBar setWeather={setWeather} setLoading={setLoading} setError={setError} />
        {loading && <p className="text-gray-300 text-lg animate-pulse mt-4">Loading...</p>}
        {error && <p className="text-red-500 text-lg mt-4 text-center">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}
