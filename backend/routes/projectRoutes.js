const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single project
// ADD SAMPLE DATA (TEMP ROUTE)
router.get("/seed", async (req, res) => {
  await Project.deleteMany(); // clear old data

  const sampleProjects = [
    {
      title: "Modern Villa",
      location: "Mumbai",
      description: "A luxury modern villa with premium interiors.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      type: "Residential",
      year: "2023",
      area: "8500 sq ft",
      status: "Completed",
      details: ["Swimming Pool", "Smart Home", "Garden"]
    },
    {
      title: "Corporate Office",
      location: "Pune",
      description: "Modern office space with sleek design.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      type: "Commercial",
      year: "2022",
      area: "12000 sq ft",
      status: "Completed",
      details: ["Conference Rooms", "Open Workspace", "Parking"]
    }
  ];

  const inserted = await Project.insertMany(sampleProjects);

  res.json(inserted);
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD project (admin)
router.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
