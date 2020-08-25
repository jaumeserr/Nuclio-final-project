import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import './App.css';
import './assets/fonts.css';
import { FLIGHT_LIST, LOGIN, REGISTER, USER_PROFILE } from './routes/routes';
import Login from './components/login/login.view';
import Register from './components/register/register.view';
import Navbar from './components/navbar/navbar.view';
import Home from './pages/home/home.view';
import FlightListPage from './pages/flightlistpage/flightlistpage.view';
import FlightCard from './components/flightcard/flightCard.view';
import UserProfileCard from './components/userProfileCard/userProfileCard.view';

function App() {

    return (
        <Router>
            <div>
                {/* <FlightCard /> */}
                {/* <FlightListPage /> */}
                {/* <UserProfileCard/> */}

                <div>
                    <Switch>
                        <Route exact path="/">
                            <SimpleReactLightbox>
                                <Home />
                            </SimpleReactLightbox>
                        </Route>
                        <Route path={LOGIN}>
                            <Login />
                        </Route>
                        <Route path={REGISTER}>
                            <Register />
                        </Route>
                        <Route path={FLIGHT_LIST}>
                            <FlightListPage />
                        </Route>
                        <Route path={USER_PROFILE}>
                            <UserProfileCard />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
