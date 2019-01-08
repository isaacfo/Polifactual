-- ========================================================
--              USERS: NAME, USERNAME, STREETADDRESS, CURRENTSTATE, ZIPCODE, PWHASH
-- ========================================================
create table users (
    id serial primary key, 
    name text, 
    username varchar(200) unique not null, 
    streetaddress text,
    currentstate text,
    zipcode text,
    pwhash varchar(60) not null
);

