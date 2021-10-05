import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,withRouter} from "react-router-dom";
import FilterByFloor from "./pages/Filter_by_floors";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path="/cubedots/home" component={Home}></Route>
          <Route exact path="/cubedots/building"></Route>
          <Route exact path="/cubedots/building/:floor" component={(props)=> <FilterByFloor {...props}/>}></Route>
          <Route exact path="/cubedots/building/:floor/:apartment_id"></Route>
          <Route exact path="/cubedots/location"></Route>
          <Route exact path="/cubedots/gallery"></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
