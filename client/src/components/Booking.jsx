import { useParams } from "react-router-dom";

const Booking = props => {
  
    const {flight_id} = useParams();

    return (
        <div style={{marginTop:"40px"}}>user want book flight with id : {flight_id}
        <h2>Show details and checkout btn</h2>
        
        </div>
    )
}

export default Booking;
