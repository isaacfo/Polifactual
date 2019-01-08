-- ========================================================
--              USERS: NAME, USERNAME, PWHASH, ZIPCODE
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
    pwhash varchar(60) not null
   

);





