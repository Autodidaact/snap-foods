import React from 'react';
import Restaurant from './Restaurant';




function RestaurantsList({ result }) {
  
let data;
if(result){
  data = result || [];
} 
const listRestaurants = data.length > 0 ? data.map((item) => {
  return(    
          <Restaurant key={item.id} results={item}/>    
  )
}): null;

  return (
    <div>
      {listRestaurants}
    </div>
  )
}
export default RestaurantsList;

