import AdminUserLogin from 'components/adminUserLogin/adminUserLogin.view';
import Navbar from 'components/navbar/navbar.view';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminUserProfile from './components/adminUserProfile/adminUserProfile.view';
import FlightList from './pages/flightList/flightList.view';
import Home from './pages/home/home.view';
import { ADMIN_USER_LOGIN, ADMIN_USER_PROFILE, FLIGHT_LIST } from './routes/routes';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path={FLIGHT_LIST}>
                    <FlightList />
                </Route>
                <Route path={ADMIN_USER_LOGIN}>
                    <AdminUserLogin />
                </Route>
                <Route path={ADMIN_USER_PROFILE}>
                    <AdminUserProfile />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
