const express = require('express');
const app = express();
const PORT = 3000;

// பயனர் அனுப்பும் JSON தரவை சர்வர் புரிந்துகொள்ள இது தேவை
app.use(express.json());

// தற்காலிகமாகத் தரவைச் சேமிக்க ஒரு Array (In-Memory Database)
let users = [
    { id: 1, name: "Gayan" },
    { id: 2, name: "Afrijah" }
];

/* ==========================================
   1. GET Method - அனைத்து பயனர் தரவையும் எடுக்க
   ========================================== */
app.get('/users', (req, res) => {
    res.status(200).json(users);
});

/* ==========================================
   2. POST Method - புதிய பயனரை உருவாக்க (Validation உடன்)
   ========================================== */
app.post('/users', (req, res) => {
    const { name } = req.body;

    // அடிப்படை தரவு சரிபார்ப்பு (Data Validation)
    if (!name || name.trim() === "") {
        return res.status(400).json({ error: "Name field is required and cannot be empty!" });
    }

    // புதிய பயனர் விவரத்தைச் சேர்த்தல்
    const newUser = {
        id: users.length + 1,
        name: name
    };
    users.push(newUser);

    // வெற்றிகரமாக உருவாக்கப்பட்டது என்பதற்கான ரெஸ்பான்ஸ்
    res.status(201).json({
        message: "User created successfully!",
        user: newUser
    });
});

// சர்வரை ஆன் செய்தல்
app.listen(PORT, () => {
    console.log(`Backend Server is running on http://localhost:${PORT}`);
});