import React from 'react'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../Pages/Appointment/BookingModal/BookingModal'

const Booking = ({booking, value}) => {
    const {name, time, space} = booking;
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{py:5}}>
          <Typography sx={{ color: 'info.main', fontWight: 600}} variant="h5" component="div">
         {name}
        </Typography>
          <Typography variant="h6" component="div" sx={{mb:5}}>
         {time}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
        {space} SPACES AVAILABLE
      </Typography>
      <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
          </Paper>
         </Grid>
         <BookingModal value ={value} booking={booking} open={open} handleClose={handleClose}></BookingModal>
        </>
    )
}

export default Booking
