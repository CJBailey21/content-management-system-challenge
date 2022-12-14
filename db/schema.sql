DROP DATABASE employee_management;

CREATE DATABASE employee_management;

USE employee_management;


CREATE TABLE Departments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(250) NOT NULL
);

CREATE TABLE Roles(
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    salary INT,
    role_dep INT,
    FOREIGN KEY (role_dep) REFERENCES Departments(id)
);

CREATE TABLE Employees(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL,
    role_id INT NOT NULL,
    manager VARCHAR(250),
    FOREIGN KEY (role_id) REFERENCES Roles(role_id)
);

-- `SELECT Departments.department, Departments.id WHERE Departments.departments = res.department`

-- `SELECT Roles.title, Roles.id, Departments.department, Roles.salary
-- FROM Roles
-- JOIN Departments on Roles.title = Departments.dep_role`

-- `SELECT Employees.id, Employees.first_name, Employees.last_name, Employees.title, Departments.department, Roles.salary, Employees.manager
-- FROM Employees, Departments, Roles
-- WHERE Employees.title = Roles.title AND Roles.title = Departments.dep_role`