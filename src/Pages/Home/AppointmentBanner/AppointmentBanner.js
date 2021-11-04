import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor:'rgba(45, 58, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
          style={{width:400, marginTop:'-110px'}}
          src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{
            display:'flex',
             justifycontent:'flex-start',
             alignItem: 'center',
              textAlign: 'left'
              }}>
        <Box>
        <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED'}}>
         Appoinment
        </Typography>
        <Typography variant="h4" component="div" sx={{mb:5}} style={{color:'white'}}>
        Make an Appoinment Today
        </Typography>
        <Typography variant="h4" sx={{mb:5}} style={{color:'white', fontSize: 14, fontWeight: 300}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Eligendi corporis temporibus optio inventore fugiat doloribus odit non veritatis suscipit quisquam.
        </Typography>
        <Button sx={{mb:5}} style={{backgroundColor:'#5CE7ED'}} variant="contained">Learn More</Button>
        </Box>
        
        </Grid>
      </Grid>
    </Box>
    )
}

export default AppointmentBanner
