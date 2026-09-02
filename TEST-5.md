# Test 5 — Advanced Employee Operations Dashboard

**Time:** 3 hours

> Direct practical task. No questions to answer. This is the hardest mock in the set. Complete the application, test it, commit it on a feature branch, push it, and create a PR to `main`.

## Task

Build a complete **Employee Operations Dashboard** using HTML, CSS, JavaScript, and Node.js.

The application must work with a provided employee JSON dataset and should feel like a small real-world management application.

### 1. Frontend — HTML & CSS

Create a professional dashboard containing:

- Navigation/header
- Employee registration form
- Employee table
- Search controls
- Department and country filters
- Sort controls
- Summary/statistics section
- Empty-state and validation/error messages

Employee fields:

- employee ID
- name
- salary
- age
- country
- department

Use Flexbox, responsive layout, spacing, borders, hover states, and other CSS concepts covered in the course.

### 2. Frontend — JavaScript

Implement all of the following:

- Load and render employee records dynamically.
- Search by employee name.
- Filter by department.
- Filter by country.
- Sort by name, salary, or age.
- Add a new employee.
- Validate the complete form.
- Prevent duplicate employee IDs.
- Delete an employee.
- Edit/update an existing employee.
- Display total employees.
- Display average salary.
- Display highest-paid employee.
- Display department-wise employee counts.
- Display department-wise average salary.
- Keep search, filters, and sorting working together.
- Update the UI immediately after add/edit/delete operations.

Use functions, arrays, objects, loops, DOM manipulation, events, and array methods appropriately.

### 3. Node.js — Data Processing

Use the built-in `fs` module and JSON.

Create a clean Node.js structure with a main file and separate utility module(s).

Implement:

- Read employee JSON using `fs.readFileSync()` with UTF-8.
- Parse JSON using `JSON.parse()`.
- Export reusable employee-processing functions with `module.exports`.
- Import them with `require()`.
- Search employee records from Node.js.
- Calculate total employees and salary statistics.
- Calculate department-wise statistics.
- Add an employee.
- Update an employee.
- Delete an employee.
- Persist all modifications back to the JSON file.
- Handle invalid employee IDs and missing records without crashing.

### 4. Integration

The frontend and Node.js portions should use the same employee-data structure and field names.

Keep the project organized so that HTML, CSS, frontend JavaScript, backend JavaScript, modules, and data files are clearly separated.

### 5. Git/GitHub

Use a feature branch and do not work directly on `main`.

Make meaningful commits as the application develops. Push the branch and create a PR to `main`.

The PR must contain a short description of the implemented features and testing performed.

## Final Completion Checklist

- [ ] Dashboard UI completed
- [ ] Responsive styling completed
- [ ] Dynamic employee rendering works
- [ ] Search works
- [ ] Department filter works
- [ ] Country filter works
- [ ] Sorting works
- [ ] Add works
- [ ] Edit works
- [ ] Delete works
- [ ] Validation works
- [ ] Duplicate IDs prevented
- [ ] Statistics work
- [ ] Department statistics work
- [ ] Node.js JSON reading works
- [ ] Node.js module system works
- [ ] Node.js CRUD/data processing works
- [ ] JSON persistence works
- [ ] Error handling works
- [ ] Git history is meaningful
- [ ] Feature branch pushed
- [ ] PR opened against `main`

**Do not modify this test document. Do not ask for or provide solutions during the test.**
