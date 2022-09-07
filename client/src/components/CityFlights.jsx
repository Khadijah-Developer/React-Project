import { useEffect, useState } from "react"
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CityFlights = props => {

    const { city } = useParams();
    const [flights, setFlights] = useState([]);
    const history = useHistory();



    const instance = axios.create({
        baseURL: 'http://localhost:8000/api/',
        timeout: 1000,
       // headers: { 'authorization': 'Bearer ' + localStorage.getItem('user') },
    })

    useEffect(() => {
        instance.get(`/flights/${city}`)
            .then(res => setFlights(res.data.flights))
            .catch(err => console.log(err))
        // instance.get(`/users/${localStorage.getItem('user_email').slice(1,localStorage.getItem('user_email').length-1)}`)
        // .then(res => setUser(res.data.user))
        // .catch(err => console.log(err))

    }, [])
    console.log(city)
    return (
        <>
            <div><h1>flights of {city}</h1></div>
            <div style={{ marginTop: "30px" }}>

                {flights.map((flight) =>
                    <h3 key={flight._id}> {flight.source} |  {flight.destination} | {flight.price} &nbsp;
                        <Button onClick={e => history.push(`/book/${flight._id}`)} variant="warning">Book </Button> <hr /> </h3>
                )}
                {/* if no flights available */}
                {!flights.length && <h3>No flights available</h3>}
            </div>

        </>
    )
}

export default CityFlights;