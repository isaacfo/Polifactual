-- ============================================================================
--                  USERS: NAME, USERNAME, PWHASH
-- ============================================================================
insert into users
    (name, username, pwhash)
values
    ('NAME1', 'USERNAME1', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK'),
    ('NAME2', 'USERNAME2', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK'),
    ('NAME3', 'USERNAME3', '$2b$10$QUJ346ylCYC7rIS2cbqEq.l4o.HCL6r.pZokcF6Tivha/UTXDi.JK');





-- ============================================================================
--                  ALBUMS
-- ============================================================================
-- insert into albums
--     (name, code)
-- values
--     ('insert into albums1', ''),
--     ('insert into albums2', ''),
--     ('insert into albums3', ''),
--     ('insert into albums4', ''),
--     ('insert into albums5', '');





-- ============================================================================
--                  IMAGES
-- ============================================================================
insert into images
    (url, users_id)
values
    ('/images/1.png', 1),
    ('/images/2.png', 1),
    ('/images/3.png', 1),
    ('/images/4.png', 2),
    ('/images/5.png', 2);





