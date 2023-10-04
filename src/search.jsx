import React, { useState, useEffect } from "react";
import axios from "axios";
import rateLimit from "axios-rate-limit";

const axiosWithRateLimit = rateLimit(axios.create(), {
  maxRequests: 2,
  perMilliseconds: 1000,
});

const placeholders = [
  "Search for restaurants",
  "Search for parks",
  "Search for cafes",
  "Search for bakeries",
  "Search for cleaners",
  "Search for grocery stores",
];

const Search = ({ setData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      return; // Prevent empty searches
    }

    setIsLoading(true);

    axiosWithRateLimit
      .get("https://local-business-data.p.rapidapi.com/search", {
        headers: {
          'X-RapidAPI-Key': '4cd736907dmshfa254564ad472f9p132f91jsne3bcc36c9f95',
          'X-RapidAPI-Host': 'local-business-data.p.rapidapi.com'
        },
        params: {
          query: searchQuery,
          limit: "30",
          zoom: "13",
          language: "en",
          region: "us",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        placeholder={placeholders[currentPlaceholderIndex]}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "14px",
          marginRight: "10px",
          border: "2px solid black",
          borderRadius: "20px",
          fontSize: "16px",
          width: "500px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          outline: "none",
          backgroundColor: "white",
          color: "black",
        }}
      />
      <button
        onClick={handleSearch}
        className={`px-5 py-4 rounded-full font-semibold transition-colors font-montserrat ${
          isLoading
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-pink-500 text-black hover:bg-pink-600 cursor-pointer"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default Search;
