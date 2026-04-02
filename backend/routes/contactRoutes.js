const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// SAVE contact
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "Saved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET contacts (admin)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
