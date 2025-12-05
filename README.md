📘 Todo List App
📝 Overview

This Todo List App is a simple, user-friendly task manager built with HTML, CSS, and JavaScript.
Users can add, edit, delete, and toggle (mark complete/incomplete) todos. All todos persist in the browser using localStorage, so tasks stay after refresh or closing the tab.

🚀 Features

✅ Add new todos (with input validation—no empty todos)

✅ Edit existing todos (inline or modal, depending on your UI)

✅ Delete individual todos

✅ Toggle todo completion (mark as completed / uncompleted)

✅ Persist todos using localStorage (save, load on startup)

✅ Real-time UI updates (no page reload required)

✅ Responsive layout (works on mobile & desktop)

✅ Prevent duplicate/empty entries (recommended)

If your implementation includes any additional features (clear all, filter, search, due dates, priority), add them to the Features section above.

🧩 Project Structure
quiz-app/ or todo-app/
├── index.html      # markup
├── style.css       # styles
└── script.js       # app logic (add, edit, delete, toggle, localStorage)

📖 How It Works (Implementation Notes)

Add — User types a todo and clicks Add (or presses Enter). Input is validated; empty strings are rejected.

Render — Each todo is rendered as a list item with:

A checkbox or toggle button to mark complete/incomplete

The todo text (editable)

Edit button

Delete button

Toggle — Clicking the checkbox toggles a completed state in the todo object and updates UI (e.g., strikethrough, faded style).

Edit — Clicking Edit switches the todo into an editable mode. Saving updates the todo text and localStorage.

Delete — Remove a todo from the array and re-render; update localStorage.

Persistence — The app saves the todos array to localStorage after any change:

localStorage.setItem('todos', JSON.stringify(todos));


On load, the app reads and parses the stored todos:

const todos = JSON.parse(localStorage.getItem('todos')) || [];

✅ Example Todo Object Shape
{
  id: 'unique-id-or-timestamp',
  text: 'Buy milk',
  completed: false,
  
}

▶️ How to Run

Clone or download the repo:

git clone <https://github.com/Tanko99/Todo-app>


Open the project folder and run:

Open index.html in a browser (no server required)

Interact with the UI:

Add todos, toggle completion, edit, delete — changes persist automatically.

🧪 Tests & Edge Cases to Handle

Prevent adding empty todos

(Optional) Warn or prevent duplicate todos

Handle edit cancel (revert to previous text)

Ensure toggling updates both UI and localStorage

Handle invalid localStorage data (fallback to [])

🛠️ Future Improvements (optional ideas)

Add filters: All / Active / Completed

Add “Clear completed” button

Add due dates and priority levels

Drag-and-drop reorder (persist order)

Convert to React / Next.js / TypeScript version

Add animations & accessibility improvements (ARIA attributes, keyboard navigation)

🙌 Author

Tanko Fabrice — Frontend Web Developer (HTML, CSS, JavaScript)

