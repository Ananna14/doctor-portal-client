import React from 'react'
import chair from '../../../images/chair.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Typography, Button, Container} from '@mui/material'
import bg from '../../../images/bg.png'

const bannerBg = {
    background: `url(${bg})`,
   
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    // border:'1px solid red',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{...verticalCenter,textAlign: 'left'}} item xs={12} md={5}>
         <Box>
         <Typography varient="h4">
       Your New Smile <br/>
       Starts Here
         </Typography>
         <Typography varient="h6" sx={{my:5, fontSize:13, fontWeight:300,color:'gray'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic in saepe quasi, consequuntur rerum! Aut ducimus voluptate explicabo odio.
         </Typography>
         <Button sx={{mb:5}} style={{backgroundColor:'#5CE7ED'}}>Get Appointment</Button>
         </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{width: '350px'}} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
    )
}

export default Banner
