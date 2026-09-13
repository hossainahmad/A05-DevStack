<div align="center">

# 🚀 DevStack — Tech Stack Explorer

  <p align="center">
    A modern, interactive web application built with <strong>React JS</strong> to help developers explore, compare, and curate their ideal tech stack for any project.
  </p>

---

## Technology I used

 **Frontend Library:** React JS (Functional Components)
 **Programming Language:** TypeScript
 **Styling Framework:** Tailwind CSS and DaisyUI
 **Notification Management:** React Toastify

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

<div>
  
  ## 📖 React questions and answers

  1. **JSX** (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside our JavaScript code. React uses it to make UI structure and rendering easier.
  2. **Props** are read-only and passed from a parent component to a child component to supply dynamic data. **State** is mutable local data managed directly within a component that trigger a UI re-render when changed.
  3. **useState** adds local state to a functional component and triggers a re-render when updated.
  4. **useEffect** handles side effects in functional components. We need this to fetch our JSON file asynchronously after the initial component renders.
  5. React uses unique keys to track which specific list items are changed. This enables updates without re-rendering the entire list.
  6. Conditional rendering displays different UI elements based on specific conditions or state. I used it in _YourStack.tsx_ to render an empty state message when no items are selected.
  7. I pass data directly as props. It is like passing from parent to child. And I pass a callback function from the parent as a prop.
  
</div>
