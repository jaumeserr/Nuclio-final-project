import React from "react";

export const InfoFlightsContext = React.createContext();

const initialState = {
    dpt_airport_iata: undefined,
    arr_airport_iata: undefined,
    dpt_datetime: undefined
};

const reducer = (state, action) => {
    switch (action.type) {
        case "DEPARTURE_IATA":
            //saveUserToLocalStorage(action.payload);
            return {
                ...state,
                dpt_airport_iata: action.payload.user
            };
        case "ARRIVAL_IATA":
            localStorage.clear();
            return {
                ...state,
                arr_airport_iata: action.payload.user
            };
        case "DEPARTURE_DATE":
            localStorage.clear();
            return {
                ...state,
                dpt_datetime: action.payload.user
            };
        default:
            return state;
    }
};

export const InfoFlightsContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const login = (loginPayload) => {
        dispatch({
            type: "LOGIN",
            payload: loginPayload
        })
    }
    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
    };

    return (
        <InfoFlightsContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </InfoFlightsContext.Provider>
    )
}