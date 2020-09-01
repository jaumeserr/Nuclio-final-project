CREATE TABLE IF NOT EXISTS airports
(
    iata            CHAR(3)         NOT NULL,
    city_name       VARCHAR(255)    NOT NULL,
    created_at      TIMESTAMP       NULL DEFAULT NOW(),
    updated_at      TIMESTAMP       NULL DEFAULT NOW(),

    PRIMARY KEY (iata),

    INDEX (city_name)
);
