import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import Home from './pages/home/home.view';
import './App.css';
import './assets/fonts.css';
import FlightListPage from './pages/flightlistpage/flightlistpage.view';

function App() {
    return (
        <div>
            {/* <SimpleReactLightbox>
            <Home/>
            </SimpleReactLightbox> */}
            {/* <FlightCard /> */}
            <FlightListPage />
        </div>
    );
}

export default App;

// import FlightCard from './components/flightcard/flightcard.view'
