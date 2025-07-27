# **Lecture 6: Introduction to PostgreSQL + SQL Basics**

---

## 📌 Topics Covered:

1. What is a Relational Database (With Real-Life Example)
2. Setting up PostgreSQL and pgAdmin
3. Creating a Database and Tables
4. SQL Basics: SELECT, INSERT, UPDATE, DELETE
5. Relating Tables with Foreign Keys

---

## 1. 🧠 **What is a Relational Database?**

### 🔍 Definition:

A **Relational Database** stores data in **tables** (also called relations). Each table contains **rows** and **columns**, just like an Excel sheet.

### 💡 Real-Life Analogy:

Imagine a university:

- One table for **students**
- Another for **courses**
- Another for **enrollments**

We can **connect** them using **IDs**, just like student roll numbers and course codes.

---

## 2. ⚙️ **Setting up PostgreSQL and pgAdmin**

### 🧾 PostgreSQL:

An **open-source relational database system**. Very fast, secure, and used in many real-world applications.

### 📊 pgAdmin:

A **GUI tool** to manage PostgreSQL databases easily without writing commands in terminal.

### 🔧 Installation Steps:

1. Download PostgreSQL: https://www.postgresql.org/download/
2. During setup, install pgAdmin as well
3. Create a server in pgAdmin
    - Set password (e.g. `1234`)
    - Connect using pgAdmin to see databases
## 3. 🏗️ **Creating a Database and Tables**

### 🔹 Create Database:

```sql

CREATE DATABASE university;

```

### 🔹 Switch to the database:

```sql

\c university;

```

### 🔹 Create Students Table:

```sql

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

```

### 🔹 Create Courses Table:

```sql

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  credit_hours INT
);

```

---

## 4. 🧪 **Basic SQL Queries**

### 🔹 INSERT

```sql

INSERT INTO students (name, email)
VALUES ('Ali', 'ali@gmail.com');

```

### 🔹 SELECT

```sql

SELECT * FROM students;

```

### 🔹 UPDATE

```sql

UPDATE students
SET name = 'Ali Khan'
WHERE id = 1;

```

### 🔹 DELETE

```sql

DELETE FROM students
WHERE id = 1;

```

📌 These 4 commands are the **foundation** of data manipulation in SQ

---

## 5. 🔗 **Relating Tables with Foreign Keys**

### 🔹 Create Enrollments Table:

```sql

CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  course_id INT REFERENCES courses(id)
);

```

This table **connects students and courses** using their `id`s — this is a **many-to-many relationship**.

### 🔍 Example Insert:

```sql

INSERT INTO enrollments (student_id, course_id)
VALUES (1, 2);

```

Now we know student 1 is enrolled in course 2.

---
Video Link
https://www.youtube.com/watch?v=7S_tz1z_5bA