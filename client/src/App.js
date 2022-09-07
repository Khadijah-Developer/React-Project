import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import AllData from './components/AllData';
import Allflights from './components/Allflights';
import RegisterLogin from './components/RegisterLogin';
import HomeTest from './components/HomeTest';
import CityFlights from './components/CityFlights'
import Booking from './components/Booking';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>

          <Route exact path='/'>
            <RegisterLogin />
          </Route>

{/* home mariam */}
          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path="/flights">
            <Allflights />
          </Route>


  {/* bshayer Test list of cities */}
          <Route exact path="/hometest">
            <HomeTest />
          </Route>
    
          <Route exact path="/flights/:city">
            <CityFlights />
          </Route>

          <Route path="/book/:flight_id">
            <Booking />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
