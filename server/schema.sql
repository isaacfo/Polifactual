-- ========================================================
--              USERS: NAME, USERNAME, PWHASH
-- ========================================================
create table users (
    id serial primary key, 
    name text, 
    username varchar(200) unique not null, 
    pwhash varchar(60) not null
);


-- ========================================================
-- ALBUM: NAME, CODE
-- ========================================================

-- create table albums (
--   id serial primary key,
--   name text,
--   code text,
--   user_id integer references users (id) on delete cascade
-- );

-- ========================================================
-- IMAGES : URL 
-- ========================================================

create table images (
  id serial primary key,
  url text,
  users_id integer references users (id) on delete cascade
  -- albums_id integer references albums (id) on delete cascade
);
