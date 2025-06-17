# Rick and Morty App

## 🧪 Description

The **Rick and Morty App** is a dynamic and responsive web application that allows users to explore the universe of the Rick and Morty TV show. It provides detailed information about characters, episodes and locations using the public Rick and Morty API.

The user can:

- Browse all characters on the homepage.
- View detailed character profiles.
- Explire all episodes and locations.
- See which characters appear in each episode or live in each locatins.
- Use filters and search to refine results.
- Navigate through paginated data.
- Toggle between dark and light themes.

---

## 🧭 Navigation Overview

- `/` - The upload of the layout that is the Header and the footer among others.
  – **Home**: All characters with filters and search
- `/characters/:id` – Character detail view
- `/episodes` – All episodes
- `/episodes/:id` – Episode detail with characters
- `/locations` – All locations
- `/locations/:id` – Location detail with residents

---

## 🛠 Technologies Used

- **React** -UI library for building components.
- **Redux Toolkit** - State management with slices and async thunks.
- **Vite** - Fast development and build tool.
- **React Router DOM** - Client-side routing.
- **Axios and Fetch API** -Data fetching.
- **CSS Modules** - Style the components.

---

## 📁 Project Structure

The project is structured in the following way:

src/
├── assets/ # Static images (characters, episodes, locations)
├── components/ # Reusable UI components (inside you can find the .jsx files and .css file)
│ ├── backButton/
│ ├── character/
│ ├── characters/
│ ├── episode/
│ ├── filters/
│ ├── footer/
│ ├── header/
│ ├── info/
│ ├── location/
│ ├── logo/
│ ├── noResult/
│ ├── pagination/
│ ├── scrollToTop/
│ ├── search/
│ ├── statusBadge/
│ ├── filter/
├── context/
├── hooks/ # Custom hooks for filters, pagination, search
│ ├── useDimensionLogic/
│ ├── useGenderLogic/
│ ├── usePagesLogic/
│ ├── useSearchLogic/
│ ├── useSpeciesLogic/
│ ├── useStatusLogic/
│ ├── useTypeLogic/
├── pages/ # Page-level components
│ ├── Episodes/
│ ├── Home/
│ ├── Layout/
│ ├── Locations/
├── services/ # API logic and data fetching
│ ├── api/
├── store/ # Redux slices and store configuration
│ ├── charactersSlice/
│ ├── episodesSlice/
│ ├── index/
│ ├── locationsSlice/
└── App.jsx # Main app component with routing
├── main.jsx/

---

## 🧠 State Management

The app uses **Redux Toolkit** with slices for:

- `charactersSlice.js`
- `episodesSlice.js`
- `locationsSlice.js`

Each slice handles:

- Async data fetching
- Pagination and filters
- Detail view caching

---

## 🧩 Custom Hooks

- `useSearchLogic` – Context-aware search
- `usePagesLogic` – Pagination logic
- `useStatusLogic`, `useGenderLogic`, `useSpeciesLogic` – Character filters
- `useTypeLogic`, `useDimensionLogic` – Location filters

---

## 🎨 UI Components

- `Character`, `Episode`, `Location` – Card components
- `CharacterDetails`, `EpisodeDetail`, `LocationDetail` – Detail views
- `Filters`, `FilterGroup` – Dynamic filtering UI
- `Search`, `Pagination`, `StatusBadge`, `Info`, `Title`, `Logo` – Shared components
- `NoResult` – Fallback for empty states

---

## 🖼️ Visual Enhancements

- Unique images for episodes and locations via `episodeImages.js` and `locationImages.js`
- Responsive layout and mobile-friendly design
- Dark/light mode toggle with localStorage persistence

---

## 🚀 Installation

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/rick-and-morty-app.git
cd rick-and-morty-app

# Install dependencies
npm install

# Start the development server
npm run dev
```
