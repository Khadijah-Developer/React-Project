import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
 
        <Switch>
          <Route exact path='/' 
          // element={}
          >
          </Route>
          <Route path="/new">
         
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
