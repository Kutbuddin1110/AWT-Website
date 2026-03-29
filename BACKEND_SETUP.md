# AWT Website - Setup Guide

## Project Structure
```
AWT-Website/
├── backend/                 # Node.js/Express API server
│   ├── server.js           # Main server file
│   ├── projects.json       # Project data
│   ├── package.json
│   └── .env
│
└── frontend/               # React frontend
    ├── src/
    │   ├── pages/          # Page components
    │   ├── components/     # Reusable components
    │   └── api.js          # API configuration
    ├── .env
    └── package.json
```

## Installation & Running

### 1. Backend Setup
```bash
cd backend
npm install
```

### 2. Frontend Setup
```bash
cd frontend
npm install
```

### 3. Start Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
The backend will run on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:3000`

## How the API Works

### Backend Endpoints

The backend provides these endpoints:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/projects` | Fetch all projects |
| GET | `/projects/:id` | Fetch specific project by ID |
| POST | `/projects` | Add new project (with JSON body) |
| PUT | `/projects/:id` | Update project (with JSON body) |
| DELETE | `/projects/:id` | Delete project by ID |
| GET | `/health` | Check if server is running |

### Project Data Structure

Each project object has:
```json
{
  "id": "p1",
  "title": "Project Title",
  "location": "City, State",
  "description": "Project description",
  "type": "Residential",
  "year": "2023",
  "area": "5,000 sq ft",
  "status": "Completed",
  "image": "https://image-url.com",
  "details": ["Feature 1", "Feature 2", ...]
}
```

## Adding New Projects

### Via Backend File (Recommended)
Edit `backend/projects.json` and add a new object:
```json
{
  "id": "p5",
  "title": "New Project",
  "location": "City, State",
  "description": "Description here",
  "type": "Residential",
  "year": "2024",
  "area": "6,000 sq ft",
  "status": "In Progress",
  "image": "https://image-url.com",
  "details": ["Feature 1", "Feature 2"]
}
```

### Via API (POST Request)
Using curl or Postman:
```bash
curl -X POST http://localhost:5000/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Project",
    "location": "City, State",
    "description": "Description here",
    "type": "Residential",
    "year": "2024",
    "area": "6,000 sq ft",
    "status": "Planning",
    "image": "https://image-url.com",
    "details": ["Feature 1", "Feature 2"]
  }'
```

## Frontend Configuration

The frontend connects to the backend via `frontend/.env`:
```
REACT_APP_API_URL=http://localhost:5000
```

### Files That Fetch Data

- **[src/pages/Home.js](frontend/src/pages/Home.js)** - Fetches first 3 projects for hero section
- **[src/pages/Projects.js](frontend/src/pages/Projects.js)** - Fetches all projects
- **[src/pages/ProjectDetail.js](frontend/src/pages/ProjectDetail.js)** - Fetches individual project details

### How Data Flows

```
Backend (projects.json)
    ↓
Express API (server.js)
    ↓
Frontend (api.js makes requests)
    ↓
React Components (Home, Projects, ProjectDetail)
    ↓
Displayed on Screen
```

## Environment Variables

You have two `.env` files:

**Backend (.env):**
```
PORT=5000
NODE_ENV=development
```

**Frontend (.env):**
```
REACT_APP_API_URL=http://localhost:5000
```

## Troubleshooting

**Q: Frontend shows "Unable to load projects"**
- Make sure backend is running on port 5000
- Check that `.env` points to correct API URL
- Open browser console (F12) to see error details

**Q: CORS errors?**
- Backend has CORS enabled for all origins
- Make sure backend server started successfully

**Q: Changes to projects.json not showing?**
- Restart the backend server
- Refresh the frontend

**Q: Want to use a real database?**
- Replace `projects.json` with MongoDB, PostgreSQL, etc.
- Update `server.js` to use database queries instead of file reading
