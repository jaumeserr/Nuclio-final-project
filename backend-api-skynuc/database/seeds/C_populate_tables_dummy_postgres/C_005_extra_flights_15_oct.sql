INSERT INTO flight_consts (flight_num, airline_two_letter_code, dpt_airport_iata, arr_airport_iata) VALUES (1115, 'AF', 'BCN', 'MAD');
INSERT INTO flight_consts (flight_num, airline_two_letter_code, dpt_airport_iata, arr_airport_iata) VALUES (3335, 'KL', 'BCN', 'MAD');
INSERT INTO flight_consts (flight_num, airline_two_letter_code, dpt_airport_iata, arr_airport_iata) VALUES (4445, 'TP', 'BCN', 'MAD');

INSERT INTO flight_instances (id, dpt_datetime, arr_datetime, flight_const_flight_num, price_eur) VALUES (41, '2020-10-15 19:30:30', '2020-10-15 22:00:30', 2224, 180.70);
INSERT INTO flight_instances (id, dpt_datetime, arr_datetime, flight_const_flight_num, price_eur) VALUES (42, '2020-10-15 08:10:10', '2020-10-15 10:40:10', 5552, 120.90);
INSERT INTO flight_instances (id, dpt_datetime, arr_datetime, flight_const_flight_num, price_eur) VALUES (43, '2020-10-15 18:00:30', '2020-10-15 20:30:30', 5552, 50.30);
INSERT INTO flight_instances (id, dpt_datetime, arr_datetime, flight_const_flight_num, price_eur) VALUES (44, '2020-10-15 09:15:40', '2020-10-15 11:45:40', 1115, 425.00);
INSERT INTO flight_instances (id, dpt_datetime, arr_datetime, flight_const_flight_num, price_eur) VALUES (45, '2020-10-15 21:00:00', '2020-10-15 23:30:00', 1115, 183.60);
INSERT INTO flight_instances (id, dpt_datetime, arr_datetime, flight_const_flight_num, price_eur) VALUES (46, '2020-10-15 10:30:40', '2020-10-15 13:00:40', 3335, 20.90);
INSERT INTO flight_instances (id, dpt_datetime, arr_datetime, flight_const_flight_num, price_eur) VALUES (47, '2020-10-15 17:10:30', '2020-10-15 19:40:30', 3335, 79.50);
INSERT INTO flight_instances (id, dpt_datetime, arr_datetime, flight_const_flight_num, price_eur) VALUES (48, '2020-10-15 01:50:33', '2020-10-15 04:20:33', 4445, 122.90);
INSERT INTO flight_instances (id, dpt_datetime, arr_datetime, flight_const_flight_num, price_eur) VALUES (49, '2020-10-15 22:00:00', '2020-10-16 00:30:00', 4445, 156.80);

