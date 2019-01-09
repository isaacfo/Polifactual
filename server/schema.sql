-- ========================================================
<<<<<<< HEAD
--              USERS: NAME, USERNAME, PWHASH, ZIPCODE
=======
--              USERS: NAME, USERNAME, STREETADDRESS, CURRENTSTATE, ZIPCODE, PWHASH
>>>>>>> Kllicks/routing01
-- ========================================================
-- create table name(
--     id serial primary key, 
--     name text, 
--     name varchar(200) unique not null, 
    
-- );


create table users(
    id serial primary key, 
    name text, 
    address text,
    username varchar(200) unique not null, 
    streetaddress text,
    currentstate text,
    zipcode text,
    pwhash varchar(60) not null
   

);

<<<<<<< HEAD




=======
>>>>>>> Kllicks/routing01
