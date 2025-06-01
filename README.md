# 🌍 PlanMyTrip – AI-Powered Personalized Travel Planner

Plan smarter, travel better. PlanMyTrip is your AI travel buddy that helps you generate a personalized itinerary based on your destination, trip duration, and interests. Visualize your journey on an interactive map, view accurate weather forecasts, and save your favorite itineraries — all in a clean, intuitive UI.

---

## 🧳 Features

- 🔐 **Clerk Authentication** – Secure user login and signup
- 📍 **Destination Input** – Choose your location and travel duration
- 🎯 **Interest Selection** – Select from nature, culture, food, and more
- 🧠 **AI Itinerary Generation** – Uses Gemini API to generate smart day-wise plans
- 🌦️ **Weather Forecasting** – Forecast shown for your trip period
- 🗺️ **Map Integration** – View itinerary locations as map pins with Leaflet.js
- 💾 **Save & View Trips** – Store and retrieve past itineraries (MongoDB)
- 🗓️ **Interactive Calendar** – Built-in calendar picker for start and end dates
- 💅 **Stunning UI** – Built with Tailwind CSS and ShadCN UI components

---

## 🧰 Tech Stack

| Category       | Tools / Frameworks                       |
|----------------|------------------------------------------|
| Frontend       | React.js, Tailwind CSS, ShadCN UI        |
| Backend        | Node.js, Express.js                      |
| Authentication | Clerk.dev                                |
| AI Engine      | Google Gemini API                        |
| Map            | Leaflet.js                               |
| Weather API    | Open-Meteo (or Tomorrow.io alternative)  |
| Database       | MongoDB + Mongoose                       |
| Date Picker    | React Calendar                           |

---

## 🧠 AI Prompting (Gemini API)

The app sends a prompt based on:
- Destination
- Duration
- User-selected interests

Example prompt:
> "Plan a 7-day trip to Manali for a user interested in nature and local food. Include must-visit places and daily morning to evening schedule."

Gemini responds with structured day-wise plans that are parsed and shown in the UI.

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/planmytrip.git
cd planmytrip


2. Set up environment variables
Backend (/server/.env)

MONGO_URI=your_mongodb_uri
GEMINI_API_KEY=your_google_gemini_key
WEATHER_API_KEY=your_weather_api_key
PORT=5000
Frontend (/client/.env)

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_BACKEND_URL=http://localhost:5000
3. Install dependencies

# Backend
cd server
npm install

# Frontend
cd ../client
npm install
4. Run the application

# Start backend
cd server
npm run dev

# Start frontend
cd ../client
npm run dev
App will run at: http://localhost:5173

🗃️ Folder Structure

planmytrip/
├── client/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── utils/
│   └── App.jsx
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── index.js
