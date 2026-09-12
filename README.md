<div align="center">

# 🚀 DevStack — Tech Stack Explorer

  <p align="center">
    A modern, interactive web application built with <strong>React JS</strong> to help developers explore, compare, and curate their ideal tech stack for any project.
  </p>

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 📖 Overview

**DevStack** provides an intuitive interface for browsing developer tools across frontend, backend, database, mobile, and DevOps ecosystems. Select technologies side-by-side, organize your stack with live sticky tracking, and streamline architectural decisions.

---

## ⚛️ Features Implemented

1. 🧩 **Modular Component Architecture**  
   Built using clean, modern functional components (`Navbar`, `Banner`, `ExploreSection`, `TechCard`, `YourStack`, `Footer`) to promote code reusability, single-responsibility logic, and maintainability.

2. ⚡ **State Management (`useState` Hook)**  
   Utilized `useState` to manage complex dynamic interactions across the app, including mobile menu toggling (`isOpen`) and managing selected items within the "Your Stack" drawer array.

3. 🔀 **Props & Event Callback Handlers**  
   Implemented unidirectional data flow by passing down data via `props` and lifting state up through custom callback functions like `onToggleStack`, `onRemoveFromStack`, and `onClearAll`.
