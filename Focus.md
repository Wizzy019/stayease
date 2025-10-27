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
src/
│
├── App.jsx
│
├── layouts/
│ ├── AuthLayout.jsx // wraps login/register pages
│ └── DashboardLayout.jsx // shared sidebar + topbar wrapper
│
├── components/
│ ├── Navbar.jsx // public nav (landing page)
│ ├── Footer.jsx
│ ├── Sidebar.jsx // dashboard menu
│ ├── DashboardHeader.jsx
│ ├── RoomCard.jsx
│ ├── ServiceCard.jsx
│ ├── StatCard.jsx // for dashboard metrics
│ └── ProtectedRoute.jsx // role-based route guard
│
├── pages/
│ ├── Landing.jsx
│ │
│ ├── auth/
│ │ ├── Login.jsx
│ │ └── Register.jsx
│ │
│ ├── dashboard/
│ │ ├── user/
│ │ │ ├── UserDashboard.jsx
│ │ │ ├── MyBookings.jsx
│ │ │ └── Profile.jsx
│ │ │
│ │ ├── provider/
│ │ │ ├── ProviderDashboard.jsx
│ │ │ ├── MyListings.jsx
│ │ │ └── Earnings.jsx
│ │ │
│ │ └── admin/
│ │ ├── AdminDashboard.jsx
│ │ ├── ManageUsers.jsx
│ │ ├── ManageListings.jsx
│ │ └── Reports.jsx
│
├── context/
│ └── AuthContext.jsx // stores current user + role
│
├── data/
│ ├── rooms.json
│ └── services.json
│
└── main.jsx / index.js

│
├── package.json
├── tailwind.config.js
└── README.md

StayEase — Frontend Build Log (React + Tailwind)

Quick notes

Stack: React (Vite or Create React App), Tailwind CSS, react-router-dom, GitHub (repo), Vercel (deploy).
Auth/Backend: mocked with local JSON / simple mock API until backend ready.

---

Phase 0 — Repo & project bootstrap

Goal: create repo, init project, push initial skeleton.

Tasks:

1. Create GitHub repo: stayease-frontend (private or org as needed).

2. Locally:

# create project (Vite recommended)

npm create vite@latest stayease -- --template react
cd stayease
npm install

# tailwind deps

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom

3. Configure tailwind.config.js content paths:

content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

4. Create base CSS src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

5. Commit & push:

git init
git add .
git commit -m "chore: init project (vite + tailwind)"
git branch -M main
git remote add origin <repo-url>
git push -u origin main

Deliverable: GitHub repo with working npm run dev.

Quick check: npm run dev opens page; Tailwind classes apply.

---

Phase 1 — App skeleton & routing

Goal: wire up routes, layouts, auth mock and role routing.

Files to add (minimum):

src/
main.jsx
App.jsx
index.css
layouts/
AuthLayout.jsx
DashboardLayout.jsx
pages/
Landing.jsx
auth/Login.jsx
dashboard/
user/UserDashboard.jsx
agent/AgentDashboard.jsx
provider/ProviderDashboard.jsx
admin/AdminDashboard.jsx
context/AuthContext.jsx
components/ProtectedRoute.jsx

Key logic:

AuthContext reads/writes {email, role, token?} to localStorage.

Login.jsx accepts role selector (user | agent | provider | admin). On "login" set localStorage and navigate to role dashboard.

ProtectedRoute checks AuthContext and allowedRoles prop.

Example protected route:

<Routes>
  <Route path="/login" element={<AuthLayout><Login/></AuthLayout>} />
  <Route path="/dashboard/user/*" element={
    <ProtectedRoute allowedRoles={['user']}><DashboardLayout><UserDashboard/></DashboardLayout></ProtectedRoute>
  } />
  <!-- similar for agent/provider/admin -->
</Routes>

Deliverable: working multi-route app with mock login → role redirect.

Quick check: login as provider and confirm you land on /dashboard/provider.

Commit message: feat: add routing, layouts, auth context, protected routes

---

Phase 2 — Shared UI components & design system

Goal: create reusable components and Tailwind utility classes.

Components:

components/Navbar.jsx (public)

components/Sidebar.jsx (role-aware)

components/Topbar.jsx

components/RoomCard.jsx, ServiceCard.jsx

components/StatCard.jsx

components/BookingCard.jsx

components/Modal.jsx (book form)

Design tokens / utilities:

Create src/styles/components.css or small Tailwind plugin classes (or just consistent utility patterns).

Define a color palette in tailwind.config.js (extend colors if needed).

Deliverable: consistent look across pages using components.

Quick check: swap a RoomCard on multiple pages to ensure reusability.

Commit message: feat(ui): add shared components and design tokens

---

Phase 3 — Mock data & data fetching

Goal: wire rooms.json and services.json and fetch them as if they were API endpoints.

Add: src/data/rooms.json, src/data/services.json (we already made sample).

Fetch pattern (use in Bookings.jsx / Services.jsx):

useEffect(()=> {
setLoading(true);
fetch('/src/data/rooms.json')
.then(r => r.json())
.then(d => setRooms(d))
.catch(e => setError(e.message))
.finally(()=> setLoading(false));
}, [])

Option: install json-server and run a local fake API:

npm install -g json-server
json-server --watch src/data/db.json --port 4000

# endpoints: http://localhost:4000/rooms

Deliverable: listings render from JSON; handle loading & errors.

Quick check: change a JSON field and see UI update after reload.

Commit message: feat(data): add mock data and fetch logic

---

Phase 4 — Booking flow (client-side)

Goal: implement booking UI, booking form, store bookings in localStorage (simulate POST).

Tasks:

BookingForm.jsx modal with inputs (name, email, date, roomId).

On submit: validate, then POST to mock endpoint or push to localStorage.bookings.

Update Profile/MyBookings page to list bookings.

Quick snippet (save to localStorage):

const saveBooking = (booking) => {
const all = JSON.parse(localStorage.getItem('bookings')||'[]');
all.push(booking);
localStorage.setItem('bookings', JSON.stringify(all));
}

Deliverable: user can “book” and see booking in profile.

Quick check: create a booking → Profile shows it.

Commit: feat(booking): add booking form and local persistence

---

Phase 5 — Role dashboards (content & CRUD)

Goal: make dashboards role-specific with real interactions.

User dashboard:

Quick stats, Recent Bookings list, Recommended Services carousel.

Agent dashboard:

My Properties table (list from rooms.json filtered by owner)

Add Property form (adds to local mock)

Incoming Bookings table (bookings filtered by property id)

Earnings card (sum of booking.price where status === 'paid')

Service provider dashboard:

My Services list (CRUD)

Requests table with Accept / Decline

Ratings & Reviews mock

Admin dashboard:

Manage Users (list users from mock users JSON)

Manage Listings (approve / suspend)

Transactions table and basic charts (use recharts if you want charts)

Deliverables: CRUD UI for each role (mocked, no real backend).

Quick check: agent adds property → visible in My Properties.

Commit: feat(dashboards): add role-specific dashboards and CRUD

---

Phase 6 — Polishing, validation & UX

Goal: improve accessibility, responsive layout, and UX polish.

Checklist:

Mobile-first responsive checks (use Chrome mobile tools).

Form validation (required, email pattern).

Loading skeletons for lists.

Toasts for success / error (e.g., react-hot-toast).

Accessibility: buttons use aria-\*, images have alt text.

Add a dark mode toggle (optional).

Deliverable: polished UI, responsive.

Quick check: run Lighthouse and aim > 90 for Performance/Accessibility where possible.

Commit: chore: polish UI, add validation and responsive fixes

---

Phase 7 — Git workflow, PRs & code review

Goal: simulate team workflow and create clean PRs.

Best practice:

Branch naming: feature/<what>, fix/<what>, chore/<what>.

Each PR: short description, list of changes, screenshots, checklist of tests.

Require 1 review before merging to main (simulate with your own PR).

PR template (short):

Title: feat: add booking form

What/Why:

- Added BookingForm modal to Bookings page (simulate POST to localStorage)

Testing:

- [x] Create a booking and see it in Profile
- [x] Form validations work

Deliverable: merged main with clean history.

Quick check: open a PR and merge it using GitHub UI.

---

Phase 8 — Deploy (Vercel) & preview

Goal: get a live preview link for demos.

Steps:

1. Push main to GitHub.

2. Go to Vercel → New Project → import repo.

3. Vite build command: default (npm run build), Root ./.

4. Environment: none needed for mock JSON.

Deliverable: public preview URL.

Quick check: open URL on mobile and desktop.

Commit: chore(deploy): add vercel config

---

Phase 9 — Handoff notes for backend integration

Goal: be ready to swap mock data for real API endpoints without rewiring components.

Document:

Expected endpoints and sample payloads:

GET /api/rooms → [{id, title, price, location, ownerId, image}]

POST /api/bookings → body {userId, roomId, dateFrom, dateTo, total}

GET /api/bookings?userId=...

GET /api/services

POST /api/services (provider)

Auth: backend should return JWT on login; front-end should save token to localStorage and attach Authorization: Bearer <token> to requests.

Error contract: backend returns {error: 'message'} on failed requests.

Deliverable: API.md in project root with endpoints and examples.

Quick check: replace fetch URL with test backend endpoint and test.

Commit: docs: add API.md for backend handoff

---

Extras — Tests, linting, and CI (optional)

Add ESLint & Prettier (config present already in your folder).

Add simple unit tests for components (vitest or jest).

Add GitHub Actions to run lint/test on PRs.

---

Minimal timeline (suggested)

You said you’ll run this until Monday. Quick sprint plan:

Day 1 (today): Phase 0, Phase 1 (skeleton + login routing)

Day 2: Phase 2 (components) + Phase 3 (mock data)

Day 3: Phase 4 (booking) + Phase 5 (dashboards basic)

Day 4 (Monday): Polish, deploy, docs, and API handoff notes

Adjust based on pace. Small wins = momentum.

---

Deliverable checklist (copy into Trello / Notion)

[✔] Repo created, initial commit

[✔] Tailwind setup verified

[✔] Routing & AuthContext implemented

[✔] Login + role redirect working

[✔] Shared components (Navbar, Sidebar, Cards)

[ ] rooms.json & services.json loaded

[ ] Booking flow implemented (create & list)

[ ] Agent dashboard CRUD (properties)

[ ] Provider dashboard CRUD (services)

[ ] Admin basic management views

[ ] Responsive behavior checked (mobile + desktop)

[ ] Deployed to Vercel with public URL

[ ] API.md ready for backend integration
