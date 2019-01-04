-- ========================================================
--              USERS: NAME, USERNAME, PWHASH
-- ========================================================
create table users (
    id serial primary key, 
    name text, 
    username varchar(200) unique not null, 
    pwhash varchar(60) not null
);

