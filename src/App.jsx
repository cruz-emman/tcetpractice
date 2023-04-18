import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from './pages/index'

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          
          {/* Home Routes */}
          <Route path="/">
            <Route index  element={<Home />}/>
          </Route>

        

        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App