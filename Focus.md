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
