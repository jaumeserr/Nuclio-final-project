CREATE TABLE IF NOT EXISTS flight_instances
(
    id                          SERIAL,
    dpt_datetime                TIMESTAMP        NOT NULL,
    arr_datetime                TIMESTAMP        NOT NULL,
    flight_const_flight_num     CHAR(4)         NOT NULL,
    price_eur                   DECIMAL(6,2)    NOT NULL,
    created_at                  TIMESTAMP       NULL DEFAULT NOW(),
    updated_at                  TIMESTAMP       NULL DEFAULT NOW(),

    PRIMARY KEY (id),

    CONSTRAINT flight_instances_flight_const_flight_num_fk
        FOREIGN KEY (flight_const_flight_num) REFERENCES flight_consts (flight_num)
);
