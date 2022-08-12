import React from 'react';
import Restaurant from './Restaurant';

function RestaurantsList({ result }) {
  
/* let data;
if(result){
  data = result || [];
} */ 
const listRestaurants = result.map((item) => {
  return(
    <Restaurant key={item.id} results={item}/>
  )
})
  return (
    <div>
      {listRestaurants}
    </div>
  )
}
export default RestaurantsList;

/*<div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )} */