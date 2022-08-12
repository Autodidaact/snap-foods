import React, {useEffect, useState} from 'react';
import "./Home.css";
import SearchBar from './SearchBar';
import RestaurantsList from './RestaurantsList';

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [search, setSearch] = useState({
    result: []
  })
    
    useEffect(() => {
        fetch("http://localhost:3000/restaurants")
        .then(response => response.json())
        .then(restaurants => setRestaurants(restaurants))
    }, [])

    function filterSearch(input){
    const filter = restaurants.filter((restaurant) => {
          if(restaurant.neighborhood.toLowerCase().includes(input.toLowerCase()) || restaurant.cuisine_type.toLowerCase().includes(input.toLowerCase())) return true;
          return (input === restaurant.neighborhood) || (input === restaurant.cuisine_type)
        })
        setSearch((prev) => {
          return {...prev, result:filter}
        })
    }

  return (
    <div className="App">
      <SearchBar onSearch={filterSearch} filteredData={search.result} setfilteredData={setSearch} placeholder="Enter a Location or cuisine..." />
      <RestaurantsList result={search.result}/>
    </div>
  )
}

export default Home;
