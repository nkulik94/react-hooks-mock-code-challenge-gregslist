import React, { useState } from "react";

function ListingCard( { listing } ) {

  const [favorited, updateFavorite] = useState(false)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={() => updateFavorite(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => updateFavorite(true)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
