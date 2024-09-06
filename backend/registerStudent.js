// backend/registerStudent.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const mailjet = require('node-mailjet').apiConnect(
    '4b95c6af394c8176895bfab28345a9f3',
    '16d660157e73e952fe87c30e51560a12'
);

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Function to generate a password
const generatePassword = (name, surname, studentNumber) => {
    const symbols = '!@#$%^&*()_+[]{}';
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const firstLetterName = name.charAt(0).toUpperCase();
    const thirdLetterSurname = surname.charAt(2).toLowerCase();

    return `${randomSymbol}${firstLetterName}${thirdLetterSurname}${studentNumber}`;
};

// Route to handle student registration
app.post('/registerStudent', (req, res) => {
    const { studentNumber, name, surname, email } = req.body;

    // Path to the students.json file
    const filePath = path.join(__dirname, '../database/students.json');

    // Read the current data from the students.json file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading student data.' });
        }

        let students = [];
        if (data) {
            students = JSON.parse(data);
        }

        // Check if the student is already registered
        const existingStudent = students.find(student => student.studentNumber === studentNumber || student.email === email);
        if (existingStudent) {
            return res.status(400).json({ message: 'Student is already registered.' });
        }

        // Generate password
        const password = generatePassword(name, surname, studentNumber);

        const studentData = {
            studentNumber,
            name,
            surname,
            email,
            password
        };

        // Add the new student to the array
        students.push(studentData);

        // Write the updated data back to the students.json file
        fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving student data.' });
            }

            // Send the generated password to the student's email
            const request = mailjet.post('send', { version: 'v3.1' }).request({
                Messages: [
                    {
                        From: {
                            Email: 'offcampustaymasihlalisane@gmail.com',
                            Name: 'OffCampuStay'
                        },
                        To: [
                            {
                                Email: email,
                                Name: name
                            }
                        ],
                        Subject: 'Your Registration Password',
                        TextPart: `Hi ${name},\n\nYour registration is complete. Here is your password: ${password}\n\nPlease keep it safe.`
                    }
                ]
            });

            request
                .then(result => {
                    console.log('Email sent:', result.body);
                    return res.status(200).json({ message: 'Student registered successfully and password sent via email.' });
                })
                .catch(err => {
                    console.log('Error sending email:', err.statusCode);
                    return res.status(500).json({ message: 'Error sending email.' });
                });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});










/*// backend/registerStudent.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const mailjet = require('node-mailjet').connect('your-api-key', 'your-secret-key');

const app = express();
const PORT = 3000;

app.use(express.json());

const generatePassword = (name, surname, studentNumber) => {
    const symbols = '!@#$%^&*()_+[]{}';
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const firstLetterName = name.charAt(0).toUpperCase();
    const thirdLetterSurname = surname.charAt(2).toLowerCase();

    return `${randomSymbol}${firstLetterName}${thirdLetterSurname}${studentNumber}`;
};

app.post('/registerStudent', (req, res) => {
    const { studentNumber, name, surname, email } = req.body;

    const password = generatePassword(name, surname, studentNumber);

    const studentData = {
        studentNumber,
        name,
        surname,
        email,
        password
    };

    const filePath = path.join(__dirname, '../database/students.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading student data.' });
        }

        let students = [];
        if (data) {
            students = JSON.parse(data);
        }

        students.push(studentData);

        fs.writeFile(filePath, JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving student data.' });
            }

            const request = mailjet.post("send", { version: 'v3.1' }).request({
                Messages: [
                    {
                        From: {
                            Email: "offcampustaymasihlalisane@gmail.com",
                            Name: "OffCampuStay"
                        },
                        To: [
                            {
                                Email: email,
                                Name: name
                            }
                        ],
                        Subject: "Your Registration Password",
                        TextPart: `Hi ${name},\n\nYour registration is complete. Here is your password: ${password}\n\nPlease keep it safe.`,
                    }
                ]
            });

            request.then((result) => {
                console.log(result.body);
                return res.status(200).json({ message: 'Student registered successfully and password sent via email.' });
            }).catch((err) => {
                console.log('Error sending email:', err.statusCode, err.response.data);
                return res.status(500).json({ message: 'Error sending email.' });
            });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

*/