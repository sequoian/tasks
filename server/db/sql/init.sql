CREATE TABLE users (
  id            SERIAL PRIMARY KEY,
  email         text NOT NULL UNIQUE,
  password      text NOT NULL,
  date_joined   timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);