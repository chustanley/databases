

DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(100),
  `roomname` VARCHAR(100),
  PRIMARY KEY (`id`)
);

CREATE TABLE users (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100),
  PRIMARY KEY (`id`)
);


/* Create other tables and define schemas for them here!
schema.sql is a skeleton schema file intended to create and use a database, and create new tables within it. Aside from writing SQL at the command line, you can also write it in a file  and load it into a running MySQL server. Follow the link and read enough to learn how. In the schema.sql file you will be writing one or more CREATE TABLE statements that will define the structure of your database tables and loading them into your running MySQL server


drop database if exist 'chat'

join tables are in select statments - reasearch this
chat

foreign keys () -

 */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

