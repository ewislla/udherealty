import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend to connect

app.post("/contact", (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }
    res.json({ success: "Message received successfully!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
