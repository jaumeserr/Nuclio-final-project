CREATE TABLE IF NOT EXISTS airports
(
    iata            CHAR(3)         NOT NULL,
    city_name       VARCHAR(255)    NOT NULL,

    PRIMARY KEY (iata),

    INDEX (city_name)
);
