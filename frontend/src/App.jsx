import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  const beerFetch = () => {
    fetch("http://localhost:5000/beers")
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
      });
  };

  return (
    <div className="App">
      <Navbar />
      <button type="button" onClick={beerFetch}>
        Viens boire un coup !
      </button>
      {fetchedData.map((beer) => (
        <p key={beer.id}>
          {beer.name}
          {beer.ebc}
          {beer.srm}
          {beer.ibu}
          {beer.abv}
        </p>
      ))}
    </div>
  );
}

export default App;
