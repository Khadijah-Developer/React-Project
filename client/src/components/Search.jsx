import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [flight, setFlight] = React.useState({
        source: '',
        destination: '',
        departure: '',
    })
    const [isCreated, setIsCreated] = React.useState(false)
    const [errors, setErrors] = React.useState([]);
    const history = useHistory()
    const [flights, setFlights] = React.useState([])

    const handleChange = (e) => {
        setIsCreated(false)
        setFlight({ ...flight, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(flight)
        axios.get(`http://localhost:8000/api/flight/search`, { params: { ...flight } })
            .then(res => {
                setIsCreated(true)
                console.log(res.data)
                setFlights(res.data.flights)
                //history.push('/')
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
    }
    console.log(flights)
    return (
        <div>
            <form className="form d-flex justify-content-evenly align-items-end" onSubmit={handleSubmit}>

                <div className=" mt-4">
                    <label className="form-label">from:</label>
                    <input className="form-control" value={flight.source} name="source" onChange={handleChange} />
                </div>
                <div className=" mt-4">
                    <label className="form-label">to:</label>
                    <input className="form-control" value={flight.destination} name="destination" onChange={handleChange} />
                </div>
                <div className=" mt-4">
                    <label className="form-label">Date:</label>
                    <input className="form-control" value={flight.departure} name="departure" onChange={handleChange} />
                </div>
                <div className=" mt-5">
                    <input className="btn btn-light " style={{ backgroundColor: 'skyblue' }} value="Search" type="submit" />
                </div>
            </form>

            {flights.map(f => 
                <div key={f._id}>
                    from: {f.source}, to: {f.destination}, date: {f.departure.slice(0,10)}, time: {f.departure.slice(11,f.departure.length-5)}
                </div>

            )}
        </div >
    )
}
export default Search