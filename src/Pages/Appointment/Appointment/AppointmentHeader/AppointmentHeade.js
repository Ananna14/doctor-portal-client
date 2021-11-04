import React from 'react'
import { Container, Grid } from '@mui/material'
import chair from '../../../../images/chair.png'
import Clender from '../../../Shared/Calender/Clender'

const AppointmentHeade = ({value, setValue}) => {
    // const [value, setValue] = React.useState(new Date());
    
    return (
        <Container>
        <Grid container spacing={2}>
<Grid item xs={12} md={6}>
<Clender value={value} setValue={setValue}></Clender>
</Grid>
<Grid item xs={12} md={6}>
<img style={{width:'100%'}} src={chair} alt="" />
</Grid>
</Grid>
    </Container>
    )
}

export default AppointmentHeade
