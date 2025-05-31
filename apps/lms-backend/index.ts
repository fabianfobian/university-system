import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("LMS Backend is running!");
});

app.listen(PORT, () => {
  console.log(`LMS Backend listening on port ${PORT}`);
});