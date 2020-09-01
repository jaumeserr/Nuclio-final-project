CREATE TABLE IF NOT EXISTS airlines
(
    two_letter_code     CHAR(2)         NOT NULL,
    name                VARCHAR(255)    NOT NULL,
    logo_url            VARCHAR(999)    NULL,
    created_at          TIMESTAMP       NULL DEFAULT NOW(),
    updated_at          TIMESTAMP       NULL DEFAULT NOW(),

    PRIMARY KEY (two_letter_code),

    INDEX (name)
);
