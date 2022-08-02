const inquirer = require('inquirer')
const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host: 'localhost',
    database: 'employee_management',
    user: 'root',
    password: '4321'
})
//pulls in roles table
async function getRoles() {
    const result = await connection.query(`SELECT * FROM Roles`)
    return result[0]
 }
//pulls in roles table and then places it in a table readable in the terminal
async function roles() {
    const results = await connection.query(`SELECT Roles.title, Roles.role_id, Departments.department, Roles.salary
    FROM Roles
    JOIN Departments on Roles.role_dep = Departments.dep_role;`)
    console.table(results[0])
    start()
}
// function to add role into the database
async function add_role() {
    //get * departments
    //inside inquirer show all departments as a list, select one to add a role
    //when selected grab id of department
    const departments = await getDepartments()
    console.log(departments);
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'insert title of role:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'insert salary:'
        },
        {
            type: 'list',
            name: 'role_dep',
            message: 'choose ',
            choices: departments.map(dep => {
                return {
                    name: dep.department,
                    value: dep.id
                }
            })
        }
    ])
    .then((res) => {
        connection.query(`INSERT INTO Roles (title, salary, role_dep) VALUES ('${res.title}', ${res.salary}, ${res.role_dep});`)
    })
    .then(start)
}
//pulls all departments from departments table
async function getDepartments() {
   const result = await connection.query(`SELECT * FROM Departments`)
   return result[0]
}
//pulls all departments and displays them in a table readable in the terminal
async function departments() {
    const results = await connection.query(`SELECT * FROM Departments`)
    console.table(results[0])
    start()
}
//function to add a department into the database
function add_department() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'insert department name:'
        }
    ]).then(start)
}
//displays a table made up of pieces of each of the 3 tables and is readable in the terminal
async function employees() {
    const results = await connection.query(`SELECT Employees.id, Employees.first_name, Employees.last_name, Employees.title, Departments.department, Roles.salary, Employees.manager
    FROM Employees, Departments, Roles
    WHERE Employees.title = Roles.title AND Roles.role_dep = Departments.dep_role`)
    console.table(results[0])
    start()
}
//function to add an employee into the database
async function add_employee() {
    const roles = await getRoles()
    inquirer.prompt([
        {
            type: 'input',
            name: 'first',
            message: 'insert employee first name:'
        },
        {
            type: 'input',
            name: 'last',
            message: 'insert employee last name:'
        },
        {
            type: 'list',
            name: 'role',
            message: 'choose ',
            choices: roles.map(role => {
                return {
                    name: role.title,
                    value: role.role_dep
                }
            })
        },
        {
            type: 'input',
            name: 'manager',
            message: 'insert employee manager if applicable:'
        }
    ])
    .then((res) => {
        connection.query(`INSERT INTO Employees (first_name, last_name, title, manager) VALUES ('${res.first}', '${res.last}', '${res.role}', '${res.manager}');`)
    })
    .then(start)
}

//exit function to end when completed
async function exit() {
    prompt.ui.close()
}

// start function, all other functions will run this after finishing their own function
async function start() {
    const results = await inquirer.prompt([
        {
            type: 'list',
            name: 'start',
            message: 'choose an option:',
            choices: ['View all Departments', 'Add Department','View all Roles', 'Add Role', 'View all Employees', 'Add Employee', 'Exit']
        }
    ]).then((res) => {
        if (res.start === 'View all Departments') {
            departments()
        } else if (res.start === 'View all Roles') {
            roles()
        } else if (res.start === 'View all Employees') {
            employees()
        } else if (res.start === 'Add Employee') {
            add_employee()
        } else if (res.start === 'Add Department') {
            add_department()
        } else if (res.start === 'Add Role') {
            add_role()
        } else if (res.start === 'Exit') {
            exit()
        }
    })
}

start()