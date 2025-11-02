🧱 User Dashboard Structure

1️⃣ /dashboard/user → Dashboard Overview

Purpose: give the user a quick snapshot of their activity.

Sections to include:

Welcome header (greet user by name/email)

Quick stats cards:

Active Bookings

Services Booked

Total Spent

Recent Bookings list (short list of latest 3 bookings)

Recommended Rooms/Services carousel (cards pulled from JSON)

Goal: clean summary page, visually rich with cards.

2️⃣ /dashboard/user/bookings → Bookings Page

Purpose: show and manage all user bookings.

Sections:

Table or card list showing:

Property name / service booked

Booking date

Status (pending, confirmed, completed)

Amount

Filter / search bar (optional)

“Book again” or “View details” button (future upgrade)

Goal: functional list view; this is where they track everything.

3️⃣ /dashboard/user/payments → Payments Page

Purpose: list all payments made by user.

Sections:

Summary row with Total spent this month

Table of transactions:

Date

Reference ID

Amount

Status (paid, refunded)

Placeholder “Download receipt” button (mock for now)

Goal: teach you table layout and data formatting (₦ + dates).

4️⃣ /dashboard/user/profile → Profile Page

Purpose: show personal info + editable form.

Sections:

Profile card with user email, role, avatar placeholder.

Editable form (Name, Email, Password, Phone, etc.)

“Save changes” button (just updates localStorage for now).

Goal: introduce controlled forms and update logic.

---

🧠 Logic for Showing Active Bookings on Dashboard

✅ 1. Access the same booking data inside the Dashboard page

You have two options:

Approach When to use Notes

Fetch again in Dashboard Quick prototype Easiest for now
Lift data to Context If multiple components need bookings Best long-term

For now, option 1 is fine — just fetch the bookings inside DashboardHome.jsx.

---

✅ 2. Filter only bookings belonging to the logged-in user

const myBookings = bookings.filter(b => b.userId === user.id);

✅ 3. Filter again for only active ones

const activeBookings = myBookings.filter(b => b.status === "active");

✅ 4. Get the count

const activeCount = activeBookings.length;

✅ 5. Display in a stat card

Something like:

Active Bookings: 3

Later you can add icon, color, and a “View all” link.

---

📌 Quick mental map

Dashboard → fetch bookings → get user → filter for their bookings →
filter active ones → count → show in card

--

✅ Payments Page – Final Logic (Mobile + Desktop Hybrid)

📍 Page Responsibilities

This page will handle:

1. Fetch user payments

2. Filter to only logged-in user

3. Sort by newest

4. Display full payment history

Cards on mobile

Table on desktop

No monthly summary here — that goes to the dashboard.

---

🧠 Data Flow

// 1. Get logged-in user
const { user } = useAuth();

// 2. Fetch payments (mock json or API)
const [payments, setPayments] = useState([]);

useEffect(() => {
fetch("/payments.json")
.then(res => res.json())
.then(data => setPayments(data));
}, []);

// 3. Filter user payments
const myPayments = payments.filter(p => p.userId === user.id);

// 4. Sort by date (newest first)
const sortedPayments = myPayments.sort((a, b) => new Date(b.date) - new Date(a.date));

---

🧩 Status Badge (for Payment Status)

const paymentColors = {
paid: "bg-green-100 text-green-700",
pending: "bg-yellow-100 text-yellow-700",
refunded: "bg-red-100 text-red-700",
};

---
