import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box flex={1} p={2} bgcolor="red" sx={{display:{xs:'none', sm:"block"}}}>Sidebar</Box>
  )
}

export default Sidebar