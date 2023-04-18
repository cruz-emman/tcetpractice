import { Box } from '@mui/material'
import React from 'react'
import { Header, Navbar, MyCalendar } from '../components'

const Home = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <MyCalendar />
    </Box>
  )
}

export default Home