import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import AllData from './components/AllData';
import Allflights from './components/Allflights';
import RegisterLogin from './components/RegisterLogin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route exact path='/'>
            <RegisterLogin />
          </Route>
          <Route path="/flights">
            <Allflights />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
