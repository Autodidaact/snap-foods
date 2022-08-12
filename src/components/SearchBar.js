import React, { useState } from "react";
import "../stylings/SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


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
    onSearch(searchInput)
  }

  const clearInput = () => {
    setSearchInput("");
    setfilteredData(() => {
      return {result: []}
    });
  }
  return (
    <div className="search">
      <div className="searchInputs">
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
        
    </div>
  );
}

export default SearchBar;
/*placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        /> */