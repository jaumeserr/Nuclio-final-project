import Navbar from 'components/navbar/navbar.view';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminUserProfile from './components/adminUserProfile/adminUserProfile.view';
import LoginAndRegister from './components/loginAndRegister/loginAndRegister.view';
import Register from './components/register/register.view';
import UserProfile from './components/userProfile/userProfile.view';
import FlightListPage from './pages/flightListPage/flightListPage.view';
import Home from './pages/home/home.view';
import { ADMIN_USER_PROFILE, FLIGHT_LIST, LOGIN, REGISTER, USER_PROFILE, LOGIN_AND_REGISTER} from './routes/routes';

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
                <Route path={LOGIN}>
                    <LoginAndRegister />
                </Route>
                <Route path={REGISTER}>
                    <Register />
                </Route>
                <Route path={LOGIN_AND_REGISTER}>
                    <LoginAndRegister/>
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
