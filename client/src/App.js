import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import AllData from './components/AllData';
import Allflights from './components/Allflights';
import RegisterLogin from './components/RegisterLogin';
import HomeTest from './components/HomeTest';
import CityFlights from './components/CityFlights'
import Booking from './components/Booking';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path='/'>
            <RegisterLogin />
          </Route>
          <Route exact path="/flights">
            <Allflights />
          </Route>

          <Route exact path="/home">
            <HomeTest />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/flights/:city">
            <CityFlights />
          </Route>

          <Route path="/book/:flight_id">
            <Booking />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
