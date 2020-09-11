import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/login.view';
import Register from './components/register/register.view';
import UserProfile from './components/userProfile/userProfile.view';
import AdminUserProfile from './components/adminUserProfile/adminUserProfile.view';
import FlightListPage from './pages/flightListPage/flightListPage.view';
import Home from './pages/home/home.view';
import { ADMIN_USER_PROFILE, FLIGHT_LIST, LOGIN, REGISTER, USER_PROFILE } from './routes/routes';

function App() {
    return (
        <Router>
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
                <Route path={ADMIN_USER_PROFILE}>
                    <AdminUserProfile />
                </Route>
                <Route path={USER_PROFILE}>
                    <UserProfile />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
