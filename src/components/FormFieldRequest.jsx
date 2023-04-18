import { Box } from '@mui/material'
import React from 'react'
import LiveStreaming from './services/LiveStreaming'
import ServicesRequest from './services/ServicesRequest'
import ZoomRequest from './services/ZoomRequest'

const FormFieldRequest = ({type}) => {
  return (
    
    <Box>
      {type === "man" && (
        <Box>
          <ServicesRequest />
        </Box>
      )}


      {type === "zoom" && (
        <Box>
         <ZoomRequest />
        </Box>
      )}


      {type === "live" && (
        <Box>
          <LiveStreaming />
        </Box>
      )}
    </Box>
  )
}

export default FormFieldRequest