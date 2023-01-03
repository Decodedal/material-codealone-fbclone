import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rigthbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:'none', sm:"block"}}}>
      <Box position="fixed" width={350}>
      <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
      <AvatarGroup max={4} sx={{marginRight:"5rem"}}>
        <Avatar alt="kit cat" src='http://placekitten.com/g/200/300'/>
        <Avatar alt="kit cat" src='http://placekitten.com/g/400/300'/>
        <Avatar alt="kit cat" src='http://placekitten.com/g/200/400'/>
        <Avatar alt="kit cat" src='http://placekitten.com/g/200/600'/>
        <Avatar alt="kit cat" src='http://placekitten.com/g/200/600'/>
        <Avatar alt="kit cat" src='http://placekitten.com/g/200/600'/>
      </AvatarGroup>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Latest Photos
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={5} variant="quilted">
        <ImageListItem>
          <img
          src='http://placekitten.com/g/200/210'
          />
        </ImageListItem>
        <ImageListItem>
          <img
          src='http://placekitten.com/g/200/200'
          />
        </ImageListItem>
        <ImageListItem>
          <img
          src='http://placekitten.com/g/220/200'
          />
        </ImageListItem>
        <ImageListItem>
          <img
          src='http://placekitten.com/g/500/200'
          />
        </ImageListItem>
        <ImageListItem>
          <img
          src='http://placekitten.com/g/200/220'
          />
        </ImageListItem>
        <ImageListItem>
          <img
          src='http://placekitten.com/g/200/320'
          />
        </ImageListItem>
      </ImageList>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Latest Conversations
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="http://placekitten.com/g/200/320"/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="http://placekitten.com/g/260/320" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="http://placekitten.com/270/320" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
      </Box>
  )
}

export default Rigthbar