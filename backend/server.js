const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load projects data
const projectsFilePath = path.join(__dirname, 'projects.json');
let projects = JSON.parse(fs.readFileSync(projectsFilePath, 'utf8'));

// Routes

// GET all projects
app.get('/projects', (req, res) => {
  res.json(projects);
});

// GET specific project by ID
app.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  
  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }
  
  res.json(project);
});

// POST new project (optional - for future admin functionality)
app.post('/projects', (req, res) => {
  try {
    const newProject = {
      id: `p${Date.now()}`,
      ...req.body,
      status: req.body.status || 'Planning'
    };
    
    projects.push(newProject);
    
    // Save to file
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
    
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create project' });
  }
});

// UPDATE project (optional - for future admin functionality)
app.put('/projects/:id', (req, res) => {
  try {
    const index = projects.findIndex(p => p.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    projects[index] = { ...projects[index], ...req.body };
    
    // Save to file
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
    
    res.json(projects[index]);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update project' });
  }
});

// DELETE project (optional - for future admin functionality)
app.delete('/projects/:id', (req, res) => {
  try {
    const index = projects.findIndex(p => p.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    const deletedProject = projects.splice(index, 1);
    
    // Save to file
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
    
    res.json(deletedProject[0]);
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete project' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
