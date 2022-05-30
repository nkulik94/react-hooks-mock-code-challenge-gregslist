import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, updateListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(listings => updateListings(listings))
  }, [])

  function handleDelete(l) {
    updateListings(listings.filter(listing => listing.id !== l.id))
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} onDelete={handleDelete} />
    </div>
  );
}

export default App;
