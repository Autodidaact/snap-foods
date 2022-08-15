import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea } from '@mui/material';
import "../stylings/SearchBar.css"
import { Link } from "react-router-dom"



function Restaurant({ results }) {
  return (
    <div className = "location_result">
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
          <CardActionArea component={Link} to={`/RestaurantDetails/${results.id}`}>
            <CardMedia
              component="img"
              height="160"
              image={results.photograph}
              alt={results.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {results.name}
              </Typography>
              <Typography variant="ps" color="text.secondary">
               <LocationOnIcon/>{results.address} 
              </Typography>
              <Typography gutterBottom variant="a" component="div">
                <Link to={`/Restaurant/${results.id}`}></Link>
              </Typography>
            </CardContent>
          </CardActionArea>
         
        </Card>  
      </Grid>      
    </Grid> 
      
    </div>
  )
}
export default Restaurant;