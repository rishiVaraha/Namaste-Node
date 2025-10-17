// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON (useful for POST requests)
app.use(express.json());

// Example GET API
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from Express API!",
    success: true,
    timestamp: new Date().toISOString(),
  });
});

// Example POST API
app.post("/api/data", (req, res) => {
  const { name } = req.body;
  res.json({
    message: `Hello, ${name || "Guest"}!`,
    received: req.body,
    success: true,
  });
});

// Catch-all for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Express server running at http://localhost:${PORT}`);
});
