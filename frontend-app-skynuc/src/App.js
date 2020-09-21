import AdminUserLogin from 'components/adminUserLogin/adminUserLogin.view';
import Navbar from 'components/navbar/navbar.view';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminUserProfile from './components/adminUserProfile/adminUserProfile.view';
import UserProfile from './components/userProfile/userProfile.view';
import FlightListPage from './pages/flightListPage/flightListPage.view';
import Home from './pages/home/home.view';
import { ADMIN_USER_LOGIN, ADMIN_USER_PROFILE, FLIGHT_LIST, USER_PROFILE } from './routes/routes';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path={FLIGHT_LIST}>
                    <FlightListPage />
                </Route>
                {/* <Route path={USER_LOGIN_AND_REGISTER}>
                    <UserLoginAndRegister />
                </Route> */}
                <Route path={USER_PROFILE}>
                    <UserProfile />
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
