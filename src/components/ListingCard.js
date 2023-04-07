import React, { useState } from "react";

function ListingCard({ id, description, image, location, onDelete, handleFav, itemFav }) {
  const [fav, setFav] = useState(itemFav)

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => onDelete(id))
  }

  function handleFavToggle() {
    setFav(fav => !fav)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'favorite': fav}),
    })
    .then(response => response.json())
    .then(data => handleFav(data))
  }

  return (
    <li className="card" id={id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={handleFavToggle}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavToggle}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
