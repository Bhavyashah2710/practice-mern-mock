const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// TODO: connect MongoDB
// TODO: import and mount task routes

app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API is running' });
});

// TODO: mount /api/tasks routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
