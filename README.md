# TaskIT – Faster Todo App

## Overview
TaskIT is a **lightweight, optimized Todo app** built with **React** and **Zustand**.  
It allows users to **add, edit, complete, and delete tasks**, with persistent data stored in `localStorage`.  
The app uses **memoized components, lazy loading, and selective subscriptions** to ensure high performance, even with many tasks.

---

##  Performance Guidelines (FIREWISE)

**FIREWISE** rules applied during development:

- **F — Feature-first:** Load core UI first; optional components (like StatsPanel) are lazy-loaded.  
- **I — Isolate re-renders:** Components re-render only when their state/data changes (memoization & Zustand selectors).  
- **R — Right state scope:** Domain data = global (Zustand); UI state = local (modals, input fields).  
- **E — Efficient imports:** Import only what is used; enable tree-shaking.  
- **W — Widget owns CSS:** Each component owns its JSX + CSS; no global CSS overrides.  
- **I — Idle preload:** Optional components preloaded during idle time to improve perceived speed.  
- **S — Strip dead code:** Remove unused code, debug logs, and feature flags.  
- **E — Evidence first:** Profile performance before claiming speed improvements.

---

## 🗂 PACTED Planning

### **P — Problem**
Users need a simple, responsive Todo app that **manages tasks efficiently** without performance issues.  

### **A — Audience & Use Cases**
- **Users:** Students, professionals, anyone managing tasks.  
- **Core actions:** Add tasks, edit tasks, delete tasks, toggle completion.  
- **Edge cases:** Handling completed tasks, fast input, simultaneous edits.  

### **C — Constraints & Criteria**
- Frontend only (React + Zustand)  
- Data persistence via `localStorage`  
- Must work offline  
- Minimize re-renders and optimize load time  

### **T — Technical Architecture**
- **State:** Global state for tasks (Zustand); local state for UI (editing, inputs).  
- **Persistence:** `localStorage` sync via `useEffect`.  
- **Side-effects:** Lazy load StatsPanel; toggle completed tasks.  
- **Render boundaries:** Memoized components, selective subscriptions, useCallback for handlers.  

### **E — Execution Plan**
- **MVP:** Add, edit, delete, toggle tasks; persist data; show completed tasks.  
- **Build Phases:**  
  1. Core logic (Zustand store, actions)  
  2. Persistence & side-effects (localStorage, completed toggle)  
  3. UI polish (forms, buttons, toggle, task list)  
  4. Performance optimization (memo, lazy, selective subscriptions)  

### **D — Design Review & Optimization**
- Profile re-renders using React DevTools  
- Use `React.memo`, `useMemo`, and `useCallback`  
- Lazy load optional components like StatsPanel  
- Disable buttons for completed tasks  
- Error handling for invalid inputs  

---

## 📅 Month 4 Roadmap

| Day | Focus |
|-----|-------|
| 1   | React DevTools & rendering insights |
| 2   | Memoization with React.memo & useMemo |
| 3   | useCallback to prevent unnecessary re-renders |
| 4   | Lazy load optional components (StatsPanel) |
| 5   | Preload optional components using `requestIdleCallback` |
| 6   | Performance profiling & fixing bottlenecks |
| 7   | Zustand selectors & optimized state access |
| 8   | Component-level CSS separation & modular styling |
| 9   | Apply FIREWISE rules consistently |
| 10  | Project integration & final optimization |

---

## 🛠 Features

- **Add tasks** with Enter key or Add button  
- **Edit tasks** inline, with input autofocus  
- **Toggle task completion** with a reusable Toggle component  
- **Delete tasks** easily  
- **Stats panel** (lazy-loaded) shows total and completed tasks  
- **Persistent storage** ensures tasks remain across sessions  
- **Performance optimizations** applied (memoization, selective subscriptions, lazy loading)  

---

## Tech Stack

React (Functional Components & Hooks)

Zustand (Global state management)

CSS Modules for component-level styling

Lazy loading & Suspense for optional components

## 🔗 Notes

Each component has its own CSS file to prevent global conflicts.

Optional components are lazy-loaded and preloaded for faster UX.

Completed tasks disable editing to prevent accidental changes.

Memoization ensures minimal re-renders and high performance.



##  How to Run

1. Clone the repo:
```bash
git clone https://github.com/innerweb404-web/TaskIT.git

```
