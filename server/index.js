import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import sendBulkSMS from "./sendBulkSMS.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Route to send SMS
app.post("/api/send-sms", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // Call your SMS function with just the message
    const result = await sendBulkSMS(message);
    res.json({ success: true, result });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ error: "Failed to send SMS" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
