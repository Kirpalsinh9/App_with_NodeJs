-- Up 
CREATE TABLE students(
  student_id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstname TEXT,
  lastname TEXT
);

CREATE TABLE teachers(
  teacher_id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstname TEXT,
 lastname TEXT
);

CREATE TABLE classes(
 class_id INTEGER PRIMARY KEY AUTOINCREMENT,
 code TEXT,
 class_name TEXT,
 teacher_id INTEGER NOT NULL,
 startDate TEXT,
 endDate TEXT,
  FOREIGN KEY(teacher_id) REFERENCES teachers(teacher_id) 
);

CREATE TABLE student_classes(
  class_id INTEGER,
  student_id INTEGER,
  FOREIGN KEY(student_id) REFERENCES students(student_id),
  FOREIGN KEY(class_id) REFERENCES classes(class_id) 
);

INSERT INTO students(firstname,lastname) VALUES("Krunal","Patel");
INSERT INTO students(firstname,lastname) VALUES("Keval","Patel");
INSERT INTO students(firstname,lastname) VALUES("Fenil","Patel");
INSERT INTO students(firstname,lastname) VALUES("James","Bond");
INSERT INTO students(firstname,lastname) VALUES("Sid","Singh");

INSERT INTO teachers(firstname,lastname) VALUES("Bob","Williams");
INSERT INTO teachers(firstname,lastname) VALUES("Liam","Miller");
INSERT INTO teachers(firstname,lastname) VALUES("Jacob","Davis");
INSERT INTO teachers(firstname,lastname) VALUES("Alexander","Murphy");
INSERT INTO teachers(firstname,lastname) VALUES("Lucas","Smith");

INSERT INTO classes(code,class_name,teacher_id,startDate,endDate) VALUES("001","StackDev1","1","01/04","01/05");
INSERT INTO classes(code,class_name,teacher_id,startDate,endDate) VALUES("002","StackDev2","1","01/04","01/05");
INSERT INTO classes(code,class_name,teacher_id,startDate,endDate) VALUES("003","StackDev3","2","01/04","01/05");
INSERT INTO classes(code,class_name,teacher_id,startDate,endDate) VALUES("004","C++","2","01/04","01/05");
INSERT INTO classes(code,class_name,teacher_id,startDate,endDate) VALUES("005","Maths","3","01/04","01/05");

INSERT INTO student_classes(class_id,student_id) VALUES("1","1");
INSERT INTO student_classes(class_id,student_id) VALUES("1","2");
INSERT INTO student_classes(class_id,student_id) VALUES("1","3");
INSERT INTO student_classes(class_id,student_id) VALUES("1","4");
INSERT INTO student_classes(class_id,student_id) VALUES("2","5");
INSERT INTO student_classes(class_id,student_id) VALUES("2","1");
INSERT INTO student_classes(class_id,student_id) VALUES("2","2");
INSERT INTO student_classes(class_id,student_id) VALUES("3","4");
INSERT INTO student_classes(class_id,student_id) VALUES("3","5");
INSERT INTO student_classes(class_id,student_id) VALUES("4","3");
INSERT INTO student_classes(class_id,student_id) VALUES("4","5");
INSERT INTO student_classes(class_id,student_id) VALUES("5","1");
INSERT INTO student_classes(class_id,student_id) VALUES("5","2");
-- Down
DROP TABLE students;
DROP TABLE teachers;
DROP TABLE classes;
DROP TABLE student_classes;
