CREATE DATABASE note_db;

CREATE TABLE notes(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    note TEXT
);
