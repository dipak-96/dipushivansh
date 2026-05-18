const express = require("express");
const path = require("path");

const app = express();

// root files serve
app.use(express.static(__dirname));

// homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// test
app.get("/test", (req, res) => {
    res.send("Server working 🔥");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
