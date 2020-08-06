CREATE TABLE IF NOT EXISTS cities
(
    id                  INTEGER         UNSIGNED AUTO_INCREMENT,
    name                VARCHAR(255)    NOT NULL,
    country_a3_iso_code CHAR(3)         NOT NULL,

    PRIMARY KEY (id),

    INDEX (name),
    INDEX (country_a3_iso_code),
    
    CONSTRAINT cities_countries_a3_iso_code_fk
        FOREIGN KEY (country_a3_iso_code) REFERENCES countries (a3_iso_code)
);
