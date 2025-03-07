const WeatherCard = ({ weather }) => {
    if (!weather) return null;
    const { country, city, temperature, description } = weather;
  
    return (
      <div className="flex justify-center items-center w-full mt-4">
        <div className="bg-blue-100 p-6">
          <h2 className="text-2xl font-bold text-black">{city}, {country}</h2>
          <p className="text-lg mt-2 text-black">Temperature: <span className="font-semibold">{temperature}°C</span></p>
          <p className="text-lg mt-1 text-black">Description: <span className="italic">{description}</span></p>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;