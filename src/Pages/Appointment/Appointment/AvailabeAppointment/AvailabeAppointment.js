import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import Booking from '../../../../Booking/Booking'

const AvailabeAppointment = ({value}) => {
    const bookings  = [
        {
            id:1,
            name: 'Teeth Orthodonics',
            time: '08.00 Am - 09.00 AM',
            space: 10,
        },
        {
            id:2,
            name: 'Cosmetic Dentistry',
            time: '08.00 Am - 09.00 AM',
            space: 8,
        },
        {
            id:3,
            name: 'Teeth Cleaning',
            time: '10.00 Am - 11.00 AM',
            space: 9,
        },
        {
            id:4,
            name: 'Cavity Protection',
            time: '11.00 Am - 12.00 PM',
            space: 5,
        },
        {
            id:5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            space: 10,
        },
        {
            id:6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            space: 10,
        }
    ]
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', my:5}}>Avilable Appointments on {value.toDateString()}</Typography>
            <Grid container spacing={2}>
           {
               bookings.map(booking=><Booking
               key={booking.id}
               booking={booking}
               value={value}
               ></Booking>)
           }
  
             </Grid>
        
        </Container>
    )
}

export default AvailabeAppointment
