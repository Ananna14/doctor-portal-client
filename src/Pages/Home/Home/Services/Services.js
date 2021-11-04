import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../service/Service';
import fluoride from '../../../../images/fluoride.png'
import cavity from '../../../../images/cavity.png'
import Typography from '@mui/material/Typography';
import whitening from '../../../../images/whitening.png'

const services = [
    {
        name:'Fluoride Yreatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius quam tempora pariatur incidunt molestiae repudiandae nulla excepturi non dignissimos?',
        img:fluoride
    },
   {
       name: 'Cavity Filling',
       description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo nesciunt suscipit fuga adipisci harum ab dicta corporis esse enim?',
       img:cavity
   },
   {
       name:'Teeth whitening',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestias aliquid mollitia facilis, voluptatibus quaerat quam autem. Ad, culpa harum!',
       img:whitening
   }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ fontWeight: 500, m:2, color:'success.main' }} variant="h6" component="div">
         OUR SERVICES
        </Typography>
      <Typography sx={{ fontWeight: 600, m:2}} variant="h4" component="div">
         Services we Provied
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
           services.map(service => <Service
            key={service.name}
            service={service}
            ></Service>)
       }
      </Grid>
      </Container>
    </Box>
    )
}

export default Services
