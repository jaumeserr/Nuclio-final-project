-- NOT WORKING !!!!!




/*
VERSION 1
SOURCE: https://data36.com/how-to-import-data-into-sql-tables/
(Method #2 in link above)
*/

COPY flight_instances FROM '/real_flight_instances.csv' DELIMITER ',';




/*
VERSION 2
SOURCE: https://www.mysqltutorial.org/import-csv-file-mysql-table/
*/

LOAD DATA INFILE '/real_flight_instances.csv' 
INTO TABLE flight_instances 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;