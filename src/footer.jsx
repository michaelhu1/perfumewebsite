import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

function Footer() {
    return (
    <Box component="footer" sx={{bottom:0,position:"absolute",minWidth:"100%",left:0, textAlign:"center"}}>
      <Divider variant = 'fullWidth'/>
        <div>This is Pricings</div>
    </Box>
    )
  }
  export default Footer;