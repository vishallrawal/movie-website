# 🎬 MovieBox Office | Premium Movie Ticket Booking Simulator

<div align="center">
   
   [![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-success?style=for-the-badge)](https://github.com/vishallrawal/movie-website)
[![Creator](https://img.shields.io/badge/Developer-Vishal%20Rawal-blue?style=for-the-badge)](https://github.com/vishallrawal)
(https://vishallrawal.github.io/movie-website/)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-emerald-500?style=for-the-badge)](https://github.com/vishallrawal/movie-website)
[![Creator](https://img.shields.io/badge/Developed%20By-Vishal%20Rawal-blue-600?style=for-the-badge)](https://github.com/vishallrawal)

</div>

---

## 🍿 Project Concept & Overview
**MovieBox Office** is a premium, fully responsive movie ticket booking interface designed to deliver a smooth and engaging movie ticket reservation experience. Built with native web technologies, it features fluid animations, interactive seat booking selections, and user account mock verification systems.

> [!TIP]
> **Experience it Live:** [https://vishallrawal.github.io/movie-website/](https://vishallrawal.github.io/movie-website/)

---

## 💎 Key Features & Capabilities

### 1. Interactive Cinema Seat Selection Grid
- A dynamically generated theater seating layout (80 seats total).
- Real-time status tags (Available, Selected, Booked).
- Integrated random booking simulation (pre-assigns blocked seats on page mount).

### 2. Showtime TIMINGS Picker
- Select from multiple showtimes (10:00 AM, 02:30 PM, 06:00 PM, 09:30 PM).
- Dynamic button highlights ensure validation before ticket submission.

### 3. Integrated Auth Modals
- Built-in Sign In and Sign Up modal systems with form validation (e.g., password matching checks and email structures).

### 4. Vanilla Material Ripple Animation
- Dynamic click ripples on all buttons, seat vectors, movie cards, and links to mimic modern design paradigms.

### 5. Summary Receipt alerts
- Completing a booking triggers a structured receipt display containing Selected Movie, Showtime, User details, and Selected Seat coordinates.

---

## 🏛️ System Architecture

* **Markup**: Semantic HTML5 layout structure.
* **Styling**: Responsive Vanilla CSS3 using flexboxes, grid layers, custom modal animation overlays, and focus status styles.
* **Logic**: Event-driven client-side JavaScript (ES6+) utilizing `localStorage` to pass selected movie values from catalog views directly into active ticket booking sessions.

---

## 📂 Project Structure
```text
/movie-website
├── index.html          # Main Homepage
├── movies.html         # Movie Catalog
├── booking.html        # Interactive Booking Console
├── style.css           # Custom CSS Stylesheet
├── script.js           # Event Handlers & Layout Logic
├── README.md           # Documentation
└── *.jpg / *.webp      # High-Resolution Movie Posters
```

---

## ⚙️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/vishallrawal/movie-website.git
   ```
2. Open `index.html` directly in any web browser, or launch it with a local server like **Live Server** in VS Code.

---

## 🧑‍💻 Creator & Developer
* **Name**: Vishal Rawal
* **GitHub**: [@vishallrawal](https://github.com/vishallrawal)
* **Project Repository**: [movie-website](https://github.com/vishallrawal/movie-website)
