import { useParams , useHistory } from "react-router-dom";
import React from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useState , useEffect } from "react";

const Booking = props => {
    const { flight_id } = useParams();
    const [flight, setFlight] = useState({})
    const [user, setUser] = useState({})
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    // source: '',
    // destination: '',
    // departure: '',
    // arraival:'',
    // estimated_time:'',
    // seats:'',
    // type:''
    // })


    useEffect(() => {
        
        const instance = axios.create({
            baseURL: 'http://localhost:8000/api/',
            timeout: 1000,
            //headers: { 'authorization': 'Bearer ' + localStorage.getItem('user') },
        })
        instance.get(`/flight/${flight_id}`)
            .then(res => {
                //setIsCreated(true)
               
                setFlight(res.data.flight)
            })
            .catch(err => {
                const data = err.response.data;
                const errorMessages = [];
                if ("errors" in data) {
                    for (let field in data.errors) {
                        const validationError = data.errors[field];
                        errorMessages.push(validationError.message);
                    }
                }
                else {
                    // error msg when name is exist
                    errorMessages.push(err.response.data.error);
                }
                setErrors(errorMessages);
            })

        // instance.get(`/users/${localStorage.getItem('user_email').slice(1, localStorage.getItem('user_email').length - 1)}`)
        //     .then(res => setUser(res.data.user))
        //     .catch(err => console.log(err))
    }, [])
    

    return (
        <div style={{ marginTop: "40px" }}>
            <h3> {flight.source} <span style={{ 'fontSize': '40px' }}>&#8594;</span> {flight.destination}</h3>
            <div>airLine:{flight.airline}</div>
            <div>flight No. :{flight.flight_NO}</div>
            <div>price :{flight.price}</div>
            <div>from airport :{flight.departure_airport}</div>
            <div>to airport :{flight.arraival_airport}</div>
            <div>estimated_time:{flight.estimated_time}</div>
            {flight.arraival && <div>arraival date:{flight.arraival.slice(0, 10)},
                time: {flight.arraival.slice(11, flight.arraival.length - 5)}</div>}
            {flight.departure && <div>departure date: {flight.departure.slice(0, 10)},
                time: {flight.departure.slice(11, flight.departure.length - 5)}</div>}

            {/* checkbox or select or radios */}
            <Button onClick={e => history.push(`/payment/${flight._id}`)} variant="warning">checkout </Button>
        </div>
    )
}

export default Booking;
