import React, {useEffect, useState} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea } from '@mui/material';
import { useParams } from "react-router-dom"





function RestaurantDetails() {
  const [eatry, setEatry] = useState(null)

  const {id} = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/restaurants/${id}`)
    .then(response => response.json())
    .then(eatry => setEatry(eatry))
}, [id])

if (!eatry) return <h2>Loading...</h2>

const { name, neighborhood, photograph, address, cuisine_type, operating_hours, reviews } = eatry;

  return (
    <div>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={photograph}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {neighborhood}
                </Typography>
                <Typography variant="p" color="text.secondary">
                <LocationOnIcon/>{address}
                </Typography>
                <Typography variant="p" color="text.secondary">
                {cuisine_type} 
                </Typography><Typography variant="div" color="text.secondary">
                {operating_hours.map(hour => <p key={hour}>{hour}</p>)} 
                </Typography><Typography variant="div" color="text.secondary">
                {reviews.map(review => <p key={review.name}>{review.comment}</p>)} 
                <LocationOnIcon/>{address} 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> 
        </Grid>      
      </Grid>  
    </div>
  )
}
export default RestaurantDetails;