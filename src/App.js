import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Stock from './Components/Stock'
import Dashboard from './Components/Dashboard'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Stock/:symbol" 
      render={(routerProps)=> <Stock {...routerProps} />}/>
      <Route path="/Dashboard">
        <Dashboard />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
