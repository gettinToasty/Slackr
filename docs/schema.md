# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
owner_id    | integer   | not null, foreign key (references users), indexed

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
postable    | references | polymorphic, indexed
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null
