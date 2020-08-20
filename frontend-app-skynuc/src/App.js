import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import './App.css';
import './assets/fonts.css';
import FlightCard from './components/flightcard/flightCard.view';
import Login from './components/login/login.view';
import Register from './components/register/register.view';
import UserInfo from './components/userinfo/userInfo.view';
import Navbar from './components/navbar/navbar.view';
import { FLIGHT_LIST, LOGIN, REGISTER, USER_INFO, NAVBAR } from './routes/routes';
import FlightListPage from './pages/flightlistpage/flightlistpage.view';
import Home from './pages/home/home.view';

function App() {
    return (
        <Router>
            <div>
                {/* <FlightCard /> */}
                {/* <FlightListPage /> */}

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
                        <Route path={USER_INFO}>
                            <UserInfo />
                        </Route>
                        <Route path={NAVBAR}>
                            <Navbar />
                        </Route>
                    </Switch>
                </div>
            </div>   
        </Router>
    );
}

export default App;
