import React, { useState } from "react";
import "./App.css";
import SearchBar from "./search";
import Navbar from "./navbar";
import Hero from "./hero";
import Results from "./results"; 

function App() {
  const [data, setData] = useState(null);

  return (
    <div>
      <Navbar />
  
      <SearchBar setData={setData} />
      <Results data={data} />
      <Hero/> 
      {/* The rest of your app content */}
    </div>
  );
}

export default App;
