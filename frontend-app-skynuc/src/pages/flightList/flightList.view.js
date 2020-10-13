import FlightCard from 'components/flightcard/flightCard.view';
import Loader from 'components/loader/loader.view';
import NoResults from 'components/noResults/noResults.view';
import useFetch from 'hooks/useFetch';
import React, {useState} from 'react';
import { useParams } from 'react-router';
import pluralizeStringIfNeeded from 'utils/pluralizeStringIfNeeded';
import styles from './flightList.module.css';
import SearchBar from "components/searchBar/searchBar.view";
import CheckBoxFilter from 'components/checkBoxFilter/checkBoxFilter.view';
import DepartureRange from 'components/departureRange/departureRange.view';
import PriceRange from 'components/priceRange/priceRange.view';
import Button from 'components/button/button.view';
import { useHistory, useLocation } from 'react-router';

const FlightList = () => {
    const { dpt, arr, date } = useParams();

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const { data, isLoading, hasEverLoadedData } = useFetch(`search/${dpt}/${arr}/${date}`, 'GET');

    const [startTime, setStartTime] = useState('7');
    const [endTime, setEndTime] = useState('18');
    const [startPrice, setStartPrice] = useState('150');
    const [endPrice, setEndPrice] = useState('300');
    const history = useHistory();

    const pushQueryStringToUrl = () => {
        history.push({
            search: `?startTime=${startTime}&endTime=${endTime}&minPrice=${startPrice}&maxPrice=${endPrice}`
        })   
    }

    return (
        <div className={styles.__container}>
            <div className={styles.__aside}>
                <DepartureRange startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime} />
                <PriceRange startPrice={startPrice} setStartPrice={setStartPrice} endPrice={endPrice} setEndPrice={setEndPrice} />
                <CheckBoxFilter/>
                <Button content={'Apply Filters'} color={'blue__outline'} action={pushQueryStringToUrl} />
            </div>
            <div className={styles.__center}>
                <SearchBar />
                {!hasEverLoadedData && isLoading && <Loader />}

                {/* FIXME: "hasEverLoadedData && !isLoading" --> 3 different cases! improve syntaxis, but how? */}
                {hasEverLoadedData && !isLoading && (
                    <p className={styles.__foundText}>
                        We have found {pluralizeStringIfNeeded(data.length, 'flight')} for you
                    </p>
                )}
                {hasEverLoadedData && !isLoading && data.length === 0 && <NoResults />}
                {hasEverLoadedData &&
                    !isLoading &&
                    data.length !== 0 &&
                    data.map((flight) => {
                        return (
                            <FlightCard
                                key={flight.id}
                                dpt_datetime={flight.dpt_datetime}
                                arr_datetime={flight.arr_datetime}
                                price_eur={parseFloat(flight.price_eur)}
                                dpt_airport_iata={flight.flight_const.dpt_airport_iata}
                                arr_airport_iata={flight.flight_const.arr_airport_iata}
                                logo_url={flight.flight_const.airline.logo_url}
                                airline_two_letter_code={
                                    flight.flight_const.airline_two_letter_code
                                }
                            />
                        );
                    })}
            </div>
            <div className={styles.__aside}>RIGHT</div>
       </div>
    );
};

export default FlightList;
