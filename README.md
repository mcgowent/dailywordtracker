# Writer Daily Tracker

A lightweight writing analytics dashboard built with **React + Vite** that helps writers track daily word counts, monitor progress toward goals, and visualize writing habits over time.

This project was built as a portfolio piece to demonstrate practical frontend development skills including state management, data visualization, file import/export, and responsive UI design.

---

# Live Demo

https://vercel.com/timothy-mcgowens-projects/dailywordtracker

---

# Overview

Writer Daily Tracker allows writers to log their writing sessions and visualize productivity trends through charts, heatmaps, and goal tracking.

The application supports multiple writing sessions per day and aggregates them into daily totals for accurate analytics.

All data is stored locally in the browser for fast performance and simplicity.

---

# Features

## Writing Entry Tracking

- Log daily writing sessions
- Track words written per project
- Add optional notes to entries
- Support multiple sessions per day

## Visual Analytics

- Weekly writing trend chart
- Writing heatmap (similar to GitHub contribution graphs)
- Monthly word totals
- Writing streak tracker
- Longest streak tracking

## Goal Tracking

- Daily writing goal
- Weekly writing goal
- Monthly writing goal
- Project-specific word count goals
- Visual progress bars

## Data Management

- Bulk Excel import
- Export writing history to Excel
- Select multiple entries for deletion
- Editable entries

## Responsive Design

- Mobile-friendly layout
- Sidebar navigation adapts to small screens
- Tables support horizontal scrolling on mobile

---

### Dashboard

Shows writing progress, goals, streaks, and trends.

### Entries Page

Add, edit, import, export, and manage writing entries.

### Stats Page

Visual breakdown of writing habits over time.

---

# Tech Stack

Frontend:

- React
- Vite
- JavaScript (ES6+)

Libraries:

- Recharts – data visualization
- SheetJS (xlsx) – Excel import/export
- React Router – client-side routing

State & Storage:

- React Context
- localStorage persistence

Deployment:

- Vercel

---

# Project Structure

src
├── components
│ ├── dashboard
│ ├── entries
│ ├── layout
│ ├── stats
│ └── ui
│
├── pages
│ ├── DashboardPage.jsx
│ ├── EntriesPage.jsx
│ ├── StatsPage.jsx
│ └── SettingsPage.jsx
│
├── hooks
│ ├── useLocalStorage.js
│ └── useWritingStats.js
│
├── utils
│ ├── date.js
│ ├── stats.js
│ └── exportEntries.js
│
├── context
│ └── WritingContext.jsx
│
└── data
└── sampleEntries.js

---

# Running Locally

Clone the repository:

git clone https://github.com/mcgowent/writer-daily-tracker.git

Install dependencies:

npm install

Start the development server:

npm run dev

Open the app:

http://localhost:5173

---

# Building for Production

npm run build

Preview the production build:

npm run preview

---

# Data Persistence

All data is stored in the browser using **localStorage**.

This allows the app to run without a backend while keeping user data between sessions.

Users can export their data to Excel for backup.

Future improvements could include optional cloud syncing using a database service.

---

# Future Improvements

Possible future enhancements include:

- Cloud syncing with user accounts
- Authentication
- Writing session timer
- Project-specific analytics dashboards
- Filtering entries by project or date range
- Writing pace predictions
- Goal deadline projections
- Dark/light theme support

---

# What I Learned

This project helped reinforce several practical frontend development concepts:

- Designing reusable React component systems
- Managing shared state with React Context
- Implementing data visualization using Recharts
- Handling Excel file import/export with SheetJS
- Aggregating and transforming dataset analytics
- Building responsive UI layouts
- Structuring a medium-sized React project

---

# Author

Timothy McGowen

Author, developer, and creator of multiple fantasy and LitRPG series.

GitHub: (https://github.com/mcgowent)

---

# License

MIT License
