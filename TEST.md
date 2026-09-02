# MERN Full-Stack Mock Assessment

## Candidate Instructions

**Time:** 90 minutes  
**Difficulty:** University pre-test / practical assessment  
**Stack:** MongoDB, Express.js, React.js, Node.js  

> Treat this repository like a real assessment. Read the task carefully, create your own feature branch, implement the requested changes, test locally, commit your work, push your branch, and open a Pull Request to `main`.

## Git Workflow

1. Clone this repository.
2. Create a feature branch using this format:
   `feature/<your-name>`
3. Do all assessment work on that branch.
4. Do **not** commit directly to `main`.
5. Use meaningful commit messages.
6. Push your branch to GitHub.
7. Open a Pull Request from your branch into `main`.

## Assessment Scenario

Build a small **Task Manager** feature for a MERN application.

The starter project contains a Node/Express backend and a React frontend. Your job is to complete the missing functionality described below.

## Backend Requirements — 40 Marks

### 1. Task Model — 10 marks

Create a MongoDB/Mongoose model for a task with:

- `title` — required String
- `description` — optional String
- `completed` — Boolean, default `false`
- `createdAt` — automatically generated timestamp

### 2. API Routes — 20 marks

Implement these REST endpoints:

| Method | Endpoint | Requirement |
|---|---|---|
| GET | `/api/tasks` | Return all tasks |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

For invalid input or a missing task, return an appropriate HTTP status and JSON error message.

### 3. Server Integration — 10 marks

Connect the model and routes to the Express server. Keep MongoDB connection logic separate from route logic where practical.

## Frontend Requirements — 40 Marks

### 4. Display Tasks — 15 marks

Create a React task list that loads tasks from the backend and displays:

- title
- description
- completed status
- a delete button

Show a useful message while loading and when there are no tasks.

### 5. Add Task Form — 15 marks

Create a form that allows the user to enter:

- title
- description

On successful submission, the new task should appear in the list without requiring a full page reload.

### 6. Complete / Toggle Task — 10 marks

Allow the user to toggle the `completed` status of an existing task using the backend API.

## Code Quality & Git — 20 Marks

### 7. Code Quality — 10 marks

- Clear component and variable names
- Reusable React components where reasonable
- Proper error handling
- No unnecessary duplicated code
- Clean project structure

### 8. Git & Pull Request — 10 marks

Your submission must:

- use a feature branch
- contain meaningful commits
- be pushed to GitHub
- include a Pull Request targeting `main`
- include a short PR description explaining what you changed and how you tested it

## Bonus — 10 Marks

Optional bonus work:

- Add filtering for **All / Completed / Pending** tasks.
- Add basic frontend form validation.
- Improve the UI with clean responsive styling.

## Expected API Example

### POST `/api/tasks`

Request:

```json
{
  "title": "Learn Express",
  "description": "Practice REST APIs"
}
```

Successful response should return the created task as JSON.

## Submission Checklist

Before opening the PR, verify:

- [ ] Application starts successfully.
- [ ] MongoDB connection works.
- [ ] GET, POST, PUT and DELETE APIs work.
- [ ] Tasks can be added from React.
- [ ] Tasks can be displayed from React.
- [ ] Tasks can be marked complete/pending.
- [ ] Tasks can be deleted.
- [ ] No work was committed directly to `main`.
- [ ] Feature branch is pushed.
- [ ] Pull Request is opened against `main`.

## Important

Do not modify this assessment document. Complete the task in the application code and submit your solution through the required Git workflow.
