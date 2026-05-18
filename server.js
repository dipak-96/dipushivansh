const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 🔥 STATIC FIX
app.use(express.static(path.join(__dirname, "public")));

// 🔥 HOME ROUTE FIX
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🔥 TEST
app.get("/test", (req, res) => {
    res.send("Server is working 🔥");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
