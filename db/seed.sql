USE employee_management;

INSERT INTO Departments (department) VALUES
    ('Department 1'),
    ('Department 2'),
    ('Department 3');

INSERT INTO Roles (title, salary, role_dep) VALUES
    ('Role 1.1', 3, 1),
    ('Role 2.1', 666, 1),
    ('Role 1.2', 6969, 2),
    ('Role 2.2', 777, 2),
    ('Role 1.3', 1337, 3),
    ('Role 2.3', 11111, 3);

INSERT INTO Employees (id, first_name, last_name, role_id, manager) VALUES
    (1, 'Master', 'Chief', 1, 'N/A'),
    (2, 'Kion', 'Smith', 4, 'N/A'),
    (3, 'Aurora', 'Apple', 5, 'N/A'),
    (4, 'Money', 'Bags', 2, 'Kion Smith'),
    (5, 'Chef', 'Boyardee', 3, 'Master Chief'),
    (6, 'Mr', 'Peanut', 6, 'Aurora Apple');

