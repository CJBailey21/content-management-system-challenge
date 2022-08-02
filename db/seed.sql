USE employee_management;

INSERT INTO Departments (department, dep_role) VALUES
    ('Department 1', 1),
    ('Department 2', 2),
    ('Department 3', 3);

INSERT INTO Roles (title, salary, role_dep) VALUES
    ('Role 1.1', 3, 1),
    ('Role 2.1', 666, 1),
    ('Role 1.2', 6969, 2),
    ('Role 2.2', 777, 2),
    ('Role 1.3', 1337, 3),
    ('Role 2.3', 11111, 3);

INSERT INTO Employees (id, first_name, last_name, title, manager) VALUES
    (1, 'Master', 'Chief', 'Role 1.1', 'N/A'),
    (2, 'Kion', 'Smith', 'Role 2.2', 'N/A'),
    (3, 'Aurora', 'Apple', 'Role 1.3', 'N/A'),
    (4, 'Money', 'Bags', 'Role 1.2', 'Kion Smith'),
    (5, 'Chef', 'Boyardee', 'Role 2.1', 'Master Chief'),
    (6, 'Mr', 'Peanut', 'Role 2.3', 'Aurora Apple');

