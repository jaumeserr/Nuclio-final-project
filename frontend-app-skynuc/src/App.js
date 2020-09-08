import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/globalStyles';
import './App.css';
import Login from './components/login/login.view';
import Register from './components/register/register.view';
import UserProfileCard from './components/userProfileCard/userProfileCard.view';
import FlightListPage from './pages/flightListPage/flightListPage.view';
import Home from './pages/home/home.view';
import { FLIGHT_LIST, LOGIN, REGISTER, USER_PROFILE } from './routes/routes';

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    <Home />
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
        </Router>
    );
}

export default App;
