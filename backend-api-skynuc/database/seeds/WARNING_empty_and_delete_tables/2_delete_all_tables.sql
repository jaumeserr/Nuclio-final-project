/*
As opposed to TRUNCATE TABLE, DROP TABLE doesn’t just empty the SQL table but instead deletes it. It means that you’ll delete its structure, the previously defined column names, the data types you set — and of course the data in it.
*/

DROP TABLE flight_instances;
DROP TABLE flight_consts;
DROP TABLE airlines;
DROP TABLE airports;
DROP TABLE cities;
DROP TABLE countries;