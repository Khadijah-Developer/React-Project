import React from 'react'
import { useParams,useHistory } from 'react-router-dom'
import axios from 'axios'
import Search from './Search'
import Button from 'react-bootstrap/Button';



const SearchResults = () => {
    const { from, to, date } = useParams()
    const [flights, setFlights] = React.useState([])
    const [errors, setErrors] = React.useState([]);
    const history = useHistory()

    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/flight/search`, { params: { source:from, destination:to, departure:date } })
            .then(res => {
                //setIsCreated(true)
                console.log(res.data)
                setFlights(res.data.flights)
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
    },[from])
    return (
        <div>
            <Search/>
            {flights && flights.map(f =>
                <div key={f._id} className="mt-3">
                    from: {f.source}, to: {f.destination}, date: {f.departure.slice(0, 10)}, time: {f.departure.slice(11, f.departure.length - 5)}
                    <Button onClick={e => history.push(`/book/${f._id}`)} variant="warning">Book </Button>
                </div>
            )}
            {!flights.length &&<h5 className='my-5'>No flights available</h5>}
        </div>
    )
}

export default SearchResults