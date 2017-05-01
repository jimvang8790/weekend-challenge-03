CREATE TABLE todo(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(12),
  task VARCHAR(140),
  day VARCHAR(12),
  day_to_be_done VARCHAR(12),
);

INSERT INTO todo (name, task, day, day_to_be_done) VALUES ('Jim','Change car oil', '4-27-14', '4-30-17');
INSERT INTO todo (name, task, day, day_to_be_done) VALUES ('Jim','Wash car', '4-28-17', '4-30-17');
INSERT INTO todo (name, task, day, day_to_be_done) VALUES ('Jim','Buy grocery', '4-30-17', '5-2-17');
INSERT INTO todo (name, task, day, day_to_be_done) VALUES ('Jim','Fix broken table in living room', '5-1-17', '5-5-17');
