//import logo from './logo.svg';
var React = require('react');
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import SideNav from "./Components/SideNav";
import MapView from "./Container/MapView";
//import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SideNav1, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <SideNav1
        onSelect={(_selected) => {
            // Add your code here
        }}
    >
        <SideNav1.Toggle />
        <SideNav1.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Charts
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                        Line Chart
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        Bar Chart
                    </NavText>
                </NavItem>
            </NavItem>
        </SideNav1.Nav>
    </SideNav1>
      <Switch>
        <Route exact path= "/">
          <MapView />
        </Route>
        <Route exact path= "/home">
          <MapView />
        </Route>
        <Route path="*"> 404 </Route>
      </Switch>
    </Router>
  );
}

export default App;
