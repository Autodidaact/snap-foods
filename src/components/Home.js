import React, {useEffect, useState} from 'react';
import "../stylings/Home.css";
import SearchBar from './SearchBar';
import RestaurantsList from './RestaurantsList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
          if (input === '') return false;
          if(restaurant.neighborhood.toLowerCase().includes(input.toLowerCase()) || restaurant.cuisine_type.toLowerCase().includes(input.toLowerCase())) return true;
          return (input === restaurant.neighborhood) || (input === restaurant.cuisine_type)
        })
        setSearch((prev) => {
          return {...prev, result:filter}
        })
    }

  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <SearchBar onSearch={filterSearch} filteredData={search.result} setfilteredData={setSearch} placeholder="Enter a Location or cuisine..." />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <RestaurantsList result={search.result}/>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home;
