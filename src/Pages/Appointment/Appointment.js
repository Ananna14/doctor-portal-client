import React from 'react'
import Exceptional from '../Exceptional/Exceptional'
import Navigation from '../Shared/Navigation/Navigation'
import AppointmentHeade from './Appointment/AppointmentHeader/AppointmentHeade'
import AvailabeAppointment from './Appointment/AvailabeAppointment/AvailabeAppointment'

const Appointment = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeade value={value} setValue={setValue}></AppointmentHeade>
            <AvailabeAppointment value={value}></AvailabeAppointment>
         <Exceptional></Exceptional>
        </div>
    )
}

export default Appointment
