import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import './App.css';
import './assets/fonts.css';
import FlightCard from './components/flightcard/flightCard.view';
import Login from './components/login/login.view';
import Register from './components/register/register.view';
import FlightListPage from './pages/flightlistpage/flightlistpage.view';
import Home from './pages/home/home.view';
import { FLIGHT_LIST, HOME } from './routes/routes';

function App() {
    return (
        <Router>
            <div>
                {/* <FlightCard /> */}
                <FlightListPage />

                {/* <div>
                    <Switch>
                        <Route exact path="/">
                            <SimpleReactLightbox>
                                <Home />
                            </SimpleReactLightbox>
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register"> 
                            <Register />
                        </Route>
                        <Route path={FLIGHT_LIST}>
                            <FlightListPage />
                        </Route>
                    </Switch>
                </div> */}
            </div>   
        </Router>
    );
}

export default App;
