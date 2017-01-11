# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## channel_joins
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed
channel_id      | integer   | not null, indexed

## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
owner_id    | integer   | not null, foreign key (references users), indexed

## direct_messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
to_id       | integer   | not null, foreign key (references users), indexed
from_id     | integer   | not null, foreign key (references users), indexed
(each combination of from and to ids will be validated for uniqueness, will need refactoring to support team chat)

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
postable    | references | polymorphic, indexed
author_id   | integer   | not null, foreign key (references users), indexed
body        | text      | not null
