import React, { useState } from "react";
import "../stylings/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function SearchBar({ placeholder, onSearch, filteredData ,setfilteredData }) {
  /* const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
 */
  
  const [searchInput, setSearchInput] = useState("");


    function handleInput(event){
      const searchWord = event.target.value;
      setSearchInput(searchWord)
    }

    function handleKeyPress(event){
      if (event.key === "Enter"){
        onSearch(searchInput)
      
      }
    }
    function handleClick(){
      onSearch(searchInput);
    }
    function clearInput(){
      setSearchInput("");
      setfilteredData(() => {
        return {result: []}
      });
    }
    
    return (
      <div className = "location_wrapper">
        <div className = "location_search"></div>
          <h2 className = "title">Find Restaurants and Eateries Around You
            </h2>

          <div className = "location_search_box">
            <input 
              type = "text" 
              className = "search_control"
              placeholder="Enter your location"
              value={searchInput}
              onChange={handleInput}
              onKeyPress={handleKeyPress}  />
            <button
             type = "submit"
              className = "search_btn btn"
               onClick={handleClick}>
                  <i className = "fas fa-search"></i>
            </button>
          </div>
        </div>
      

     
    );
}

export default SearchBar;


 {/* <Container>
        <Row>
          <Col>
            <div className="searchInputs">
              <h2 className="title">Find Restaurants and Eateries Around You</h2>
              <input
                type="text"
                value={searchInput}
                placeholder={placeholder}
                onChange={handleInput}
                onKeyPress={handleKeyPress}
                />
              
                <div className="searchIcon">
                  {filteredData.length === 0 ? (
                    <SearchIcon onClick={handleClick}/>
                  ) : (
                    <CloseIcon id="clearBtn" onClick={clearInput} />
                  )}
                </div>
              </div>
            </Col>
          </Row>
        
          
      </Container> */}
