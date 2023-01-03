import { Avatar, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, EmojiEmotionsOutlined, Image, PersonAdd, SentimentDissatisfied, SentimentDissatisfiedOutlined, ThumbUp, ThumbUpOutlined, VideoCameraBack, VolunteerActivismOutlined} from '@mui/icons-material';
import { Box } from '@mui/system';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)(({ theme })=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px",
  }))

const Add = () => {
    const [open, setOpen] =useState(false)
  return (
    <>
    <Tooltip onClick={e=> setOpen(true)} title="Add" sx={{position:"fixed", bottom:20,left:{xs:"calc(41%)", sm:30}}}>
        <Fab color="primary" aria-label="add">
            <AddIcon/>
        </Fab>
    </Tooltip>
    <StyledModal
  open={open}
  onClose={e=> setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="background.default" p={3} color={"text.primary"} borderRadius={5}>
  <Typography variant='h6' color="gray" textAlign="center">Create post</Typography>
  <UserBox>
    <Avatar
    src='http://placekitten.com/400/300'
    sx={{width:30, height:30}}
    />
    <Typography fontWeight={500} variant="span">Kitty Jones</Typography> 
  </UserBox>
  <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind..."
          variant="standard"
        />
        <Stack direction="row" mt={2} mb={3} gap={1}>
            <EmojiEmotionsOutlined/>
            <Image color='secondary'/>
            <VideoCameraBack color='success'/>
            <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup variant='contained' fullWidth>
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add