import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, setItems, handleFav }) {

  function handleDelete(deletedId) {
    const updatedItems = items.filter(item => item.id === deletedId ? false : true)
    setItems(updatedItems)
  }

  return (
    <main>
      <ul className="cards">
        {items.map(item =>{
          return (
            <ListingCard 
              key={item.id} 
              id={item.id} 
              image={item.image} 
              location={item.location} 
              description={item.description}
              itemFav={item.favorite}
              onDelete={handleDelete}
              handleFav={handleFav}
            />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
