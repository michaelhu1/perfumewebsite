import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ResponsiveAppBar  from './topbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import mainimage from "./perfume-product-images.jpg";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Carousel from 'react-material-ui-carousel';
import { Card, CardContent, CardMedia } from '@mui/material';
import Footer from './footer.jsx';

function Item(props)
{
    return (
        <Card>
            <CardContent>
              <div><img height="500" src={props.item.image}/></div>
              <div>{props.item.description}</div>
              </CardContent>
        </Card>
    )
}

function App() {
  var items = [
    {
        image: mainimage,
        description: "Probably the most random thing you have ever seen!"
    }
]
  return (
    <Container sx={{minWidth:1200,minHeight:"100vh",padding:0}} >
    
      <ResponsiveAppBar />
      <Grid container spacing={2} >
        <Grid item xs={12}>
        <Carousel>
           {
            items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Newest Release
          </Typography>
          <Divider variant = 'fullWidth'/>
        </Grid>

      </Grid>
      <Footer></Footer>
    </Container>
  )
}

export default App;