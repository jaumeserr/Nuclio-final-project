ALTER TABLE airports
    ADD created_at      TIMESTAMP   NULL DEFAULT NOW(),
    ADD updated_at      TIMESTAMP   NULL DEFAULT NOW();

ALTER TABLE airlines
    ADD created_at      TIMESTAMP   NULL DEFAULT NOW(),
    ADD updated_at      TIMESTAMP   NULL DEFAULT NOW();

ALTER TABLE flight_consts
    ADD created_at      TIMESTAMP   NULL DEFAULT NOW(),
    ADD updated_at      TIMESTAMP   NULL DEFAULT NOW();

ALTER TABLE flight_instances
    ADD created_at      TIMESTAMP   NULL DEFAULT NOW(),
    ADD updated_at      TIMESTAMP   NULL DEFAULT NOW();
