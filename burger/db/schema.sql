CREATE DATABASE burgers_db;

CREATE TABLE burgers (
'ID' INT AUTO_INCREMENT NOT NULL,
'burger_name' varchar(100),
'devoured'  BOOLEAN,
'date' TIMESTAMP,
PRIMARY KEY (ID)
)