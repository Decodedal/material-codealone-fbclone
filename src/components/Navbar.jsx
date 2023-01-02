
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import BalanceIcon from '@mui/icons-material/Balance';
import { display, padding } from '@mui/system';

import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({ theme })=>({
  backgroundColor:"white",
  padding:'0 10px',
  borderRadius:theme.shape.borderRadius,
  width:"40%",
}))

const IconsBox = styled(Box)(({ theme })=>({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}))

const UserBox = styled(Box)(({ theme })=>({
  display:"flex",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}))

const Navbar = () => {
  const[open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant='h6'sx={{display:{xs:"none",sm:"block"}}}>Dallas Book</Typography>
      <BalanceIcon sx={{display:{xs:"block",sm:"none"}}}/>
      <Search> <InputBase placeholder='search...'/>  </Search>
      <IconsBox>
        <Badge badgeContent={4} color="error">
          <MailIcon color="action"/>
        </Badge>
        <Badge badgeContent={2} color="error">
          <Notifications color='action'/>
        </Badge>
        <Avatar sx={{width:30, height:30}} src='http://placekitten.com/300/300'
        onClick={e=> setOpen(true) }
        />
      </IconsBox>
      <UserBox>
      <Avatar sx={{width:30, height:30}} src='http://placekitten.com/300/300'
      onClick={e=> setOpen(true)}
      />
      <Typography variant='span'>John</Typography>
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar