import React from "react";
import { Link , useHistory} from "react-router-dom";
import { useState } from "react";
import axios from "axios";




const Register = () => {
    const [user, setUser] = useState({
        nameUser: "",
        email: "",
        password:"",
        confirmPassword:""
      });

      const history = useHistory();
      const [userCreated, setUserCreated] = useState(false);
      const [errors, setErrors] = useState([]);

      function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value });
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        setUserCreated(false);
        setErrors([]);
        axios
          .post("http://localhost:8000/api/signup", user)
          .then((response) => {
            setUserCreated(true);
            console.log(response)
            history.push("/")
          })
          .catch((err) => {
            console.log("this err first:" + err)
            console.log("this err first:" + err.message)
            console.log("this err second:" + err.response.data)
            const data = err.response.data;
            const errorMessages = [];
            if ("errors" in data) {
              for (let field in data.errors) {
                const validationError = data.errors[field];
                errorMessages.push(validationError.message);
              }
            }
            setErrors(errorMessages);
          });
      }

      function handleSubmitLogin(event) {
        event.preventDefault();
        // setUserCreated(false);
        setErrors([]);
        axios
          .post("http://localhost:8000/api/login", user)
          .then((response) => {
            // setUserCreated(true);
            history.push("/")
          })
          .catch((err) => {
              console.log(err)
              console.log( err.response.data)
            const data = err.response.data;
            const errorMessages = [];
            if ("errors" in data) {
              for (let field in data.errors) {
                const validationError = data.errors[field];
                errorMessages.push(validationError.message);
              }
            }
            setErrors(errorMessages);
          });
      }

    return (
      <div >
          <div>
      {errors.map((errorMessage, index) => (
        <div key={index}>Error: {errorMessage}</div>
      ))}
      {userCreated && <div>User has been successfully created</div>}
          </div>
          <div > 
              <h3>Register</h3>
              <form onSubmit={handleSubmit} {...user}>

<div>
  <label>Name:</label>
  <input name="nameUser" value={user.nameUser} onChange={handleChange} />
</div>


<div>
  <label>email:</label>
  <input name="email" value={user.email} onChange={handleChange} />
</div>


<div>
  <label>password:</label>
  <input name="password" value={user.password} onChange={handleChange} />
</div>

<div>
  <label>confirmPassword:</label>
  <input name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
</div>

<div>
<button type="submit" color="secondary" variant="contained" >Submit</button>
  <button color="secondary" variant="contained" ><Link to="/">Cancel</Link></button>  
</div>

             </form>
          </div>


           <div>





               <h3>Login</h3>
               <div>
      {errors.map((errorMessage, index) => (
        <div key={index}>Error: {errorMessage}</div>
      ))}
          </div>
               <form onSubmit={handleSubmitLogin} {...user}>
              
              <div>
                <label>email:</label>
                <input name="email" value={user.email} onChange={handleChange} />
              </div>
              
              
              <div>
                <label>password:</label>
                <input name="password" value={user.password} onChange={handleChange} />
              </div>
              
              <div>
              <button type="submit" color="secondary" variant="contained" >Submit</button>
                <button color="secondary" variant="contained" ><Link to="/">Cancel</Link></button>  
              </div>
              
             </form>
           </div>
      </div>
    );
  };
  
  export default Register;
  