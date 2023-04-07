import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const searchedItem = items.filter(item => search === item.description ? true : false)

  function handleFav(favItem){
    console.log(favItem)
    const updatedItems = items.map(item => item.id === favItem.id ? favItem : item)
    setItems(updatedItems)
  }

  return (
    <div className="app">
      <Header searchText={search} setSearchText={setSearch} />
      <ListingsContainer items={search === '' ? items : searchedItem} setItems={setItems} handleFav={handleFav} />
    </div>
  );
}

export default App;
