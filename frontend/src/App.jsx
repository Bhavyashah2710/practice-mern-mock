import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // TODO: fetch tasks from the backend
  }, []);

  return (
    <main className="container">
      <h1>Task Manager</h1>
      <p>Complete the requirements in TEST.md.</p>

      {/* TODO: add task form */}
      {/* TODO: render task list */}
      {/* TODO: implement complete/delete actions */}
    </main>
  );
}

export default App;
