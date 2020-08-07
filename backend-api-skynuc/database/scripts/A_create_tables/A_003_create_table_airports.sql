CREATE TABLE IF NOT EXISTS airports
(
    iata            CHAR(3)         NOT NULL,
    name            VARCHAR(255)    NOT NULL,
    city_id         INTEGER         UNSIGNED NOT NULL,

    PRIMARY KEY (iata),

    INDEX (name),
    
    CONSTRAINT airports_cities_id_fk
        FOREIGN KEY (city_id) REFERENCES cities (id)
);
