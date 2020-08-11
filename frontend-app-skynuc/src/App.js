import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import './App.css';
import './assets/fonts.css';
import FlightListPage from './pages/flightlistpage/flightlistpage.view';
import Home from './pages/home/home.view';
import { FLIGHT_LIST, HOME } from './routes/routes';

function App() {
    return (
        <Router>

            <SimpleReactLightbox>
                <Home/>
            </SimpleReactLightbox>

                <Switch>
                    <Route exact path={HOME}>
                        <Home />
                    </Route>
                    <Route path={FLIGHT_LIST}>
                        <FlightListPage />
                    </Route>
                </Switch>
                
        </Router>
    );
}

export default App;

// import FlightCard from './components/flightcard/flightcard.view'
