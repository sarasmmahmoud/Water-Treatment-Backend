const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Project routes (to be created)
app.use('/api/projects', require('./routes/projectRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
