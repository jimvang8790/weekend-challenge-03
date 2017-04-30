CREATE TABLE todo(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(12),
  task VARCHAR(140),
  day_to_be_done VARCHAR(12),
  completed BOOLEAN
);

INSERT INTO todo (name, task, day_to_be_done, completed) VALUES ('Jim','Change car oil', '4-30-17', true);
INSERT INTO todo (name, task, day_to_be_done, completed) VALUES ('Jim','Wash car', '4-30-17', true);
INSERT INTO todo (name, task, day_to_be_done, completed) VALUES ('Jim','Buy grocery', '5-2-17', false);
INSERT INTO todo (name, task, day_to_be_done, completed) VALUES ('Jim','Fix broken table in living room', '5-5-17', false);
