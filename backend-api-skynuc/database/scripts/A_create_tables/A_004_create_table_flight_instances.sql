CREATE TABLE IF NOT EXISTS flight_instances
(
    id                          INTEGER         UNSIGNED AUTO_INCREMENT,
    dpt_datetime                DATETIME        NOT NULL,
    arr_datetime                DATETIME        NOT NULL,
    flight_consts_flight_num    CHAR(4)         NOT NULL,
    price_eur                   DECIMAL(6,2)    NOT NULL,

    PRIMARY KEY (id),

    INDEX (dpt_datetime),
    INDEX (arr_datetime),
    INDEX (flight_consts_flight_num),

    CONSTRAINT flight_instances_flight_consts_flight_num_fk
        FOREIGN KEY (flight_consts_flight_num) REFERENCES flight_consts (flight_num)
);
