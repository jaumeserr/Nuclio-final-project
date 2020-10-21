import React, {useState, useEffect} from "react";

export const InfoFlightsContext = React.createContext();

const initialState = {
    dptAirportIata: undefined,
    arrAirportIata: undefined,
    dptAirportCityName: undefined,
    arrAirportCityName: undefined,
    dptDatetime: undefined
};

const reducer = (state, action) => {
    switch (action.type) {
        case "DEPARTURE_IATA":
            return {
                ...state,
                dptAirportIata: action.data.iata,
                dptAirportCityName: action.data.cityName,
            };
        case "ARRIVAL_IATA":
            return {
                ...state,
                arrAirportIata: action.data.iata,
                arrAirportCityName: action.data.cityName,

            };
        case "DEPARTURE_DATE":
            return {
                ...state,
                dptDatetime: action.dptTime,
            };
        default:
            return state;
    }
};

export const InfoFlightsContextProvider = ({ children }) => {
    const [ state, dispatch ] = React.useReducer(reducer, initialState);

    return (
        <InfoFlightsContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </InfoFlightsContext.Provider>
    )
}