import { Box } from '@mui/material'
import React from 'react'
import TUALOGO from '../assets/logo.png'
const Navbar = () => {
  return (
    <Box sx={{height:'70px', boxShadow: 3, display: 'flex', justifyContent: 'center', p: 4, alignItems:'center'}}>
        <Box component="img" sx={{ width: '300px'}} src={TUALOGO} />
    </Box>
  )
}

export default Navbar