CREATE TABLE IF NOT EXISTS flight_consts
(
    flight_num                  CHAR(4)     NOT NULL,
    airline_two_letter_code     CHAR(2)     NOT NULL,
    dpt_airport_iata            CHAR(3)     NOT NULL,
    arr_airport_iata            CHAR(3)     NOT NULL,

    PRIMARY KEY (flight_num),

    INDEX (airline_two_letter_code),
    INDEX (dpt_airport_iata),
    INDEX (arr_airport_iata),

    CONSTRAINT flight_consts_airports_iata_dpt_fk
        FOREIGN KEY (dpt_airport_iata) REFERENCES airports (iata),
    CONSTRAINT flight_consts_airports_iata_arr_fk
        FOREIGN KEY (arr_airport_iata) REFERENCES airports (iata),
    CONSTRAINT flight_consts_airlines_two_letter_code_fk
        FOREIGN KEY (airline_two_letter_code) REFERENCES airlines (two_letter_code)
);
