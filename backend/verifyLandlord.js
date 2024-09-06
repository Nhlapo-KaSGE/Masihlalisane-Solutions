// backend/verifyLandlord.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const mailjet = require('node-mailjet').apiConnect(
    '4b95c6af394c8176895bfab28345a9f3',
    '16d660157e73e952fe87c30e51560a12'
);

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// Function to generate a password
const generatePassword = (idNumber, email) => {
    const symbols = '!@#$%^&*()_+[]{}';
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const firstLetterEmail = email.charAt(0).toUpperCase();
    const thirdDigitID = idNumber.charAt(2);

    return `${randomSymbol}${firstLetterEmail}${thirdDigitID}${idNumber.slice(-4)}`;
};

// Route to verify the landlord
app.post('/verifyLandlord', (req, res) => {
    const { idNumber, email } = req.body;

    // Path to landlords_verification.json
    const filePath = path.join(__dirname, '../database/landlords_verification.json');

    // Read the data from the landlords_verification.json file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading landlord data.' });
        }

        let landlords = JSON.parse(data).landlord_verification;

        // Find the landlord with matching idNumber and email
        const landlord = landlords.find(l => l.idNumber === idNumber && l.email === email);

        if (!landlord) {
            return res.status(400).json({ message: 'Landlord not found. Please check your ID and email.' });
        }

        // Check if the landlord is already verified
        if (landlord.verified) {
            return res.status(400).json({ message: 'Landlord is already verified.' });
        }

        // Mark the landlord as verified and generate a password
        landlord.verified = true;
        const password = generatePassword(idNumber, email);
        landlord.password = password;

        // Write the updated data back to landlords_verification.json
        fs.writeFile(filePath, JSON.stringify({ landlord_verification: landlords }, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving landlord data.' });
            }

            // Send the generated password to the landlord's email
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
                                Name: 'Landlord'
                            }
                        ],
                        Subject: 'Your Verification Password',
                        TextPart: `Hi,\n\nYour verification is complete. Here is your password: ${password}\n\nPlease keep it safe.`
                    }
                ]
            });

            request
                .then(result => {
                    console.log('Email sent:', result.body);
                    return res.status(200).json({ message: 'Landlord verified successfully! A password has been sent to your email.' });
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
