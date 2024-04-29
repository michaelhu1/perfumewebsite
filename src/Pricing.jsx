import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar  from './topbar'
import Container from '@mui/material/Container';


function Products() {
  return (
    <Container>
      <ResponsiveAppBar />
      <div>This is Pricings</div>
    </Container>
  )
}

export default Products;