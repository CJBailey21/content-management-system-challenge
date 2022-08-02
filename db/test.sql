USE employee_management

SELECT Roles.title, Roles.role_id, Departments.department, Roles.salary
FROM Roles
JOIN Departments on Roles.role_dep = Departments.dep_role;

SELECT Employees.id, Employees.first_name, Employees.last_name, Employees.title, Departments.department, Roles.salary, Employees.manager
FROM Employees, Departments, Roles
WHERE Employees.title = Roles.title AND Roles.role_dep = Departments.dep_role;