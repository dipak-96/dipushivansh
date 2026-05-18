const express = require("express");
const mongoose = require("mongoose");

const app = express();

// 🔥 Middleware
app.use(express.json());
app.use(express.static("public"));

// 🔥 MongoDB (अगर अभी नहीं है तो comment कर सकता है)
/*
mongoose.connect("YOUR_MONGODB_ATLAS_LINK")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
*/

// 🔥 Schema (optional अभी के लिए)
/*
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Contact = mongoose.model("Contact", contactSchema);
*/

// 🔥 HOME ROUTE (MOST IMPORTANT FIX)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// 🔥 TEST ROUTE
app.get("/test", (req, res) => {
    res.send("Server is working 🔥");
});

// 🔥 CONTACT API (optional)
/*
app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    await Contact.create({ name, email, message });

    res.json({ success: true });
});
*/

// 🔥 PORT FIX (Render ke liye important)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});