# University Practical Mock — HTML, CSS, JavaScript & Node.js

## Candidate Instructions

**Time:** 3 hours  
**Difficulty:** Based on the material currently present in `mern_at_marque`  
**Topics:** HTML, CSS, JavaScript, Node.js, modules, `fs`, JSON, Git/GitHub

> Treat this repository like a real assessment. There are NO questions to answer. This is a direct implementation task. Read the requirements, create your feature branch, implement the application, test it, commit it, push it, and open a Pull Request.

## Git Workflow

1. Clone this repository.
2. Create a feature branch using `feature/<your-name>`.
3. Do all assessment work on that branch.
4. Do not commit directly to `main`.
5. Use meaningful commit messages.
6. Push your branch to GitHub.
7. Open a Pull Request from your branch into `main`.

## Assessment Task — Employee Management Dashboard

Build a small **Employee Management Dashboard** using the technologies covered so far.

A starter `employees.json` file is provided. Complete the missing frontend and Node.js functionality.

## Part A — HTML & CSS — 25 Marks

Create the employee dashboard page in `frontend/index.html` and `frontend/style.css`.

The page must contain:

- A navigation/header section with the application title.
- An employee input form containing employee ID, name, salary, age, country, and department.
- A search input for employee names.
- A department filter.
- A section where employee records are displayed.
- An empty-state message when no employees match.

Use CSS concepts covered in the course, including Flexbox, spacing, borders, border-radius, hover effects, sizing, typography, and basic responsive behavior.

## Part B — JavaScript — 35 Marks

Implement the application logic in `frontend/script.js`.

The application must:

1. Load employee data from the provided JSON data.
2. Display employees dynamically in an HTML table or employee-card layout.
3. Display employee ID, name, salary, age, country, and department.
4. Implement name search.
5. Implement department filtering.
6. Allow the user to add a new employee through the form.
7. Validate required form values before adding an employee.
8. Update the displayed employee list immediately after adding an employee.
9. Provide a delete action for each employee.
10. Update the displayed list immediately after deletion.

Use arrays, objects, functions, DOM manipulation, events, loops, and array methods where appropriate.

## Part C — Node.js — 30 Marks

Complete the Node.js portion in `backend/` using Node.js and the built-in `fs` module.

Your program must:

1. Read `employees.json` using `fs.readFileSync()`.
2. Use UTF-8 encoding.
3. Convert the JSON string into JavaScript data using `JSON.parse()`.
4. Display the employee data.
5. Create a separate module containing at least two reusable functions related to employee data.
6. Export those functions using `module.exports`.
7. Import the module using `require()`.
8. Use the imported functions from the main Node.js file.
9. Add one new employee to the employee data.
10. Save the updated employee data back to `employees.json` using the appropriate `fs` method.

Keep the Node.js code separated into sensible files.

## Part D — Git & Submission — 10 Marks

Your submission must use a feature branch, contain meaningful commits, be pushed to GitHub, and include a Pull Request targeting `main` with a short description of what you implemented and tested.

## Final Requirements

Before opening the PR, verify that:

- [ ] HTML page opens correctly.
- [ ] CSS styling is applied.
- [ ] Employee data is displayed dynamically.
- [ ] Search works.
- [ ] Department filter works.
- [ ] Add employee works.
- [ ] Delete employee works.
- [ ] Form validation works.
- [ ] Node.js program runs without errors.
- [ ] JSON is read and parsed correctly.
- [ ] Separate Node.js module is imported and used.
- [ ] Updated JSON data is saved correctly.
- [ ] Work is committed on a feature branch.
- [ ] Branch is pushed to GitHub.
- [ ] Pull Request is opened against `main`.

## Important

Do not modify this assessment document. Do not ask for or provide solutions during the assessment. This repository is intended to be completed as a direct practical task.
