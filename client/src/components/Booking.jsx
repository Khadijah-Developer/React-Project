import { useParams, useHistory } from "react-router-dom";
import React from "react";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import './css/booking.css'
import SeatMap from "./Seatmap";
const Booking = props => {
  const { flight_id } = useParams();
  const [flight, setFlight] = useState({})
  const [user, setUser] = useState({})
  const [errors, setErrors] = useState([]);
  const history = useHistory()
  const [ticket, setTicket] = useState({
    seat: '',
    cabin_class: '',
    flight: '',
    user: '',
  })



  useEffect(() => {
    console.log(flight_id)
    const instance = axios.create({
      baseURL: 'http://localhost:8000/api/',
      timeout: 1000,
      //headers: { 'authorization': 'Bearer ' + localStorage.getItem('user') },
    })
    instance.get(`/flight/${flight_id}`)
      .then(res => {
        //setIsCreated(true)
        console.log(res.data)
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
    if (localStorage.getItem('user_email'))
      instance.get(`/users/${localStorage.getItem('user_email').slice(1, localStorage.getItem('user_email').length - 1)}`)
        .then(res => setUser(res.data.user))
        .catch(err => console.log(err))
  }, [])

  const handleTicket = (e) => {
    setTicket({ ...ticket, flight: flight, [e.target.name]: e.target.value })
  }
  console.log(ticket)
  return (
    <>
      {/* <div style={{ marginTop: "40px" }}>user want book flight with id : {flight_id}
            <h3> {flight.source} <span style={{ 'font-size': '40px' }}>&#8594;</span> {flight.destination}</h3>
            <div></div>
            <div>flight No. :{flight.flight_NO}</div>
            <div>price :{flight.price}</div>
            <div>airport :{flight.departure_airport}</div>
            <div>estimated_time:{flight.estimated_time}</div>
            {flight.arraival && <div>arraival date:{flight.arraival.slice(0, 10)},
                time: {flight.arraival.slice(11, flight.arraival.length - 5)}</div>}
            {flight.departure && <div>departure date: {flight.departure.slice(0, 10)},
                time: {flight.departure.slice(11, flight.departure.length - 5)}</div>}

            {/* checkbox or select or radios 
         <div>cabin_class:{flight.cabin_class}</div>
        </div> */}
      <div className="container d-flex justify-content-between col-9">
        <div className="card m-4 w-100">
          <div className="card-header d-flex justify-content-between colorBG">
            <h4>{flight.airline}</h4>
            <p>flight No. :{flight.flight_NO}</p>
          </div>
          <div className="card-body  d-flex flex-column">
            <div className="card-title title d-flex flex-row ">
              <h3>{flight.source}</h3>
              <span style={{ fontSize: "40px" }}>&#8594;</span>
              <h3>{flight.destination} </h3>
            </div>
            <div className="d-flex flex-row">
              <div id="circles flex-column">
                <div className="circle"></div>
                {/* <div className="circle2"></div> */}
                <div className="circle2"></div>
                <div className="circle2"></div>
                <div className="circle2"></div>
                <div className="circle2"></div>
                <div className="circle2"></div>
                <div className="circle2"></div>
                <div className="circle2"></div>
                <div className="circle"></div>
              </div>
              <div className="d-flex flex-column justify-content-between">
                {/* time and and airport name */}
                <div className="mx-3">
                  <h6 style={{padding:'0px',margin:'0px',textAlign:'left'}}>{flight.departure_airport}</h6>
                </div>
                <div className="mx-5">
                  <h6 style={{padding:'0px',margin:'0px',textAlign:'left'}}>&#9992; {flight.estimated_time}</h6>
                </div>
                <div className="mx-3" >
                  <h6 style={{padding:'0px',margin:'0px',textAlign:'left'}}>{flight.arraival_airport}</h6>
                </div>
              </div>

            </div>

            <div className="d-flex justify-content-between">
              <div className="ms-4 mt-2">
                <p>Seat No: {ticket.seat}</p>
              </div>
              <div className="d-flex">
                <div className="p-2 mx-4"><h4>{flight.price}SAR</h4></div>
                <Button onClick={e => history.push(`/payment/${flight._id}`)} variant="warning">Checkout </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-4 p-2 w-50">
          <SeatMap seat={ticket.seat} onClick={handleTicket} />
        </div>
      </div>

    </>
  );
};

export default Booking;
