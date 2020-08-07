CREATE TABLE IF NOT EXISTS countries
(
    a3_iso_code     CHAR(3)         NOT NULL,
    name            VARCHAR(255)    NOT NULL,

    PRIMARY KEY (a3_iso_code)
);
