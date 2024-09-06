const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');  // To handle CORS issues

const app = express();
const port = 3002;

// Middleware to parse JSON bodies and handle CORS
app.use(cors());
app.use(bodyParser.json());

// Function to read data from JSON file
function readData(filename) {
  const data = fs.readFileSync(filename, 'utf-8');
  return JSON.parse(data);
}

// Function to validate user credentials
function validateUser(username, password, userType) {
  if (userType === 'Student') {
    const students = readData('../database/students.json');
    const student = students.find((s) => s.studentNumber === username);
    if (!student) return { valid: false, message: 'Student not found' };

    // Compare plain text passwords
    return student.password === password ? { valid: true } : { valid: false, message: 'Invalid password' };
  } else if (userType === 'Landlord') {
    const landlords = readData('../database/landlords_verification.json').landlord_verification;
    const landlord = landlords.find((l) => l.idNumber === username);
    if (!landlord) return { valid: false, message: 'Landlord not found' };

    // Compare plain text passwords
    return landlord.password === password ? { valid: true } : { valid: false, message: 'Invalid password' };
  }
  return { valid: false, message: 'Invalid user type' };
}

// Route to validate user login
app.post('/login', (req, res) => {
  console.log('Login request received:', req.body); // Debugging log
  const { username, password, userType } = req.body;

  if (!username || !password || !userType) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  const result = validateUser(username, password, userType);
  if (result.valid) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: result.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
