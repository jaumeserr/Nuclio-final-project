import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SimpleReactLightbox from 'simple-react-lightbox';
import './App.css';
import './assets/fonts.css';
import FlightListPage from './pages/flightlistpage/flightlistpage.view';
import Home from './pages/home/home.view';
import Login from './components/login/login.view';
import Register from './components/register/register.view';
import Navbar from './components/navbar/navbar.view';
// import { FLIGHT_LIST, HOME } from './routes/routes';


function App() {
    return (
        <Router>
            <div>
                {/* <Home /> */}

                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register"> 
                            <Register />
                        </Route>
                        <Route path="/flights">
                            <FlightListPage />
                        </Route>
                    </Switch>
                </div>
            </div>   
        </Router>
    );
}

export default App;

// import FlightCard from './components/flightcard/flightcard.view'
