🧠 PRACTICE FOCUS MAP – StayEase Project

1. React Component Structure & Reusability

Practice in:

components/RoomCard.jsx, ServiceCard.jsx, BookingForm.jsx, Navbar.jsx, Footer.jsx
Focus:

Build small, reusable components instead of one giant file.

Pass props (title, price, image, etc.) from parent pages.

Use children prop if needed (e.g., wrapping text or buttons).

2. Routing & Navigation

Practice in:

App.jsx (set up routes), Navbar.jsx (create nav links)
Focus:

Install and use react-router-dom.

Implement page switching (Home, Bookings, Services, Profile).

Highlight the active page using Tailwind styles.

3. Data Fetching (Frontend ↔ Backend Simulation)

Practice in:

pages/Bookings.jsx & pages/Services.jsx
Focus:

Use fetch() or Axios to load data from data/rooms.json or an external API.

Handle loading and error states properly.

Map fetched data into your card components.

4. State Management & Interactivity

Practice in:

BookingForm.jsx, Profile.jsx
Focus:

Use useState for form inputs and submission.

Simulate saving a booking (POST logic or localStorage).

Display booked items in the Profile page.

5. UI/UX Design with Tailwind CSS

Practice in:

Everywhere — especially pages/ and components/ folders.
Focus:

Learn responsive grids, spacing, flex, and hover states.

Recreate clean, minimal designs like those from your EasyBooking Figma.

Add small transitions or shadows to improve feel.

6. Git Collaboration Workflow (Personal Practice)

Practice in:

Throughout the project
Focus

Create branches for each feature (e.g., feature/bookings-page).

Commit often with clear messages.

Simulate team workflow (push, pull, merge).

7. Project Organization & Documentation

Practice in:

Project root + README.md
Focus:

Keep clean folder naming and comments.

Document setup instructions and features.

Reflect real team standards.

8. Integration Thinking

Practice in:

When connecting pages together (e.g., Book Now → BookingForm → Profile).
Focus:

Think of how data flows across components and routes.

Prepare your mind for future backend connections

---

📁 stayease/

stayease/
│
├── public/
│ └── index.html
│
├── src/
│ ├── assets/
│ │ └── images/ # Optional - room or service images
│ │
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── RoomCard.jsx
│ │ ├── ServiceCard.jsx
│ │ └── BookingForm.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Bookings.jsx
│ │ ├── Services.jsx
│ │ └── Profile.jsx
│ │
│ ├── data/
│ │ ├── rooms.json # Fake data (title, price, image, etc.)
│ │ └── services.json # Fake data for services
│ │
│ ├── App.jsx
│ ├── index.js
│ ├── App.css
│ └── main.jsx (if using Vite)
│
├── package.json
├── tailwind.config.js
└── README.md
