import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar  from './topbar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import image from "./grey-square.jpg"
import Typography from '@mui/material/Typography';



function Products() {
  return (
    <Container sx={{minWidth:1200}}>
      <ResponsiveAppBar />
      <Grid container spacing={2} >
        <Grid item xs={6}>
          <img height="600" width="500"src={image}></img>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="h6" sx={{marginTop:10}}>
          hellowkjhdkjuagdkwajdgwjkhagdjhagdjhaw
          gdjkawgdjhgwdjhkawgdjkgkjyawdg
        </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Products;