# 💰 SMART GOAL PLANNER

A full-featured savings management dashboard built for a fintech company to help users plan, track, and manage their financial goals.

## 🚀 Overview

Smart Goal Planner is a personal finance tool that allows users to:

- Create and manage multiple savings goals (e.g., “Travel Fund”, “Emergency Fund”)
- Track progress visually toward each goal
- Make deposits toward specific goals
- View a complete summary of their savings activity

All data is stored and persisted locally using `json-server` and a `db.json` file, enabling full CRUD functionality.

---

## 🧠 Core Features

### ✅ 1. Data Management & Persistence
- All savings data is stored in a local `db.json` file.
- Uses `json-server` to simulate a RESTful backend (`http://localhost:3000/goals`).
- Data is fetched and updated in real-time using standard HTTP methods:
  - `GET`: Fetch all goals
  - `POST`: Add new goal
  - `PUT/PATCH`: Update goal details or saved amount
  - `DELETE`: Remove goal

---

### 🎯 2. Multiple Savings Goals (CRUD)
Users can:
- **Create** new goals including:
  - Goal Name
  - Target Amount
  - Category
  - Deadline
- **Update** existing goals via a user-friendly form
- **Delete** goals no longer needed

---

### 📈 3. Progress Tracking
Each goal displays:
- **Total saved amount** vs **target amount**
- **Remaining amount**
- A **visual progress bar** to show completion status

---

### 💵 4. Make Deposits
- Add deposits to any selected goal
- Automatically updates the `savedAmount` field in `db.json`
- Progress bar reflects new saved amount in real-time

---

### 📊 5. Overview Dashboard
- Displays:
  - Total number of goals
  - Total amount saved across all goals
  - Number of completed goals
  - Days remaining to each goal deadline
- **Alerts**:
  - If a goal deadline is within 30 days and incomplete → ⚠️ *Warning*
  - If a deadline passes without completing the goal → ❗ *Marked as Overdue*

---

## 🛠️ Tech Stack

- **Frontend**: React (or your preferred framework)
- **Backend**: `json-server` for REST API simulation
- **Database**: `db.json` for local data persistence
- **CSS**: Custom styles or frameworks like Tailwind/Bootstrap

---

## 🧪 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/smart-goal-planner.git
cd smart-goal-planner
